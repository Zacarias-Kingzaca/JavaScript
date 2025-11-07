function ver() {
    var num = document.getElementById("num")
    var valor = document.getElementById("valor")
    var res = document.getElementById("res")
    var lista = []
    var item =  document.createElement("option")

    function adi() {
    if (num.value > 0 && num.value <= 100) {
        lista.push(num.value)
        item.innerHTML = `Valor ${lista} adicionado.`
        valor.appendChild(item)
    }else{
        res.innerHTML = `haha`
    }
   }


}