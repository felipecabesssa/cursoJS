//https:developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date#two%20digit%20years

//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);
//console.log(data.toString());


//const data = new Date(2019, 3, 20, 15, 14, 27, 500); //sem o toString aqui ele pega os milisegundos, com não.
//                    ano , m, d , h ,min, s , miliSec - forma de passar o parametro, se não passar algum valor
//ele zera, tenho que passar no minimo o ano e o mês, senão ele entende o ano como milisegundo. 
//console.log(data.toString());

//data no formato string

//const data = new Date('2021-06-12 23:11:00'); //separamos a data da hora com espaço ou T

/*pegando partes especificas da data, hora etc

console.log('Dia', data.getDate()); //aqui pega o dia
console.log('Mês', data.getMonth() + 1); //assim como vetor ele começa a contar do 0, logo se quisermos o atual temos que somar mais 1 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); //aqui tbem temos o domingo como 0 e sabado 6
console.log(data.toString());
const horaMilisec = Date.now(); //data atual em milisegundos
console.log(horaMilisec);

*/

//Formatando a data via função.

function zeroAEsquerda(num) {
    if (num >= 10) {
        return num;
    } else {
        return `0${num}`;
    }
}
/* Mesma função com operador ternário:

function zeroAesquerda (num){
    return num >= 10 ? num : `0${num}`;
}
*/
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}- ${hora}:${min}:${sec}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);