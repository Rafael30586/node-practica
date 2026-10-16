const {readFile, writeFile} = require('fs').promises
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async ()=>{
    try{
        const primero = await readFile('./contenido/primero.txt','utf8')
        const segundo = await readFile('./contenido/segundo.txt','utf8')
        await writeFile('./contenido/resultado.txt', `Buenísimo: ${primero} ${segundo}`)
        console.log(primero, segundo)
    }catch(error){
        console.log(error)

    }
}

start()

