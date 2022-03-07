/* Anotações

- Só pode usar a palavra Await em uma função que começa com Async
- Await permite vc 'esperar' algo.

 */

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

// ------------------------------------------------------------------------

/*

exemplo sem Async e Await - mto código repetido !
esperaAi('Fase ', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('terminamos na fase: ', fase);
    })
    .catch(e => console.log(e));
    
*/

// exemplo com Async e Await e try catch

async function executa() {
//  colocando tudo dentro de um try catch fica mais fácil manipular erros, 
//  mudando a string pra nº como tratamos na funcao esperaAi()    
    try {
        const fase1 = await esperaAi('Fase 1', rand()); // esse rand é um método que criamos acima 
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi(2, rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();

// estados das promises:
// pending -> pendente 
// fullfilled -> resolvida
// reject -> rejeitada
