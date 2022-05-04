const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'Dados', 'legendas')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(console.log)