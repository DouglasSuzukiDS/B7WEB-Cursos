const http = require('http')

const server = http.createServer((req, res) => {
   res.end('Docker rodando com Node.js OK :)')
})

server.listen(3001)