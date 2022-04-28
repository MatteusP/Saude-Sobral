const { resolve } = require("path")

//usando callbacks aninhados
/* setTimeout(function(){
    console.log('Execultando callback...')

    setTimeout(function(){
        console.log('Execultando callback...')

        setTimeout(function(){
            console.log('Execultando callback...')
        }, 2000)
    }, 2000)
}, 2000) */

//simulando calback com promise
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout( function(){
            console.log('Execultando promise...')
            resolve('uaiiii')
        }, tempo);
    })
}
esperarPor()
    .then(() => esperarPor())
    .then*esperarPor(2000)
