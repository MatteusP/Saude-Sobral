const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        //caso a leitura seja bem sucedida os nov=mes dos arquivos serão retonados
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)

        } catch (e) {
            reject(e)

        }
    })
}

//função para ler apenas um arquivo
function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())
        } catch(e) {
            reject(e)
        }
    })
}

//função para ler varios arquivos retorna um array de caminhos
function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

// filtra os arquivos para retirar os desnecessarios
function elementosTerminadosCom(array, padraoTextual) {
    return array.filter(el => el.endsWith(padraoTextual))
}

//filtra a partir do array todas as linhas vazias
function removerSeVazio(array) {
    return array.filter(el => el.trim()) //trim tira os espaços em branco
}

//função para excluir todas as linhas com determinado trecho "-->"
function removerseIncluir(padraoTextual){
    return function(array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

// função para remover linhas apenas com numeros
function removerSeApenasNumero(array){
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

//remover carateres das strings
function removerSimbolos(simbolos){
    return function(array){
        return array.map(el => {
            let textoSemSimbolos = el
            simbolos.forEach(simbolo => {
                textoSemSimbolos = textoSemSimbolos.split(simbolo).join(' ')
            })
            return textoSemSimbolos
        })
    }
} 
// funç~so para ordenar os numeros de forma ascendente ou descendente
function ordenarPorNumero(attr, ordem ='asc'){
    return function(array){
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc: desc)
    }
}


module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerSeVazio,
    removerseIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    ordenarPorNumero
}