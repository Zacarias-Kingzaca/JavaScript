var num = document.getElementById("num")
var valor = document.getElementById("valor")
var res = document.getElementById("res")
var lista = []

function adi() {
    var item =  document.createElement("option")
    if (lista.includes(num.value)){
        window.alert(`Ó número ${num.value} já está na lista...`)
    }else {
        if (num.value > 0 && num.value <= 100) {
            lista.push(Number(num.value))
            item.innerHTML += `Valor ${num.value} adicionado.<br><br>`
            valor.appendChild(item) 
            res.innerHTML = ""
        }else{
            window.alert(`Valor inválido...`)
        }
    } 
    num.value = ""
    num.focus()
}

function ver() {
    if (lista.length == 0) {
        window.alert("Adiciona valores para finalizar")
    }else {
        let tot = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0 
        for(let pos in lista) {
            soma += lista[pos]
            if(lista[pos] > maior) 
                maior = lista[pos]
            if(lista[pos] < menor)
                menor = lista[pos]
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `Ao todo, temos ${tot} número cadastrados. <br><br>`
        res.innerHTML += `O maior número da lista foi ${maior}.<br><br>`
        res.innerHTML += `O menor número da lista foi ${menor}.<br><br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br><br>`
        res.innerHTML += `A média dos valores é ${media}.<br><br>`
    }
} 