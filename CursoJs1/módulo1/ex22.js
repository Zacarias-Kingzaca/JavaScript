//EX1

function saudacao(nome) {
    console.log(`Olá ${nome}`)
}
saudacao("King Zaca")

//EX2
function soma(a, b) {
    return a + b
}
console.log(soma(12, 3))

//EX3
function ehpar(num) {
    if (num % 2 == 0) {
        console.log("É par")
    }else{
        console.log("É ímpar")
    }
}
ehpar(2)

//EX4
function Fahrenheit(c) {
    f = (c * 9/5) + 32
    console.log(`A temperatura de ${c} grau celsio convertendo para Fahrenheit é igual a ${f} Fahrenheit`)
}
Fahrenheit(100)

//EX5
const multiplicar = (n1, n2) => n1 * n2
console.log(multiplicar(2, 6))

//EX6
function externa() {
    function interna() {
        console.log("Executando a função interna...")
    }
    interna()
}

externa()
