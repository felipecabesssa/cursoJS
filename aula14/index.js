//IEEE 754-2008
let num1 = 15.00194984949; //number
let num2 = 2.5; //number

let num3 = 0.7;
let num4 = 0.1;

//console.log(num1.toString() + num2);
//console.log(typeof num1); aqui num1 não virou string, ele só adotou esse comportamento nessa linha para concatenar com o num2
//num1 = num1.toString(); aqui ele virou um string de fato.
//console.log(num1.toString(2)); //transformando em binário. 
//console.log(num1.toFixed(2)); //Arredondar numero quebrado, o parametro 2 é a quantidade de casas decimais que queremos.
//console.log(Number.isInteger(num1)); //verificar se o numero é inteiro - retorno true or false
/*let temp = num1 * 'ola';
console.log(temp); aqui retornaria NaN pois ola não é um nº
console.log(Number.isNaN(temp)); aqui ele verifica se é NaN e retorna true or false*/

/* resolvendo problema de imprecisão
num3 = Number(num3.toFixed(2));
console.log(num3.toFixed(2));
console.log(Number.isInteger(num3));
*/