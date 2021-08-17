function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
/* console.log(mostraHora());

/* acima usamos a função chamando ela.
abaixo veremos uma forma de pegar um intervalo de tempo
passando a função como referencia ao invés de chama-la /

function funcaoDoInterval() {
    console.log(mostraHora());
} //aqui foi só exemplo, vamos criar essa função dentro do setInterval

setInterval(funcaoDoInterval, 1000); //aqui ela mostra a hora a cada segundo
(que foi passado como parametro - 1000Ms) */

/* abaixo a criação da função e o mostramento da hora a cada segundo
tudo dentro do setInterval  */

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

/* Abaixo vamos usar a função setTimeout para parar a execução da setInterval */

setTimeout(function() {
    clearInterval(timer); //aqui ta o stop
}, 5000); //aqui é quando queremos parar (no caso após 5 segundos (5000Ms))

/* Abaixo usando a setTimeout para exibir uma mensagem após 6 segundos.
primeiro ele vai mostrar a hora de segundo em segundo, parar após 5 segundos
com a função acima e mostrar a msg após 6 secs com a função abaixo. */

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);