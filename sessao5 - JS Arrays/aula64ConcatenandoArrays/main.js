// Concatenação com concat

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);

// podemos incluir valores como parametro no concat

const a4 = [1, 2, 3];
const a5 = [4, 5, 6];
const a6 = a4.concat(a5, [7, 8, 9], 'Felipe');
console.log(a6);

// Concatenação usando spread
// ... rest -> spread

const spread = [...a1, ...a2]; // Aqui podemos incluir mais valore como parametro igual no concat
console.log(spread);

// Concatenando adicionando mais valores inclusive spread de vetor

const spread2 = [...a1, 'Felipe', ...a2, ...[7, 8, 9]];
console.log(spread2);