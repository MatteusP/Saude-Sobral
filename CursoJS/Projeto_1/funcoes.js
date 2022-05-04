const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        //caso a leitura seja bem sucedida os nov=mes dos arquivos serão retonados
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)

        }catch(e){
            reject(e)
            
        }
    })
}
function elementosTerminadosCom(array, padrao){
    return array.filter(el => el.endsWith(padrao))
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom
}