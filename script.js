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

    let total = 0

    for(let produto in carrinho) {
        const item = carrinho[produto]
        const li = document.createElement("li");
        li.textContent = `${produto} - ${item.preco} (X${item.quantidade})`;
        lista.appendChild(li);

        const valor = Number(item.preco.replace("R$", "").replace(",", "."));
        total += valor * item.quantidade
    }

    const totalLi = document.createElement("li");
    totalLi.textContent = `💰 Total: R$ ${total.toFixed(2)}`;
    lista.appendChild(totalLi)
}


