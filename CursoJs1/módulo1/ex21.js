//funcão anônima
const multiplicar = function(a, b) {
    return a * b
}

console.log(multiplicar(2, 3))

//Arrow functions

const saudacao = nome => console.log("Olá", nome)
saudacao("Lucas")

const dobro = x => x * 2
console.log(dobro(3))


//funções dentro de funções

function externa() {
    function interna() {
        console.log("Função interna.")
    }
    interna()
}

externa()