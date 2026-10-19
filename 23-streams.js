const {createReadStream} = require('fs')

const stream = createReadStream('./contenido/grande.txt', {highWaterMark: 10, encoding: 'utf8'})
// Con highwatermark modificamos el tamaño del buffer

stream.on('data', (resultado)=>{
    console.log(resultado)
})

stream.on('error', (error)=>{
    console.log(error)
})

console.log(stream.constructor.name)
