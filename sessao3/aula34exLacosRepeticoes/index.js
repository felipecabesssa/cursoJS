/*Verificando qual número randomico é maior e retornando ele

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);
console.log(rand);

let rand2 = random(1, 50);
console.log(rand2);

if (rand > rand2) {
    console.log(`O maior número entre os randoms é: ${rand}`);
} else {
    console.log(`O maior número entre os randoms é: ${rand2}`);
} */

//solução professor: usando função (arrow function pra ser mais exato)

/* const max = (x, y) => x > y ? x : y;
console.log(max(100, 20)); */

//verificando formato retrato e paisagem

/* function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let horizontal = random(1, 50);
console.log(horizontal);

let vertical = random(1, 50);
console.log(vertical);

if (horizontal > vertical) {
    console.log(`A foto esta no formato paisagem.`);
} else {
    console.log(`A foto esta no formato retrato.`);
} */

//solução professor:

//função normal (sem arrow function)
/* function ePaisagem(largura, altura) {
    return largura > altura;
} 
console.log(ePaisagem(1920, 1080));
*/

//com arrow function
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));
