const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=>{
    // const newRequest = new http.ClientRequest()
    console.log(req.constructor.name)
    console.log(res.constructor.name)
    // console.log(newRequest)
    console.log(req.headers)
    console.log(req.url)
    res.end('welcome')
})
// request es un evento que ya está creado, al parecer es una solicitud HTTP


server.listen(5000)