
class Produto {
    //função construtora
    constructor(nome, preco, desc) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }
    set preco(novoPreco){
        if(novoPreco>=0){
            this.preco = novoPreco
        }
    }
    precoFinal() {
        return this.preco * (1 - this.desc)
    }
}
const p1 = new Produto('geladeira', 5000, 0.3)
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.precoFinal())