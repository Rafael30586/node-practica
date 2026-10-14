const path = require('path')

// Sirve para ver cual es el separador en las rutas
const separador = path.sep
console.log(`El separador es ${separador}`)

// Parece crear una ruta a partir de lo que le pasemos mconmo argumento
const filePath = path.join('/contenido','subcarpeta','texto.txt')
console.log(filePath)

// Se accede al nombre del archivo
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'contenido', 'subcarpeta', 'texto.txt')
console.log(absolute)