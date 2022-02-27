/*
Object.values - retorna os valores dentro do objeto
console.log(Object.values(produto));

Object.entries - retorna tudo que tem dentro do objeto (arrays dentro de um array)
console.log(Object.entries(produto));

Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

... (spread)

// Já vimos
Object.keys (retorna as chaves)
console.log(Object.keys(produto));

Object.freeze (congela o objeto - não deixa alterar)
Object.freeze(produto);

Object.defineProperty (define uma propriedade)
Object.defineProperties (define varias propriedades)
*/

// Usando o spread para copiar o objeto ao invéz de apontar para mesma coisa na memória

console.log('\n--- Alterando valores dentro do objeto preservando\n o mesmo copiando ele para uma variavel ---\n');

const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = {
    ...produto,
    material: 'porcelana',
    desconto: 1
};

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

console.log(Object.entries(produto));
