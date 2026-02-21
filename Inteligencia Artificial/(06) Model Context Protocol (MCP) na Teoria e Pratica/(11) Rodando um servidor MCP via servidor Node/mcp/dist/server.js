import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod/v4';
const server = new McpServer({
    name: 'hello-node',
    version: '1.0.0',
});
server.registerTool('calculate_bml', {
    title: 'Calculate BML',
    description: 'Calculates the BML of the user receiving his height (in meters) and his weight (in kilograms).',
    inputSchema: {
        weightKg: z.number(),
        heightM: z.number(),
    }
}, async ({ weightKg, heightM }) => {
    const bml = heightM / (heightM * weightKg);
    return {
        content: [
            { type: 'text', text: bml.toString() }
        ]
    };
});
const transport = new StdioServerTransport();
await server.connect(transport);
