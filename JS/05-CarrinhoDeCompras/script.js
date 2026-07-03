const produtos = [
{
    id: 1,
    nome: "Mouse",
    preco: 49.90,
    descricao: "Mouse que usa com a mão",
    imagem: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=765",
},
{
    id: 2,
    nome: "Teclado",
    preco: 149.90,
    descricao: "Teclado que usa com a mão",
    imagem: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=880",
},
{
    id: 3,
    nome: "Monitor",
    preco: 549.90,
    descricao: "Monitor que usa com a mão",
    imagem: "https://plus.unsplash.com/premium_photo-1680721575881-6fad8bf84f51?q=80&w=1136",
}
];

const produtosSelect = document.getElementById("produto");

function carregarProdutos(){
    produtosSelect.innerHTML = "";

    produtos.forEach(produto => {
        const option = document.createElement("option");
        option.value = produto.id;
        option.textContent =produto.nome;
        produtosSelect.appendChild(option);
    });
}

carregarProdutos();