const nombres = require('./2-modulo') // Acá estoy importando un módulo
const saludo = require('./3-modulo')
const despedirse = require('./4-modulo')
const datos = require('./6-exportacion-alternativa')

console.log(nombres)

console.log(nombres.link) // Se puede acceder a los valores de una constante del módulo

saludo.saludar(nombres.sonic)

despedirse(nombres.link)

console.log(datos.personita)
console.log(datos.frutas)

