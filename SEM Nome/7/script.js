const produtos = [
    { id: 1, nome: "NoteBook Gamer", preco: 5299.90, img: "foto.jpg"},
    { id: 2, nome: "Mouse sem fio", preco: 129.90, img: "foto.jpg"},
    { id: 3, nome: "Teclado Mêcanico", preco: 349.90, img: "foto.jpg"},
    { id: 4, nome: "Headset RGB", preco: 899.90, img: "foto.jpg"},
    { id: 5, nome: "Webcam HD", preco: 219.90, img: "foto.jpg"},
    { id: 6, nome: "Monitor", preco: 290.90, img: "foto.jpg"}
]

let carrinho = [] 
let contador = document.getElementById('contador')
let tela = document.getElementById("tela")
function mostrarCarrinho() {
    tela.textContent = ""
    for (let i = 0; i < carrinho.length; i++) {
        const mercadoria = carrinho[i]
        const item = document.createElement("p")
        item.textContent = mercadoria.nome
        tela.appendChild(item)
    }
}

let loja = document.getElementById("loja")

for (let  i = 0 ; i < produtos.length; i++) {

    const produto = produtos[i]

const card = document.createElement('div')
card.classList.add('card')

card.innerHTML = `
    <img src="${produto.img}" alt="${produto.nome}"> 
    <h3>${produto.nome}</h3>
    <p>Kz ${produto.preco.toFixed(2)}</p>
    <button>Comprar</button>
`
loja.appendChild(card)
let Comprar = card.querySelector('button')
Comprar.addEventListener("click", function() {
    carrinho.push(produto)
    contador.textContent = carrinho.length
    mostrarCarrinho()
   
})
}

