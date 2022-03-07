function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }


    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        //aqui é um objeto dentro da função para tratar o formato da hora.
        hour: '2-digit',
        minute: '2-digit',
        //second: '2-digit',
        hour12: false
    });
}

// sera tratado no try abaixo - const data = new Date('01-01-1970 12:58:12');
/* se eu retorno essa data acima na função abaixo ta ok
se eu retornar vazio ta ok tbem, se eu retornar um nº 
qualquer da erro*/
/*sera tratado no try abaixo 
const hora = retornaHora(data);
console.log(hora); */

// abaixo vamos tratar possiveis erros

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    console.log(e); //aqui o erro sera mostrado caso eu não passe um instancia de Date na função, um nº por exemplo 
} finally {
    console.log('Tenha um bom dia.')
}