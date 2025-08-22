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
            carrinho[produto] = { preco, quantidade: 1 }
        }

        atualizarContador()

        mostrarCarrinho()
    })
})

function atualizarContador() {
    let totalItens = 0;
    for (let item in carrinho) {
        totalItens += carrinho[item].quantidade
    }

    contador.textContent = totalItens
}




function mostrarCarrinho() {
    const lista = document.getElementById("carrinho");
    lista.innerHTML = "";

    let total = 0

    for (let produto in carrinho) {
        const item = carrinho[produto]
        const li = document.createElement("li");
        li.textContent = `${produto} - ${item.preco} (X${item.quantidade})`;

        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash"></i> Excluir'
        btnRemover.style.marginLeft = "10px"
        btnRemover.style.cursor = "pointer"
        btnRemover.style.borderRadius = "50px"
        btnRemover.addEventListener("click", () => {
            item.quantidade--
            if (item.quantidade === 0) {
                delete carrinho[produto]
            }

            atualizarContador()
            mostrarCarrinho()
        })

        li.appendChild(btnRemover)
        lista.appendChild(li)

        const valor = Number(item.preco.replace("R$", "").replace(",", "."));
        total += valor * item.quantidade
    }

    const totalLi = document.createElement("li");
    totalLi.textContent = `💰 Total: R$ ${total.toFixed(2)}`;
    lista.appendChild(totalLi)
}

document.getElementById("finalizarPedido").addEventListener("click", function () {
    // Verifica se o carrinho está vazio
    if (Object.keys(carrinho).length === 0) {
        alert("⚠️ Seu carrinho está vazio!");
        return;
    }

    // Monta a mensagem com os itens do carrinho
    let mensagem = "🛒 *Pedido:*%0A%0A";
    let total = 0;

    for (let produto in carrinho) {
        const item = carrinho[produto];
        const precoNumerico = Number(item.preco.replace("R$", "").replace(",", "."));
        const subtotal = precoNumerico * item.quantidade;

        mensagem += `• ${produto} (x${item.quantidade}) - R$ ${subtotal.toFixed(2)}%0A`;

        total += subtotal;
    }

    mensagem += `%0A💰 *Total:* R$ ${total.toFixed(2)}%0A%0A`;
    mensagem += "Por favor, confirme meu pedido ✅";

    // Número do WhatsApp (coloque o seu número aqui no formato internacional)
    const numero = "554892235568"; // Exemplo: 55 + DDD + número

    // Monta o link
    const url = `https://wa.me/${numero}?text=${mensagem}`;

    // Abre o WhatsApp
    window.open(url, "_blank");
});





