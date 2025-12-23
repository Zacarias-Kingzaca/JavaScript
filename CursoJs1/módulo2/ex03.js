console.log("EX1")
const aluno = {
    "Nome": "Zacarias Eduardo João",
    "Classe": "13ª",
    "Nº": 68,
    "Curso": "IG"
}

for (i in aluno) {
    console.log(i +  ":" + " " +  aluno[i])
}
console.log("")

console.log("EX2")
const playlist = {
    "Nome": "Super",
    "Musicas": ["tudo nosso", "Vamos vencer", "dia de sol"]
}

console.log("========================")
console.log("  INFORMAÇÕES DO LIVRO")
console.log("========================")
for (i in playlist["Musicas"]) {
    console.log(i, playlist["Musicas"][i])
}