const http = require('http')

const server = http.createServer((req,res)=>{
   res.statusCode = 401
   res.end()
})

server.listen(5000)