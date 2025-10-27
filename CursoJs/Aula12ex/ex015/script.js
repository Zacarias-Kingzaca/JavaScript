function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] verifica os dados e tente novamente!")
    }
    else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-crianca-m.jpg')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'foto-vovo-m.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-crianca-f.jpg')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'foto-vovo-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.objectFit = "cover"
        img.style.borderRadius = '50%'
        img.style.margin ="auto"
    }
}