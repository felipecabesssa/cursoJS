/*
Felipe Henrique tem 36 anos, pesa 105kg 
tem 1.9 de altura e seu IMC é de 27.332361516034986
Felipe nasceu em 1984
*/
const nome = 'Felipe Henrique';
const sobrenome = 'S.A';
const idade = 37;
const peso = 105;
const altura = 1.96;
let imc; //peso / (altura * altura)
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2021 - idade;
//exemplo de concatenação com virgula e com sinal de +
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg');
//template strings
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`Felipe Henrique nasceu em ${anoNascimento}.`);