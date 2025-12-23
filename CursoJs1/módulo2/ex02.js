console.log("EX1")
const Livro = {
    "Titulo": "Tudo na vida é uma escolha",
    "Autor": "Zacarias Eduardo João",
    "Ano": 2026
}
console.log("========================")
console.log("  INFORMAÇÕES DO LIVRO")
console.log("========================")
console.log("Titulo:", Livro["Titulo"])
console.log("Autor:", Livro["Autor"])
console.log("Ano:", Livro["Ano"])

console.log("EX2")
Livro.Editora = "SengSeng"
Livro.Ano = "2028"

console.log("========================")
console.log("  INFORMAÇÕES DO LIVRO")
console.log("========================")
console.log("Titulo:", Livro["Titulo"])
console.log("Autor:", Livro["Autor"])
console.log("Ano:", Livro["Ano"])
console.log("Editora:", Livro["Editora"])

console.log("EX3")
Livro.Des = function() {
    console.log(`O livro ${this.Titulo} foi escrito por ${this.Autor} e lançado no ano de ${this.Ano}`)
}
console.log("========================")
console.log("  INFORMAÇÕES DO LIVRO")
console.log("========================")
console.log("Titulo:", Livro["Titulo"])
console.log("Autor:", Livro["Autor"])
console.log("Ano:", Livro["Ano"])
console.log("Editora:", Livro["Editora"])
Livro.Des()