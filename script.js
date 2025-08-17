let carrinho = {}

const botoes = document.querySelectorAll(".adicionar")
const contador = document.getElementById("carrinho-contador")

botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
        const produto = e.target.parentElement.querySelector("h2").textContent
        const preco = e.target.parentElement.querySelector("p").textContent

        if (carrinho[produto]) {
            carrinho[produto].quantidade++;
        } else {
            carrinho[produto] = {preco, quantidade:1}
        }

        let totalItens = 0;
        for(let item in carrinho) {
            totalItens += carrinho[item].quantidade
        }
        contador.textContent = totalItens

        mostrarCarrinho()
    })
})

function mostrarCarrinho() {
    const lista = document.getElementById("carrinho");
    lista.innerHTML = "";

    for(let produto in carrinho) {
        const li = document.createElement("li");
        li.textContent = `${produto} - ${carrinho[produto].preco} (X${carrinho[produto].quantidade})`;
        lista.appendChild(li);
    }
}


