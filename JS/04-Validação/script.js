const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const erro = document.getElementById("erro");

formulario.addEventListener("submit", function(){
    event.preventDefault();

    
    if(nome.value === "") {
        erro.textContent = "Por favor preencha um nome";
        erro.style.color = "red";
    } else{
        erro.textContent = "Formulario Enviado com sucesso";
        erro.style.backgroundColor = "green";
        erro.style.color = "white"
    }
});