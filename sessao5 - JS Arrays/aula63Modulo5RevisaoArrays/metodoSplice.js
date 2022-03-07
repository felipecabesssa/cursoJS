//               -5        -4       -3        -2        -1
//                0        1         2         3         4 
const nomes = ['Maria', 'joão', 'Eduardo', 'Gabriel', 'Julia'];

//             (        qtos elementos quer deletar)
// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop

//Removendo do indice -3 ate o final (vai correr ate chegar no maior nº possivel)
const removidos = nomes.splice(-3, Number.MAX_VALUE);
console.log(nomes, removidos);

// Maior número possivel a se chegar no JS (Gerado pelo próprio JS)
//console.log(Number.MAX_VALUE);

console.log('\n-------------------\n');

// Aqui substitui o valor do indice 3 com a opção 1 pelo nome 'Felipe' - se colocar 2 ele remove os 2 ultimos
const nomes2 = ['Maria', 'joão', 'Eduardo', 'Gabriel', 'Julia'];
const removidos2 = nomes2.splice(3, 1, 'Felipe');
console.log(nomes2, removidos2);


