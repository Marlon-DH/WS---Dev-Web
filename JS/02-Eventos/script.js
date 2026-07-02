function mensagem() {
    document.getElementById("mensagem").textContent = "Você clicou no botão usando OnClick"
}

const botao = document.getElementById("botaoEvento");

// botao.addEventListener("click", function() {
//     document.getElementById("mensagem").textContent = "Você clicou no botão usando AddEventListener"
// })

function mensagemAddEventListener() {
    document.getElementById("mensagem").textContent = "Você clicou no botão usando AddEventListener";
}

botao.addEventListener("click", mensagemAddEventListener);