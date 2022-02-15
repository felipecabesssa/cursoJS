// Função construtora -> (cria) objetos
// Função fabrica -> (fabrica) objetos
// Construtora -> Pessoa (new - tem que usar) - É tipo um modelo, uma 'classe'

function Pessoa(nome, sobrenome) {
//  Atributos ou métodos Privadas
    const ID = 123456;
    const metodoInterno = function(){

    };

//  Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Felipe', 'Henrique');
const p2 = new Pessoa('Luiz', 'Otávio');

p1.metodo();