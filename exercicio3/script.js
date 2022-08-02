// Observe o objeto abaixo e, utilizando o 
// **espalhamento** resolva os exercícios a seguir:
// ```jsx
// const pokemon1 = {
// 	nome: "Bulbasaur",
// 	tipo: "Grama",
// 	nivel: 5
// };
// ```
// a) Crie uma cópia do objeto, acima, mantendo a
// estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
// b) No objeto original, adicione mais uma 
// propriedade, chamada `ataques`. Esta propriedade 
// deve guardar um **array** de objetos com a estrutura abaixo. 
// Inicie a propriedade como um array vazio, e crie o objeto abaixo 
// utilizando `**push()**`
// ```text
// nome: Investida;
// dano: 40;
// tipo: Normal;
// precisao: 100;
// ```
// c) Na cópia do objeto original, adicione a propriedade 
// **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
// d) para o objeto original, adicione o ataque 
// **“Folha Navalha”,** com **45 de dano**, **100 de precisão**,
//  e de tipo **“Grama”**;
// e) para a cópia, crie o ataque **“Jato de Água”**, 
// com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
// f) Imprima os dois objetos no console.
const pokemon1 = {
    	nome: "Bulbasaur",
     	tipo: "Grama",
     	nivel: 5
     };
// criando cópia de objeto pokemon1
const pokemonCopia = {...
    pokemon1};
console.log(pokemonCopia);
// Alterando propriedade de pokemon cópia nome e tipo 
pokemonCopia.nome = "Squirtle"
pokemonCopia.tipo = "Água"
console.log(pokemonCopia);
// Adicionando ao objeto original propriedades "ataque" com estrutura de "nome" "dano" "tipo" e "precisão"
pokemon1.ataque = 
    { nome: "Investida",
     dano: 40,
     tipo: "Normal",
    precisao: 100},
    console.log(pokemon1);
// adicionando a copia do objeto original propriedade de ataque e com mesma estrutura e novas caracteristica
pokemonCopia.ataque = {...pokemon1};
console.log(pokemonCopia);
// Alterando e adicionando novas caracteristicas a array de ataque do objeto original
pokemon1.ataque.nome = "Folha Navalha"
pokemon1.ataque.dano = 45
pokemon1.ataque.precisao = 100
pokemon1.tipo = "grama"
console.log(pokemon1);
// Alterando e adicionando novas caracteristicas a array de ataque do objeto cópia
pokemonCopia.ataque.nome = "Jato de Água"
pokemonCopia.ataque.dano = 40
pokemonCopia.ataque.precisao = 100
pokemonCopia.tipo = "Água"
console.log(pokemonCopia);