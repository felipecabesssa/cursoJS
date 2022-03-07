// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// ----------------------------------------------------------------------

console.log('\nSome todos os números (Reduce)\n');

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
}, 0);

console.log(total);

// ----------------------------------------------------------------------

console.log('\nRetorne um array com os pares (Filter)\n');

const total2 = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(total2);

// ----------------------------------------------------------------------

console.log('\nRetorne um array com o dobro dos valores (Map)\n');

const total3 = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(total3);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Felipe', idade: 38 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

console.log('\nRetorne a pessoa mais velha\n');

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);