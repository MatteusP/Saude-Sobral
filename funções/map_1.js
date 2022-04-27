const nums = [1, 2, 3, 4, 5]

const dobro = n => n * 2 
console.log(nums.map(dobro))

//o valor do indice tbm é somado ao dobro
const dobroi = (n, i) => n * 2 + i
console.log(nums.map(dobroi))

//o tamanho do array tbm é somado a cda iteração
const dobroIndTam = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobroi))


const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
console.log(nomes,nomes.map(primeiraLetra))
