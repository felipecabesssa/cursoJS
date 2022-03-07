const resultado = document.querySelector('.mostraData');

function zeroAEsquerda(num) {
    if (num >= 10) {
        return num;
    } else {
        return `0${num}`;
    }
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}- ${hora}:${min}:${sec}`;
}
const data = new Date();
const dataBrasil = formataData(data);

mostraData.innerHTML = dataBrasil;