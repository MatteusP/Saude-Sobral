//Tratamento de erros dentro de promises
//try --> catch
//resolver a promise quando se quer ser cumprida e devolver valor baseado na promessa
//e tem como rejeitar promise
function FuncionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        //numero aleatorio entre 0 e 1
        //se esse valor form menoir que a chance de erro 
        try{
            //confirm.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}
//erro de 10%. Nesse caso, a maioria das vezes o 'Testando...' vai ser exibido
//mudar valores entre 0 e 1
FuncionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        //err => console.log(`Erro para o primeiro then: ${err}`)
        //nesse caso o catch não vai ser executado pois o erro ja foi tratado
    )
    .then(() => console.log('Quase fim'))
    //caso o catch seja executado o fluxo vai parar
    .catch(err => console.log(`Erro: ${err}`))// o catch deve ser depois dos thens, para tratar erros de todo fluxo
    .then(() => console.log('Fim!'))
