let lista = ["azul", "amarela", "vermelho", "branco"]
console.log(lista[0])
console.log(lista[3])

lista.push("preto")
lista.unshift("castanho")
console.log(lista)
lista.shift()
console.log(lista)

console.log()

let num = [1, 4, 5, 50, 3]
let soma = 0
num.forEach(f => {soma += f})
console.log(`Resultado da soma ${soma}`)


console.log()

let idade = [12, 55, 20, 18]
idade.forEach(i => { if (i >= 18) console.log(i)})

let nomes = ["zacarias", "pedro", "Andre", "Lucas"]
console.log(nomes)
nomes.splice(2,1, "rui") 
console.log(nomes)