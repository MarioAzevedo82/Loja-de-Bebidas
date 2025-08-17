let carrinho = []

const botoes = document.querySelectorAll(".adicionar")
const contador = document.getElementById("carrinho-contador")

botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
        const produto = e.target.parentElement.querySelector("h2").textContent
        const preco = e.target.parentElement.querySelector("p").textContent

        carrinho.push({produto,preco})

        contador.textContent = carrinho.length

        alert(`${produto} adicionado ao carrinho!`)
    })
})