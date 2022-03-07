function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento){
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pesoNumero = Number(peso.value);
        const alturaNumero = Number(altura.value);
        const pesoIMC = pesoNumero * pesoNumero;

        const IMC = pesoIMC / alturaNumero;
        const IMCFinal = IMC.toFixed(1);

        if (IMCFinal < 18.5){
            resultado.innerHTML = `<h1>Seu IMC é <strong>${IMCFinal} (Abaixo do peso)</strong></h1>`
        }else if (IMCFinal > 18.5 && IMCFinal < 24.9){
            resultado.innerHTML = `<h1>Seu IMC é <strong>${IMCFinal} (Peso normal)</strong></h1>`
        }else if(IMCFinal > 25 && IMCFinal < 29.9){
            resultado.innerHTML = `<h1>Seu IMC é <strong>${IMCFinal} (Sobrepeso)</strong></h1>`
        }else if(IMCFinal > 30 && IMCFinal < 34.9){
            resultado.innerHTML = `<h1>Seu IMC é <strong>${IMCFinal} (Obesidade grau 1)</strong></h1>`
        }else if(IMCFinal > 35 && IMCFinal < 39.9){
            resultado.innerHTML = `<h1>Seu IMC é <strong>${IMCFinal} (Obesidade grau 2)</strong></h1>`
        }else if(IMCFinal > 40){
            resultado.innerHTML = `<h1>Seu IMC é <strong>${IMCFinal} (Obesidade grau 3)</strong></h1>`
        }

        //resultado.innerHTML = `<h1>Informe o peso ou altura</h1>`
    }
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();