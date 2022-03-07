// Closure - Habilidade da funcao em acessar o seu escopo léxico.
// o closure fecha o escopo qndo executado (return)

function retornaFuncao(){
    const nome = 'Felipe';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);
