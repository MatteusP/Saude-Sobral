
function fn1(){
    fn2()
}
function fn2(){
    fn3()
}
function fn3(){
    console.log("fn3")
    setTimeout(() => console.log("Timeout"), 3000)
}

function main(){
    fn1()
}
main()
console.log("Fim")