//parte 1
function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(somar(5)(6)(4))


//parte 2
function som(a, b){
    return a+b
}
function sub(a, b){
    return a-b
}
function div(a, b){
    return a/b
}
function mult(a, b){
    return a*b
}

function calcular(a){
    return function(b){
        return function(fn){
            return fn(a,b)
        }
    }
}


console.log(calcular(60)(3)(mult))     
    