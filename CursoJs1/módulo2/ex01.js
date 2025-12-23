const carro = {
    "marca": "Toyota",
    "modelo": "HiLux",
    "ano": 2002,
    descrever: function() {
        console.log("Marca", this.marca)
        console.log("Modelo", this.modelo)
        console.log("Ano", this.ano)
    }
 }

for (chave in carro) {
    console.log(chave + ":" + carro[chave])
}