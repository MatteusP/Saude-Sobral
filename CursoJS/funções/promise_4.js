//
function gerarNumerosEntre(min, max, tempo){
    if (min > max) [max, min] = [min, max]
        
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = (max - min ) + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)   
    })
}
//para a função all passar um array de promise
function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),

    ])
}
//A função so vai ser executada quando todas as promessas forem resolvidas
//usado para requisições em paralelo
console.time('Promise')
gerarVariosNumeros()
    .then(numeros=> console.log(numeros))
    .then(()=> {
        console.timeLog('Promise')
        console.timeEnd('Promise')

    })



