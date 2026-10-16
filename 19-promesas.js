const {readFile} = require('fs')

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf8', (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })

    })

}

const comenzar = async ()=> {
    const primero = await getText('./contenido/primero.txt')
    console.log(primero)
}

comenzar()