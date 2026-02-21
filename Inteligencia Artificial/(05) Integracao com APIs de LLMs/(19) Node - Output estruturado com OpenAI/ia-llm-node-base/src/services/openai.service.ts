import OpenAI from 'openai';
import { zodTextFormat } from 'openai/helpers/zod';
import z from 'zod'

export function createOpenAIClient() {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY não encontrada nas variáveis de ambiente');
    }

    return new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
}

export const bookFinder = async (search: string) => {
    const bookResponseSchema = z.object({
        title: z.string(),
        author: z.string(),
    })

    const client = createOpenAIClient()

    const response = await client.responses.parse({
        model: 'gpt-4.1-nano-2025-04-14',
        input: [
            { role: 'system', content: 'Você é um guia de livros experiente' },
            { role: 'user', content: `Me de as informações dolivro que possuem essas caracteristicas: ${search}. Se o livro existir uma versão em português, me traga em português.` },
        ],
        text: {
            format: zodTextFormat(bookResponseSchema, 'event'),
        }
    })

    return response.output_parsed ?? false
}