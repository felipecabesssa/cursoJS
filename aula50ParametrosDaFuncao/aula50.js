// argumentos que sustenta todos os argumentos enviados
function funcao() {
    console.log(arguments);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// Somando valores passados como argumentos e zero parametros
function somaArgs(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
somaArgs(1, 2, 3, 4, 5, 6, 7);

// Passando valores definidos nos parametros com o OU (
// se não passar valor como argumento ele seta o do parametro)
// ele espera um valor 'undefined' para assumir o que vc passou
// logo não é uma boa pratica
function parametro(a, b = 2, c = 4) {
    console.log(a + b + c);
}
parametro(2, 10);
