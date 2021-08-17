const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;


for (let p of ps) {
    mudaFundoParagrafo(p);
    mudaCorParagrafo(p)
}
function mudaFundoParagrafo (ps) {
    ps.style.backgroundColor = backgroundColorBody;
}
function mudaCorParagrafo (ps) {
    ps.style.color = 'white';
}
 // Na solução do professor ele fez sem função, só que o pai é 
 // Brabo e solucionou encapsulando hehehehe