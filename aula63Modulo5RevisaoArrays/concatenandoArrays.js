const ex1 = [1, 2, 3];
const ex2 = [4, 5, 6];
const ex3 = ex1 + ex2;
console.log(typeof ex3);
// só lembrando typeof fala o tipo de variavel, nesse caso - string

console.log('\n----------------------\n');

// para concatenar arrays usamos a função CONCAT conforme abaixo.

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
//podemos passar valores literais pra concatenar assim:
const a4 = a1.concat(a2, [7, 8, 9], 'felipe'); //inclusive misturar string
//console.log(typeof a3);
console.log(a3);
console.log('\n----------------------\n');
console.log(a4);
console.log('\n----------------------\n');

// Ainda podemos usar o spread
// ... rest -> ... spread

const a5 = [...a1, ...a2];
console.log(a5);

console.log('\n----------------------\n');
// podemos da mesma forma acrescentar valores literais ao concatenar
const a6 = [...a1, 'Henrique', ...a2, ...[9, 10, 11]];
console.log(a6);