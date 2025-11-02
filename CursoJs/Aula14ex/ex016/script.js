function cal() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
    res.innerHTML = ''
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = "Impossível contar!"
       //window.alert("[ERRO] faltam dados.")
    }else {
        res.innerHTML += "Contando: <br> "
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! considerando passo 1")
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <=  f; c += p) {
                res.innerHTML += `${c} \u{1F449}  `
            }
        }else {
            //contagem decrescente
            for (let c = i; c >=  f; c -= p) {
                res.innerHTML += `${c} \u{1F449}  `
            } 
        }
        res.innerHTML += `\u{1f3c1}`
    }
  
}