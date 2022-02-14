// Escopo léxico: a função vai navegando pelos antecessores
// ate achar o que ela precisa, se não achar como no ex abaixo da erro de not defined
const nome = 'Felipe'; //se eu tirar essa linha da not defined

function falaNome(){
    console.log(nome);
}

falaNome();