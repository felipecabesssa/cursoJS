// Factory function (Função fábrica)
console.log('\nFactory function (Função fábrica)\n');
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

//      Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

//      Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
//          Separa por espaço
            this.nome = valor.shift();
//          Armazena o primeiro valor do split e "substitui" ele, tira do 1º valor e joga no this.nome
            this.sobrenome = valor.join(' ');
//          Junta os valores separados pelo valor que vc passou ' ' espaço nesse caso.
        },
        
//      fala: function(assunto){
        fala(assunto){ //funcao dentro de objeto é um método ;)
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

//      Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

/* 
const p1 = criaPessoa('Felipe', 'Henrique', 1.9, 110);
console.log('\nPessoa: ' + p1.nome + ' ' + p1.sobrenome);
console.log('Peso: ' + p1.peso);
console.log('Altura: ' + p1.altura);
console.log('\nSeu IMC é de: ' + p1.imc() + '\n');
//                               Da erro se não tirar o Getter ou passar como argumento: p1.imc

const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 53);
console.log('Seu IMC é de: ' + p2.imc());
console.log(p2.fala('aprendendo JS'));
console.log('\n-------------------------');
*/

// Constructor function (Função construtora)
console.log('\nConstructor function (Função construtora)\n');

const p3 = criaPessoa('Peter', 'Smolik', 1.8, 80);
console.log('\nPessoa: ' + p3.nomeCompleto);
// Ao invéz de escrever o nome completo assim vamos criar um método dentro do criaPessoa que retorna o nomeCompleto
console.log('Peso: ' + p3.peso);
console.log('Altura: ' + p3.altura);
console.log('\nSeu IMC é de: ' + p3.imc + '\n');
// Para usar assim o imc dentro do objeto deve estar com o método de acesso get na frente
// Ele finge ser um atributo ao invéz de uma função.

const p4 = criaPessoa('Maria', 'Josefa Josefina', 1.5, 120);
p4.nomeCompleto = 'Lisboa Berlin Porto';
console.log(p4.nome);
console.log(p4.sobrenome);
