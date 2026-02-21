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
    res.json({
        provider: 'Groq',
        message: 'Cliente Groq criado com sucesso',
        client: !!client
    });
});

// Route para Ollama
router.get('/ollama', async (req, res) => {
    const client = createOllamaClient();
    res.json({
        provider: 'Ollama',
        message: 'Cliente Ollama criado com sucesso',
        client: !!client
    });
});

export default router;