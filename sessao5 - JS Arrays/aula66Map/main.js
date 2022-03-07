// O Map é muito similar ao filter, porem ele altera os valores do array


// Dobre os numeros
//               0  1   2   ......
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log(`\nDado o vetor - [${numeros}]\n
Vamos trabalhar com ele\n`);   

console.log('\nDobrando os números\n');

const exemplo = numeros.map(function(valor) {
    return valor * 2;
});
console.log(exemplo);

// Convertendo pra Arrow function - Função dedo de seta

console.log('\nConvertendo pra Arrow function - Função dedo de seta\n');


const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

console.log('\nTrabalhando com objetos\n');

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Felipe', idade: 38 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

console.log('\nDado o array pessoas com os seguintes objetos, trabalhemos\n');
const exibePessoas = pessoas;
for (i=0; i < exibePessoas.length; i++) {
    console.log(pessoas[i]);
}

// ------------------------------------------------------------------------

console.log('\nRetorne apenas uma string com o nome da pessoa\n');

const retornaString = pessoas.map(function(obj) {
    return obj.nome;
});

console.log(retornaString);

// ------------------------------------------------------------------------

console.log('\nConvertento pra Arrow function ou Função dedo de seta\n');

const retornaStringArrow = pessoas.map(obj => obj.nome);

console.log(retornaStringArrow);

// ------------------------------------------------------------------------

console.log('\nRemova apenas a chave "nome" do objeto\n');

// 1ª maneira de resolver

const idades = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
});

console.log(idades);

// 2ª maneira - Retornando um novo valor sem a chave nome

const idades2 = pessoas.map(function(obj) {
    return { idade: obj.idade };
});

console.log(idades2);

// ------------------------------------------------------------------------

console.log('\nAdicione uma chave id em cada objeto\n');

const pessoas2 = [
    { nome: 'Felipe', idade: 38 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// const comIds = pessoas2.map(function(objeto, indice) {
//     objeto.id = indice;
//     return objeto;
// });
// console.log(comIds);
// console.log(pessoas2);

// Aqui o map alterou os valores do vetor original
// Para evitar isso vamos fazer assim:

console.log('\nAdicionando indice sem mexer no vetor inicial\n');

const comIds2 = pessoas2.map(function(objeto, indice) {
    const newObj = { ...objeto }; //spread d0 objeto
    newObj.id = indice;
    return newObj;
});

console.log(comIds2);
console.log(pessoas2);
