function Carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        //Bom Dia
        img.src = `manha.jpg`
        document.body.style.background = "#e2cd9f"
    }else if (hora >= 12 && hora < 18){
        //Boa Tarede
        img.src = `tarde.jpg`
        
    }else {
        //Boa Noite
        img.src = `noite.jpg`
        document.body.style.background = "#515154"
    }
}