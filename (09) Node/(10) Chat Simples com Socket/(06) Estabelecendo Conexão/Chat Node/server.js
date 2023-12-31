const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

server.listen(3000, () => console.log('Running in Port 3000'))

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => { // Quando houver conexao 
   console.log('Conexão detectada...')

   

})