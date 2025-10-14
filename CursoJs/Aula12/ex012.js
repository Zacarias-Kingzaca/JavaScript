var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12 ){
    if (hora < 5 ) {
        console.log("Tenha uma boa madrugada.")
    }else {
    console.log("Bom dia!")
}
}else if ( hora <= 18) {
    console.log("Boa tarde.")
}else {
    if (hora  < 1 && hora > 5 ){
        console.log("Tenha uma boa madrugada.")
    }else {

    console.log("Boa noite!")
      }
}