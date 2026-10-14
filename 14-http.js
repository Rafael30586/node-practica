const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify({
        nombre : 'Mario',
        powerup : 'Flor de fuego'
    }))

})

server.listen(5000)