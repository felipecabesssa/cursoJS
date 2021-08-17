// (condição) ? - atribuição caso true : - atribuição caso false.

const pontUsr = 1200;
if (pontUsr >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário normal');
}

//usando operador ternário eu poderia jogar essa comparação em uma linha e depois
//exibir o console.log, da pra fazer direto tambem, segue exemplos abaixo.

const nivelUsr = pontUsr >= 1000 ? 'Usuário VIP' : 'Usuário normal';

//Usamos o operador 'ou' também

const corUsuario = null; //se alterar aqui pra 'red' por exemplo ele muda a cor
const corPadrao = corUsuario || 'Preta'; //nesse caso se ele não mudar a cor a cor sera preta.

console.log(nivelUsr, corPadrao);