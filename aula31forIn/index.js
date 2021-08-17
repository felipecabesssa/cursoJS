const frutas = ['Pera', 'Maça', 'Uva'];
for (let i in frutas) {
    console.log(frutas[i]);
}

/* Exemplo de quanto a vida é facilitada com o for in
tratando objetos por ex */

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Henrique',
    idade: '37'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};

/* Aqui facilita muito pois podemos pegar a variavel
'chave' dinamicamente, sem saber qual o nome dela ou o valor. */

for (let chave of frutas) {
    console.log(chave);
}

/* Resumo:
For clássico - Geralmente com iteráveis (array ou strings)
For in - Retorna o índice ou chave (string, array ou objeto)
For of - Retorna o valor em si (iteráveis, array ou string)
*/