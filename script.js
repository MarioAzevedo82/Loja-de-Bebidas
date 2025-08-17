let carrinho = []

const botoes = document.querySelectorAll(".adicionar")
const contador = document.getElementById("carrinho-contador")

botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
        const produto = e.target.parentElement.querySelector("h2").textContent
        const preco = e.target.parentElement.querySelector("p").textContent

        carrinho.push({produto,preco})

        contador.textContent = carrinho.length

        mostrarCarrinho()
    })
})

function mostrarCarrinho() {
    const lista = document.getElementById("carrinho");
    lista.innerHTML = "";

    carrinho.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.produto} - ${item.preco}`;
        lista.appendChild(li);
    })
}


