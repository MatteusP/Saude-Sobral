function exec(fn, a, b){
    return fn(a, b)
}
const somaNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)
const subtrair = (w, z) => w - z

exec(somaNoTerminal, 20, 10)
exec(subtrairNoTerminal, 20, 10)

const r = exec(subtrair, 50, 25)
console.log(r)

const callback = () => console.log('Exec...')
//setInterval(callback, 1000)
setInterval(()=> console.log('Exec 1...'), 1000)
