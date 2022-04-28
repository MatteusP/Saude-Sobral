function bomDia(){
    console.log('Bom dia!')
}

const boaTarde = function (){
    console.log('Boa Tarde!')
}
//1 passar uma função como parametro para outra função
function executar(fn){
    if(typeof fn === 'function'){ //=== são comparações estritas, compara valores e o tipo
        fn()
    }

}
executar(3) //retona que '3' não é um função
executar(bomDia)
executar(boaTarde)

//2 retornar uma função a partir de outra função

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
//outra forma de chamar
console.log(potencia(3)(4))

