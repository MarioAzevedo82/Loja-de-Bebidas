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

        atualizarContador()
        
        mostrarCarrinho()
    })
})

function atualizarContador() {
    let totalItens = 0;
    for(let item in carrinho) {
        totalItens += carrinho[item].quantidade
    }
    
    contador.textContent = totalItens
}




function mostrarCarrinho() {
    const lista = document.getElementById("carrinho");
    lista.innerHTML = "";

    let total = 0

    for(let produto in carrinho) {
        const item = carrinho[produto]
        const li = document.createElement("li");
        li.textContent = `${produto} - ${item.preco} (X${item.quantidade})`;
        
        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash"></i> Excluir'
        btnRemover.style.marginLeft = "10px"
        btnRemover.style.cursor = "pointer"
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


