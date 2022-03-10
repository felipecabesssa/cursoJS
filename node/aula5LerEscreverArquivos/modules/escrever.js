const fs = require('fs').promises;
/* const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
fs.writeFile(caminhoArquivo, 'olá JS\n', { flag: 'a' }); */
// Essas 4 linhas de código acima criam um arquivo teste.txt um diretório 
// antes do que a gente ta com o '..' e escreve (fs.writeFile) 
// Frase 1 no arquivo teste.txt

// o a no lugar do w não sobrescreve o arquivo, adiciona.

// e a flag w Faz com que caso ja exista o arquivo ele sobreescreve
// Frase 1 no arquivo teste.txt


module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
};