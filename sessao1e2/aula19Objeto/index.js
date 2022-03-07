const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'S.A',
    idade: 37
}

console.log(pessoa1.sobrenome);

function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

console.log(criaPessoa('Felipe', 'S.A', 37));

function criaPessoa2(nome, estado, cidade){
    return {nome, estado, cidade};
}

console.log(criaPessoa2('Felipe', 'Brasilia', 'Guará'));

const pessoaNova = criaPessoa('Henrique', 'Soares', 25);
const localidade = criaPessoa2('Henrique', 'RJ', 'Aterro');

/*
console.log(`O cliente 1 é o: ${pessoaNova} que mora no: ${localidade}`);
Aqui da erro, teria que usar um metodo (exemplo abaixo)*/

const pessoaMetodo = {
    nome: 'Mario',
    sobrenome: 'Adão',
    idade: 500,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    }
}

pessoaMetodo.fala();

/*const pessoaFuncaoMetodo = {
    criaPessoaComMetodo(nome, estado, cidade){
        return {nome, estado, cidade};
    }
}
*/