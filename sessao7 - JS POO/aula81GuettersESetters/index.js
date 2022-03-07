console.log('\nProtegendo os atributos com o Symbol para acessar com GetSet\n');

const _velocidade = Symbol('velocidade'); //velocidade é um descritor, não tem necessidade nesse caso

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 99;
console.log(c1);

//-----------------------------------------------------------

console.log('\nExemplo mais simples usando molde da aula anterior\n');

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Felipe', 'Henrique');
p1.nomeCompleto = 'Peter Smolik'

console.log('Exibindo o set que foi splitado depois joinzado p1.nome e p1.sobrenome\n');
console.log(p1.nome);
console.log(p1.sobrenome);

console.log('Setando direto no nomecompleto (p1.nomeCompleto)\n');
console.log(p1.nomeCompleto);
