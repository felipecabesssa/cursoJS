class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' Já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' Já desligado');
            return;
        }

        this.ligado = false;
    }
}

// const d1 = new DispositoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// console.log(d1);

// Usando Herança (Herdando de DispositoEletronico)

class Smartphone1 extends DispositoEletronico {} 
// Só com essa linha Smartphone1 ja herdou tudo de DispositoEletronico

const s = new Smartphone1('GalaxyA171');
s.ligar();
s.ligar();
console.log(s);

console.log('\nAbaixo Evitando reescrita de código com o super e adicionando atributos (cor)\n');

// Abaixo Evitando reescrita de código com o super e adicionando atributos (cor e modelo)
class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
} 

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Vc alterou o método ligar');
    }
//  Fala oi só no tablet 
    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '10');
s1.desligar();
console.log(s1);

const t1 = new Tablet('ipad', true);
// console.log(t1.ligado);
t1.ligar();
t1.ligar();
t1.falaOi();
// s1.falaOi(); aqui da erro pq falaOi() só funciona no Tablet 
// console.log(t1);
