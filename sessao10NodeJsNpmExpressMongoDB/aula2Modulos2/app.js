const Cachorro = require('./mod');

const cachorrinho = new Cachorro('Dog');
cachorrinho.latir();

//--------------------------------------------

console.log('\nNavegação\n');

const path = require('path');
//                                  volta uma pasta   
console.log(path.resolve(__dirname, '..', 'arquivos'));
//                      lista a pasta atual, colocando o nome dentro do aspas ele avança uma pasta        



