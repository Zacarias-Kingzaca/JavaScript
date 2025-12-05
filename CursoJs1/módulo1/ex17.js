console.log("parar o loop quando econtrar o número 13")
//parar o loop quando econtrar o número 13
let i = 1
while (i <= 20) {
    if (i === 13) {
        console.log(`Loop interrompido o número ${i} foi encontrado.`)
        break
    }
    i++
}
console.log("mostrar apenas números ímpares de 1 a 10")
//mostrar apenas números ímpares
let c = 1
while (c <= 10) {
    if (c % 2  == 0) {
        c++
        continue
    }else {
        console.log(c)
    }
    c++
}

console.log("pular o número 7 e parar no 12")
//pular o número 7 e parar no 12
let n = 1
while (n <= 20) {
     if (n === 7) {
        n++
        continue
    }
    if (n === 12) {
        console.log(`Loop interrompido o número ${n} foi encontrado.`)
        break
    }
    console.log(n)
    n++
}