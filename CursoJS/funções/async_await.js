function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Execultando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Execultando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Execultando promise 3...'))


//Mesmo código usando async await
function retonarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(20), 5000)
    })
}
//await so pode ser chamado em uma função async
async function executar(){
    let valor = await retonarValor()
    await esperarPor(2000)
    console.log(`async/await ${valor}`)
    await esperarPor(2000)
    console.log(`async/await ${valor + 1}`)
    await esperarPor(2000)
    console.log(`async/await ${valor + 2}`)
    
}
executar()

async function executar2(){
    const valor = await executar()
    console.log(valor)
}