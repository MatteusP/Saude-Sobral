//Declaração de função
function bomDia(){
    console.log('Bom dia!')

}
bomDia()

//expressão de função
const boaTarde = function (){
    console.log('Boa Tarde!')
}
let x = boaTarde() //indefinida
console.log(x)

function somar(a, b){
    return a+b
}
//chamada regular
let resultado = somar(5,3)
console.log(resultado)

//mesmo com parametros sobrando a função é executada
resultado = somar(5, 5, 7, 4)
console.log(resultado)

//Com parametros a menos ele retorna NaN(not a number)
//b seria undefined
resultado = somar(5)
console.log(resultado)