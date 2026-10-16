const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=>{
    res.end('welcome')
})
// request es un evento que ya está creado, al parecer es una solicitud HTTP

server.listen(5000)