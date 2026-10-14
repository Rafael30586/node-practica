const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Bienvenido a la página de inicio')
    }else if(req.url === '/about'){
        res.write('Acá está nuestra corta historia')
    }else{
        res.write(`
        <h1>Ups</h1>
        <p>No enconmtramos la página que estás buscando</p>
        <a href="/">De vuelta al inicio</a>
        `)
    }
    res.end()
})

server.listen(5000)