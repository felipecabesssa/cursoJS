alert('Com a nossa mensagem');
confirm('deseja mesmo apagar ?');
prompt('Digite algo');
const ok = confirm('realmente deseja cancelar ?');
console.log(typeof ok, ok);
let num1 = prompt('digite um numero');
num1 = Number(num1);
let num2 = prompt('digite outro numero');
num2 = Number(num2);
const resultadoSoma = num1 + num2;
console.log(typeof num1, num1, typeof num2, num2);
alert(`a soma dos dois números é: ${resultadoSoma}`);