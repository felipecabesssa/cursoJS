fetch('pagina3.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));

    //                  warn - amarelo 
    //                  error - vermelho



function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
        .then(response => response.text()) //.text converte para texto o que vier
        .then(html => carregaResultado(response))
        .catch(e => console.log(e));

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resutado');
    resultado.innerHTML = response;
}