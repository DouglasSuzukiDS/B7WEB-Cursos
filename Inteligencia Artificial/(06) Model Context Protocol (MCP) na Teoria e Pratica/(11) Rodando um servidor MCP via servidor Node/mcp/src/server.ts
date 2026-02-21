import express from 'express'
import cors from 'cors'
import type { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse'
import { createMCPServer } from './mcp-server'

const server = express()
server.use(express.json())
server.use(cors())

const transports: Record<string, SSEServerTransport> = {}

server.get('/mcp', async (requestAnimationFrame, res) => {
   try {
      const transport = new SSEServerTransport('/mcp-message', res)

      const sessionId = transport.sessionId

      transports[sessionId] = transport

      transport.onclose = () => {
         delete transports[sessionId]
      }

      const mcpServer = createMCPServer()

      await mcpServer.connect(transport)

      console.log(`Session ID: ${sessionId}`)
   } catch (error) {
      console.error('Error handling /mcp request:', error)
   }
})

server.post('/mcp-message', async (req, res) => {
   const sessionId = req.query['sessionId'] as string | undefined

   if (!sessionId) {
      res.status(400).send('Missing session ID parameter')
      return
   }

   const transport = transports[sessionId]

   if (!transport) {
      res.status(404).send('Session not found')
      return
   }

   await transport.handlePostMessage(req, res, req.body)
})

server.listen(3001, () => {
   console.log('Server is running on port 3001')
})