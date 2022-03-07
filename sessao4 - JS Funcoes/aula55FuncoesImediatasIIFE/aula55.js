// IIFE -> Immediately invoked function expression
(function(){
    console.log(123456);
})();

console.log('\n---------\n');

(function(idade, peso, altura){

    const sobrenome = 'Soares';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
    console.log(criaNome('Felipe'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(37, 110, 1.95);
