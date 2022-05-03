function Produto(nome, preco, desc = 0.5){
    this.nome = nome
    this.preco = preco
    let privado = 3// esse valor não pode ser acessado fora do escopo da função
    this.precoFinal = function(){
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome} Preço: ${this.preco}`)
}
Object.defineProperty(Produto.prototype, 'descString', {
    get: function(){
        return `${this._desc * 100}%`
    },
    set: function(novoDesc){
        if(novoDesc >= 0 && novoDesc <= 1)
        this._desc = novoDesc
    }
} )


const p1 = new Produto('caneta', 8.80)
p1.log()
console.log(typeof p1)
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.precoFinal())
console.log(p1.desc)