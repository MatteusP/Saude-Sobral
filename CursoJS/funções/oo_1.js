function Produto(nome, preco, desc = 0.5){
    this.nome = nome
    this.preco = preco
    let privado = 3// esse valor não pode ser acessado fora do escopo da função
    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}

console.log(Produto) // função
console.log(Promise) // função
console.log(Object) // função


const p1 = new Produto('caneta', 8.80)
console.log(typeof p1)
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.precoFinal())