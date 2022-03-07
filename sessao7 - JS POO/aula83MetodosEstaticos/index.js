function teste() {
    console.log('Este é meu teste.');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 4;
    }
//  Método de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

//  Método estático
    static soma(x, y) {
        console.log(this);
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

teste();

console.log(ControleRemoto.soma(2, 4));

ControleRemoto.soma();
