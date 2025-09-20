// abaixo eu criei um CRUD simples 
// começando com um array vazio e uma variavel para o ID
let produtos = [];
let proximoID = 1;

// função para criar um produto
function createProduto(nome, preco, quantidade) {
    produtos.push({id:proximoID++, nome, preco, quantidade});
}
createProduto("Notebook", 7500, 10);
createProduto("PC", 4500, 10);
createProduto("tablet", 800, 20);
createProduto("celualar",3500,30);

// função para ler os produtos com preço maior que 3500
function readProdutos(maiorpreco = 0){
    return produtos.filter(item => item.preco > maiorpreco );
};

// função para atualizar o preço do produto
function updateProduto(id, novopreco) {
    let item = produtos.find(u => u.id === id);
    if(item) {
        item.preco = novopreco;
    }
}

//função para atualizar o valor do produto
updateProduto(2,10000)

// comando para deletar o ultimo produto do array
const UltimoProduto = produtos.pop();

// Lista os produtos com preço maior que 3500
console.log(readProdutos(1000));

//mostra todos os produtos
console.log(produtos);

//mostra o ultimo produto deletado

console.log(UltimoProduto);
