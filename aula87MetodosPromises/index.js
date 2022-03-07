// função que gera numeros randomicos no intervalo min e max que for passado como argumento
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// função de timeout pra esperar um tempo (aleatório devido a função acima entre 1, 3 segundos)
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Cai no erro'); //aqui estava false, colocamos uma string só pra ver o erro.
            return;
        } 

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });   
}

// ---------------------------------------------------------------------------------

// Promise.all Promise.race Promise.resolve Promisse.reject

// Promise.all

// tenta resolver todas (all) as promises

const promisesAll = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('5000', 500), // O erro esta aqui, para corrigir é só passar uma string (msg) no lugar do 5000
/*  No promise.all independente do nº de promises que vc passar
 se tiver um erro ela para no erro, como no caso acima que ao criar a promise
 tem o if tratando o erro para receber somente string, como passamos um nº no lugar 
 de string acima deu erro. */
    esperaAi('Promise 3', 1000)
];

Promise.all(promisesAll)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

// -----------------------------------------------------------------------------------

// Promise.race

// dada uma lista de promessas a primeira a ser resolvida é entregue (corrida mesmo) 

const promisesRace = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('5000', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5))
];

Promise.race(promisesRace)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

// ----------------------------------------------------------------------------------

// Promise.resolve e Promise.reject

// resolve
// resolve não espera nenhuma  promise pois (nesse caso pelo menos) ele ja tem os dados em mãos

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
//      retorno caso emCache === true        
    } else {
        return esperaAi('Baixei a página', 3000);
//      retorno caso emCache === false        
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));


// o reject cai direto no .catch


