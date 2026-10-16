let promesa = new Promise((resolve,reject)=>{
    let saludo = 'hola'
    resolve(saludo)
})

let resultadoPromesa = 'chau'

promesa.then((datos)=>{
    resultadoPromesa = datos
    let variable = 0
    for(let i=0;i < 100000;i++){
        variable++
    }
    console.log(resultadoPromesa)
}).catch((err) => {
    console.log('Ha ocurrido un error')
})

console.log(resultadoPromesa)

