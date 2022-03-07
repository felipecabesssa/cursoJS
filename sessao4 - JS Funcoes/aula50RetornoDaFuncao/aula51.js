function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));


// Exemplo de função retornando função (tipo boneca russa que sai uma dentro da outra ate ficar uma micro)

function duplica(n){
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadruplica(n){
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

console.log('----' + 'Aqui acima sem boneca' + '----');
console.log('----' + 'Aqui baixo com - função closure (Fechamento)' + '----');

// Closure
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadruplica2 = criaMultiplicador(3);

console.log(duplica2(2));
console.log(triplica2(2));
console.log(quadruplica2(2));