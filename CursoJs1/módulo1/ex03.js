let usuario = "Zacarias"
let senha = "Zacarias123"

console.log("=====================================")
console.log("               Bem-Vindo")
console.log("=====================================")

usu = "Zacarias"
sen = "Zacarias123"

if (usu == usuario && sen == senha){
    console.log(`Bem-Vindo ao sitema ${usuario}`)
}else if (usu == usuario && sen != senha || usu != usuario && sen == senha )  {
    console.log(`Usuário ou senha incorreta.`)
}else{
    console.log(`Usuário desconhecido.`)
}