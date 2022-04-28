let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

console.log( typeof p)

//quando o valor for cumprido a função vai ser chamada
//a função é passada como parametro, o valor que foi cumprido
//so depois a função é chamada
//pode gerar objetos,  listas
p.then(function(valor){
    console.log(valor.x)
})
// com arrays
let v = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
  
})
function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

//then recebe apenas 1 parametro
v
    .then(primeiroElemento) //primeiro nome
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)