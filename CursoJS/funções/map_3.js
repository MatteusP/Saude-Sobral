//implementação do map com laço for

const carrinho =[
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lápis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

Array.prototype.meuMap = function(fn){
    const novoArray =[]
    for (let i = 0; i < this.length; i++){
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado) 
    }
    return novoArray
}

//imprime os nomes do array
const  getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

//imprime o valor total de cada produto
const getTotal = item => item.qtde * item.preco
console.log(carrinho.meuMap(getTotal))