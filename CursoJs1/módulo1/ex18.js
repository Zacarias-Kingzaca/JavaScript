// Estudando sobre strings e seus metodos

//EX1
let nome = "    Ana clara"
console.log(nome.trim().toUpperCase())

//EX2
let frase = "Estudar JavaScript é divertido"
verif = frase.includes("divertido")
if (verif) {
    console.log(frase.indexOf("divertido"))
}else {
    console.log("palavra não encontrada...")
}

//EX3
let linguagem = "JavaScript"
console.log(linguagem.slice(4))

//EX4
let texto = "Olá mundo!"
console.log(texto.replace("mundo", "amigo"))

//EX5
let lista = "maçã, banana, laranja"
console.log(lista.split(","))