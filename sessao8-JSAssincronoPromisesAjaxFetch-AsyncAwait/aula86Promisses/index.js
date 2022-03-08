// função que gera numeros randomicos no intervalo min e max que for passado como argumento
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// função de timeout pra esperar um tempo (aleatório devido a função acima entre 1, 3 segundos)
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });   
}

esperaAi('Conexão com o BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3)); //Aqui mostramos o uso do reject que é passado no catch
})
.then(resposta => {
    console.log(resposta);
})
.then(() => {
    console.log('Exibe dados na tela');
})
.catch(e => {
    console.log('ERRO.', e);
});

console.log('Eu to no final e seei exibido antes das Promises');

// Essa é a definição de código assincrono, o Js não espera uma Promise para executar 
// um outro código mais simples e rapido independente do escopo que esteja