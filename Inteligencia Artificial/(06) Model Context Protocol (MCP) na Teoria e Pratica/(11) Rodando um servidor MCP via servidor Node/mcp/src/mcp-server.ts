import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod/v4'

export const createMCPServer = () => {
   const server = new McpServer({
      name: 'hello-node',
      version: '1.0.0',
   })

   server.registerTool(
      'calculate_bml',
      {
         title: 'Calculate BML',
         description: 'Calculates the BML of the user receiving his height (in meters) and his weight (in kilograms).',
         inputSchema: {
            weightKg: z.number().describe('Weight of the person in kilograms'),
            heightM: z.number().describe('Height of the person in meters'),
         }
      },
      async ({ weightKg, heightM }) => {
         const bml = weightKg / (heightM * heightM)

         return {
            content: [
               { type: 'text', text: bml.toString() }
            ]
         }
      }
   )

   return server
}
