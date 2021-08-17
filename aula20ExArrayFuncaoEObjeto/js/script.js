function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        /*const imc = (peso.value / (altura.value * altura.value));
            não funcionou pq peso e altura são strings*/

        const testeImcString = Number(peso.value) + Number(altura.value);

        const recebePessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };        
        pessoas.push(recebePessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: <strong>${nome.value}</strong>
         Sobrenome: <strong>${sobrenome.value}</strong>
          Peso: <strong>${peso.value}</strong>
           Altura: <strong>${altura.value}</strong>
            Seu IMC é: <strong>${testeImcString}</strong></p>`
    }
    form.addEventListener('submit', recebeEventoForm);

/* Forma de 'prevenir' o comportamento padrão do navegador
    form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado.');
    };
*/
/* Outra forma 'addEventListener.
    let contador = 1;
    function recebeEventoForm (evento){
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);*/
}
meuEscopo();



