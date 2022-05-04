const path = require('path')
const fn = require('./funcoes')

const simbolos = [
    '.', '?', '-', '♪', '"', ',', '_',
    '<i>', '</i>', '\r', '[', ']', '(', ') '
]

const caminho = path.join(__dirname, '..', 'Dados', 'legendas')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(conteudos => conteudos.join(''))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas=> fn.removerSeVazio(linhas))
    .then(linhas => fn.removerseIncluir('-->') (linhas))
    .then(linhas => fn.removerSeApenasNumero(linhas))
    .then(fn.removerSimbolos(simbolos))
    .then(console.log)
    