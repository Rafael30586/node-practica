const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('respuesta',()=>{ // Se está creando un evento llamado respuesta
    console.log(`Datos recibidos`)
})

customEmitter.on('respuesta', (nombre, id)=>{ // Se está agregando más lógica al mismo evento
    console.log(`${nombre} tiene id ${id}`)
})

customEmitter.emit('respuesta','Ariel',64) // Se está emitiendo el evento llamado respuesta
// El segundo y tercer argumento pasan como argumento a la segunda lógica del evento porque 
// su callback tiene parámetros