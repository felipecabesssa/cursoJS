const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, defalt: '' },
  email: { type: String, required: false, defalt: '' },
  telefone: { type: String, required: false, defalt: '' },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

// CRUD - CREATE --------------------------------------------------------
Contato.prototype.register = async function() {
  this.valida();
  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
};

// ---- Valida email e se campos tão preenchidos ----

// Mudando de classe p/ constructure function
Contato.prototype.valida = function() {
  this.cleanUp();
  // Validação
  // O email precisa ser valido
  // avaliação de curto circuito
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório');
  if(!this.body.email && !this.body.telefone) {
    this.errors.push('Pelo menos um contato precisa ser enviado: email ou telefone');
  }
};

// Mudando de classe p/ constructure function
Contato.prototype.cleanUp = function() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone
  };
}

// CRUD - UPDATE --------------------------------------------------------
Contato.prototype.edit = async function(id) {
  if(typeof id !== 'string') return;
  this.valida();
  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
};

// CRUD - READ --------------------------------------------------------
// Métodos estáticos - não vai pro prototype e não usa o this.

Contato.buscaPorId = async function(id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findById(id);
  return contato;
}

Contato.buscaContatos = async function() {
  const contatos = await ContatoModel.find()
    .sort({ criadoEm: -1 });
// Ordenar   .sort({ valor/coluna p/ ordenar: e 1 para crescente e -1 decrescente });
  return contatos;
}

module.exports = Contato;
