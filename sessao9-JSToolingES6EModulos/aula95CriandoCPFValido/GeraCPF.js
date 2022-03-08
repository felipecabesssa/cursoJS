// função para inserir . e - no cpf

formatado(cpf) {
    return (
        cpf.slice(0, 3) + '.' + //após 3 digitos coloca o .
        cpf.slice(6, 9) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
    );
}

// função para gerar um cpf valido usando o validador de cpf da aula de classe

geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    const novoCPF = cpfSemDigito + digito1 + digito2;
    return this.formatado(novoCPF);
}

