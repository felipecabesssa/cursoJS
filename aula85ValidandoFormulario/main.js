class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }
//  Valida campos
    camposSaoValidos() {
        let valid = true;

//      remove mensagem de erro ao reenviar form e revalida
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

//      Valida todos os campos
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
//                              pega o irmão anterior.
//          Valida campo em branco
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode ta branco`);
                valid = false;
            }
//          Valida CPF
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }
//          Valida usuário
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }
//  Valida senhas
    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');

        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid;
    }

//  Valida CPF (Importando a classe/arquivo js que criamos na aula anterior)
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value); // Aqui a gente importou a classe validaCPF (junto com o import no html claro)

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido.');
            return false;
        }

        return true;
    }

// Método que valida usuário
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres');
            valid = false;
        }

        // if(usuario.match(/^[a-zA-Z0-9]+$/g)) {
        //     this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e numeros');
        //     valid = false;
        // }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
