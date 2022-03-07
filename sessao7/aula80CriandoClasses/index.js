class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} Esta falando.`);
    }
}

const p1 = new Pessoa('Felipe', 'Henrique');
console.log(p1.falar());
