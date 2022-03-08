// função que pega caracteres aleatórios
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
// função que gera uma letra maiuscula aleatória usando a função acima
// e a tabel ASCII 65 a 91 é o abc maiusculo
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
// os simbolos a gente gera na mão 
const simbolos = ',.:;/?]}~^[{=+-_)(*&%$#@!';
// dai usamos a função pra pegar um deles aleatoriamente
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    // criamos um array para percorrer a quantidadae de caracteres que o usuário escolher

    for(let i=0; i<qtd; i++) {
        // dai a gente faz a avaliação de curto circuito para ir validando os caracteres
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
//      desse jeito a cada laço do for ele vai pegar:
//      maiuscula, minuscula, numero e simbolo ex abaixo
//      Zd2@Dz5%Tf8:Mm5!Ig7/ , dai usamos o slice para pegar a quantidade
//      que o usuário digitou 5 por ex la qndo chamamos a função geraSenha()

    return senhaArray.join('').slice(0, qtd);
}

// geraSenha(5, true, true, true, true);