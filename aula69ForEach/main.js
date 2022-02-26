const a1 = [1, 2, 3, 4, 5];

// exemplo tradicional

console.log('\nFor tradicional\n');

for (let valor of a1) {
    console.log(valor);
}

// -----------------------------------------

// exemplo for each e estrutura

console.log('\nforEach basico\n');

a1.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

// -----------------------------------------

// Simulando um Reduce, somando os valores totais - com arrow function

console.log('\nSimulando um Reduce, \nsomando os valores totais - \ncom arrow function\n');
let total = 0;
a1.forEach(valor => total += valor);
console.log(total);