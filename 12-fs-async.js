const {readFile, writeFile} = require('fs')

readFile('./contenido/primero.txt', 'utf8',(error, resultado) => {
    if(error){
        console.log(error)
        return
    }
    console.log(resultado)
})