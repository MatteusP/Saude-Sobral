 //arrow function
 const felizNatal = () => console.log('Feliz natal!')
 felizNatal()

 const saudacao = (nome) => "Fala, " + nome + "!"
 console.log(saudacao('Maria'))

 //usando crase
 const saudacao1 = (nome) => `Fala, ${nome}. blz?!`
 console.log(saudacao1('Maria'))

 const somar = (...numeros) => { //... operador rest
    let total = 0
    for(let n of numeros){
        total+=n
    }
    return total
 }
 //console.log(somar([1, 2, 4, 5, 6, 10, 8, 1]))
 //pode passar lista por conta do operador rest
 console.log(somar(1, 2, 4, 5, 6, 10, 8, 1)) 
 
 const potencia = (base) => {
     return(exp) => {
         return Math.pow(base, exp)
     }
 }
console.log(potencia(2)(8))

//arrow functions não precisam do 'return'
const potencia1 = (base) => (exp) => Math.pow(base, exp)
console.log(potencia1(2)(5))

//this
Array.prototype.log = function(){
    console.log(this)
}
Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}
Array.prototype.primeiro = function(){
    console.log(this[0])
}
const numeros =[1, 2, 3]
numeros.log()
numeros.ultimo()
numeros.primeiro()

const subtrair = (a, b) => a - b
console.log(subtrair(5, 1))