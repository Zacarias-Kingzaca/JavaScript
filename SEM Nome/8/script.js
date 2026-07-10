produtos = [
    {id: 1, nome:"King Zaca", preco:1000.00, img:"SEC1.2.jpg"},
    {id: 2, nome:"Casimiro Melanino", preco:1200.00, img:"SEC1.3.jpg"},
    {id: 3, nome:"Mr Strong", preco:1200.00, img:"SEC2.1.jpg"},
    {id: 4, nome:"Johon Best", preco:1000.00, img:"SEC3.1.jpg"},
    {id: 5, nome:"Supremo Monsta", preco:1200.00, img:"SEC3.2.jpg"}
]

let loja = document.getElementById("loja")

for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i]

    const card = document.createElement("div")
    card.classList.add('card')
    card.innerHTML = `
     <img src="${produto.img}" alt"${produto.nome}">
     <h3>${produto.nome}</h3>
     <p>${produto.preco.toFixed(2)}</p>
     <button>Comprar</button>
    `
    loja.appendChild(card)    
}