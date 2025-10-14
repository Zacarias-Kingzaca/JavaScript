var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log("não vota.")
}else if (idade < 16 || idade > 65){
        console.log('Voto opcinal.') 
}else {
    console.log("Voto obrigatório.")
}