const http = require('http')

const server = http.createServer((req, res) => {
   // res.end(`Docker rodando com Node.js Ok :)`)
   res.end(`Docker rodando com Node.js Ok :) - Author: ${process.env.AUTHOR}`)
})

server.listen(3001)