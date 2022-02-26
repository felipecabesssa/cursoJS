// Retorne a soma do dobro de todos os pares

//filtrar pares
//dobrar valores
//reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2;
}).reduce(function(ac, valor) {
    return ac + valor;
});

console.log(numerosPares);

console.log('\nUsando arrow function\n');

const numerosPares2 = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares2);