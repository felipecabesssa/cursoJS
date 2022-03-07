// Filter -> Sempre retorna um array, com a mesma quantidade de elemntos ou menos.

// Retorne os números maiores que 10
// Minha solução para pegar só os numeros maiores que 10 
const minhaSolucao = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaiores = minhaSolucao;
let contador = 0;

for (i = 0; i < numerosMaiores.length; i++) {

    if (numerosMaiores[i] > 10) {
        contador++;
    }

}
console.log(`total de elementos: ${i} \n
Total de números maiores que 10: ${contador} \n\n`);



// Solução professor usando o Filter

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//                      Valor, indice, array
function callbackFilter(valor) {
    return valor > 10;

    // jeito que a condição retorna true or false
    // dai ja podemos retornar a condição como feito acima.
    // if (valor > 10) {
    //     return true;
    // } else {
    //     return false;
    // }
}

const numerosFiltrados = numeros.filter(callbackFilter);


// 1ª forma reduzida - chamando a function de calback ja dentro do filter e retornando um valor
const callbackFilterReduzida = numeros.filter(function(valor){
    return valor > 10
})

// 2ª forma reduzida - usando arrow function
const callbackFilterReduzida2 = numeros.filter(valor => {
    return valor > 10
})

// 3ª forma - como ela só retorna um valor, podemos retirar as chaves
const callbackFilterReduzida3 = numeros.filter(valor => valor > 10);


console.log(callbackFilterReduzida3);
console.log('\n');

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Felipe', idade: 38 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];


// Filtrando todo o array e seus objetos completos

console.log('\nFiltrando todo o array e seus objetos completos\n');

const pessoasComNomeGrande = pessoas.filter(function(valor){
    console.log(valor); 
});

// Filtrando o objeto pelo seu atributo nome

console.log('\nFiltrando pelo parametro (nome) do objeto\n');

const pessoasComNomeGrande2 = pessoas.filter(function(obj){
    console.log(obj.nome); 
});

// Filtrando pessoas com nome com mais de 5 letras

console.log('\nFiltrando pessoas com nome grande\n');

const pessoasComNomeGrande3 = pessoas.filter(function(obj){
    return obj.nome.length >= 7;
});

console.log(pessoasComNomeGrande3);


// Transformando a função anterior em arrow - função de seta

console.log('\nTransformando a função anterior em arrow - função de seta\n');

const pessoasComNomeGrande4 = pessoas.filter(obj => obj.nome.length >= 7);
console.log(pessoasComNomeGrande4);


// Retorne as pessoas com mais de 50 anos

console.log('\nRetorne as pessoas com mais de 50 anos\n');

const pessoasComNomeGrande5 = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasComNomeGrande5);

// Retorne as pessoas cujo nome termina com a

console.log('\nRetorne as pessoas cujo nome termina com a\n');

const nomeTerminaComA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(nomeTerminaComA);
