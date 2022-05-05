const path = require('path')
const fn = require('./funcoes')

const simbolos = [
    '.', '?', '-', '♪', '"', ',', '_',
    '<i>', '</i>', '\r', '[', ']', '(', ')', '&#92', '!', '%', '$'
]


const caminho = path.join(__dirname, '..', 'Dados', 'legendas')


const mesclarConteudos = array => array.join(' ')
const separarPorLinhas = todoConteudo => todoConteudo.split('\n')
const separarPorpalavras = todoConteudo => todoConteudo.split(' ')


//
function agruparPalavras(palavras){
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1: 1
        acc[el] = { elemento: el, qtde}

        return acc
    }, {}))
}




fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(mesclarConteudos) //mesclar conteudos
    .then(separarPorLinhas)
    .then(linhas=> fn.removerSeVazio(linhas))
    .then(linhas => fn.removerseIncluir('-->') (linhas))
    .then(linhas => fn.removerSeApenasNumero(linhas))
    .then(fn.removerSimbolos(simbolos))
    .then(mesclarConteudos) // mesclar conteudos novamente
    .then(separarPorpalavras) // separar por palavras
    .then(fn.removerSeVazio)
    .then(linhas => fn.removerSeApenasNumero(linhas))
    .then(agruparPalavras)
    .then(console.log)
