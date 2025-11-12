let amigo = {
    "nome": "José",
    "sexo": "M",
    "peso": 85.4,
    engoradar(p = 0) {
        console.log("Engordou")
        this.peso += p
    }  
}

amigo.engoradar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)