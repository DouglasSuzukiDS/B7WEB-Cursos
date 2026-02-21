import express from 'express';
import {
    createOpenAIClient,
    createAnthropicClient,
    createXAIClient,
    createGoogleClient,
    createGroqClient,
    createOllamaClient
} from '../services/index.js';
import { generateText } from 'ai';
import { xai } from '@ai-sdk/xai';
import { bookFinder, imageReader } from '../services/openai.service.js';

const router = express.Router();

// Route para OpenAI
router.get('/openai', async (req, res) => {
    const client = createOpenAIClient();

    const response = await client.responses.create({
        model: 'gpt-5-nano',
        reasoning: { // Tempo de raciocínio e esforço para a resposta
            effort: 'low',
        },
        input: [
            {
                role: 'system',
                content: [
                    { type: 'input_text', text: 'Seja direto em todas as respostas.' }
                ]
            },
            {
                role: 'developer',
                content: [
                    { type: 'input_text', text: 'Quais os 3 tipos de Haki em One Piece?' }
                ]
            }
        ]
    })

    res.json({ output: response.output_text })
});

router.get('/openai/book-finder', async (req, res) => {
    const book = await bookFinder('O livro fala que o sentido da vida é 42')

    if (!book) {
        res.json({ error: 'Livro não encontrado' })
        return
    }

    res.json({ book })
})

router.get('/openai/image-reader', async (req, res) => {
    const imageUrl = 'https://static.wikia.nocookie.net/onepiece/images/8/87/One_Piece_Anime_Logo.png/revision/latest/scale-to-width-down/1000?cb=20250813211750&path-prefix=pt'

    const imageDescriptiom = await imageReader(imageUrl)

    res.json({ description: imageDescriptiom })
})

// Route para Anthropic (Claude)
router.get('/anthropic', async (req, res) => {
    const client = createAnthropicClient();

    const response = await client.messages.create({
        model: 'claude-3-5-sonnet-latest',
        max_tokens: 1024,
        system: 'Seja direto e responda em uma linha.',
        messages: [
            { role: 'user', content: 'Quais os 3 tipos de Haki em One Piece?' }
        ]
    })

    let message = ''

    for (let contentItem of response.content) {
        if (contentItem.type === 'text') {
            message = contentItem.text
        }
    }

    res.json({
        message
    });
});

// Route para xAI (Grok)
router.get('/xai', async (req, res) => {
    const client = createXAIClient();

    const response = await generateText({
        model: xai('grok-3-mini'),
        system: 'Seja direto e responda em uma linha.',
        prompt: 'Quais os 3 tipos de Haki em One Piece?'
    })

    res.json({
        message: response.text
    });
});

// Route para Google AI (Gemini)
router.get('/google', async (req, res) => {
    const client = createGoogleClient();

    const chat = await client.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: 'Seja direto e responda em uma linha.',
        },
        history: [
            // { role: 'user', parts: [{ text: 'Quais os 3 tipos de Haki em One Piece?' }] }
        ]
    })

    const response1 = await chat.sendMessage({
        message: 'Quais os 3 tipos de Haki em One Piece?',
    })

    const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: 'Seja direto e responda em uma linha.',
        },
        contents: 'quais os 3 tipos de Haki em One Piece?'
    })

    res.json({
        message: response.text
    });
});

// Route para Groq
router.get('/groq', async (req, res) => {
    const client = createGroqClient();

    const response = await client.chat.completions.create({
        model: 'llama3-70b-8192',
        messages: [
            { role: 'system', content: 'Seja direto e responda em uma linha.' },
            { role: 'user', content: 'Quais os 3 tipos de Haki em One Piece?' },
            { role: 'assistant', content: 'Os 3 tipos de Haki em One Piece são: Kenbunshoku Haki (Haki da Observação), Busoshoku Haki (Haki do Armamento) e Haoshoku Haki (Haki do Rei).' },
            { role: 'user', content: 'Qual e o mais poderoso?' }
        ]
    })

    const message = response.choices[0].message.content

    res.json({
        message
    });
});

router.get('/ollama', async (req, res) => {
    const client = createOllamaClient();

    const response = await client.chat({
        model: 'llama3.1',
        messages: [
            { role: 'system', content: 'Seja direto e responsa em uma linha.' },
            { role: 'user', content: 'Quais sãos os 3 tipos de Hakis em One Piece?' },
            { role: 'assistant', content: 'Os 3 tipos de Hakis em One Piece são: Kenbunshoku Haki (Haki da Observação), Busoshoku Haki (Haki do Armamento) e Haoshoku Haki (Haki do Rei).' },
            { role: 'user', content: 'Não são esses?' }
        ]
    })

    res.json({
        message: response.message.content
    });
})

export default router;