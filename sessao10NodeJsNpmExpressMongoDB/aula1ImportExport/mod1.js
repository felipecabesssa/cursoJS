const nome = 'Felipe';
const sobrenome = 'Soares';

const falaNome = () => nome + ' ' + sobrenome;

module.exports.nome = nome;
// podemos abreviar tirando a palavra module
exports.sobrenome = sobrenome;

//podemos usar o this
this.qualquerCoisa = 'coisa exportada';
// com o this não é muito usado pq alem de confundir com o this que referencia a função pode ter mais complicações

console.log(module.exports);

exports.falaNome = falaNome;

// exemplo com classe

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
