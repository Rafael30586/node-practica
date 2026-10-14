const os = require('os')

// Información sobre el usuario actual
const user = os.userInfo()
console.log(user)

// Información sobre el tiempo de línea de la computadora
const uptime = os.uptime()
console.log(`El uptime es ${uptime}`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

// Información sobre los CPUs lógicos en la PC
const cpus = os.cpus()
console.log(cpus)
console.log(`Cantidad de CPUs: ${cpus.length}`)

// Información sobre la arquitectura del CPU
const arquitectura = os.arch
console.log(`La arquitectura del CPU es ${arquitectura}`)

const interfacesDeRed = os.networkInterfaces()
console.log(interfacesDeRed)