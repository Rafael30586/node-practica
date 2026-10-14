const {readFileSync, writeFileSync} = require('fs')

const primero = readFileSync('./contenido/primero.txt','utf8')
const segundo = readFileSync('./contenido/segundo.txt','utf8')

// console.log(primero, segundo)

// Por alguna razón imprime números en hexadecimal
const primeroSinCodificacion = readFileSync('./contenido/primero.txt')
const segundoSinCodificacion = readFileSync('./contenido/segundo.txt')

// console.log(primeroSinCodificacion, segundoSinCodificacion)

// Por alguna razón, no los imprime como números binarios
const primeroEnBinario = readFileSync('./contenido/primero.txt','binary')
const segundoEnBinario = readFileSync('./contenido/segundo.txt','binary')

// console.log(primeroEnBinario, segundoEnBinario)

const primeroEnASCII = readFileSync('./contenido/primero.txt','ascii')
const segundoEnASCII = readFileSync('./contenido/segundo.txt','ascii')

// console.log(primeroEnASCII, segundoEnASCII)

// Este método está creando el archivo resultado-async.txt y le está escribiendo 
// lo que tengo en el otro argumento
writeFileSync('./contenido/resultado-sync.txt', `Acá está el resultado: ${primero}, ${segundo}`)

// Además, se le puede pasar un objeto como tercer argumento que permita concatenar
// lo que se pasa como segundo argumento a lo anterior

writeFileSync('./contenido/resultado-sync.txt', ' The legend of Zelda', {flag: 'a'})