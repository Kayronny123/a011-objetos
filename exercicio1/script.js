// # Exercício 1
// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
// // c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

const sacolao = []
sacolao.produtos = [
    {frutas: "maça",
    preco: 4,
    quantidadeEstoque: 8},  
    {frutas: "banana",
    preco: 2,
    quantidadeEstoque: 20},

    {frutas: "melancia",
    preco:10,
    quantidadeEstoque:3},
]
sacolao.produtos.push
console.log(sacolao)
