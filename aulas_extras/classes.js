class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }

  mostrarInfo() {
    console.log(
      `Este é um ${this.tipo}, de cor ${this.cor}, e sua velocidade máxime é de ${this.velocidade} km/h.`
    );
  }
}

class Carro extends Veiculo {
  constructor(cor, modelo, velocidade, valor) {
    super("carro", cor, velocidade);
    this.modelo = modelo;
    this._valor = valor;
  }

  get valor() {
    return this._valor;
  }

  set valor(novoValor) {
    this._valor = novoValor;
  }

  mostrarInfo() {
    console.log(
      `Este é um ${this.modelo}, de cor ${this.cor}, e sua velocidade máxima é de ${this.velocidade} km/h e seu valor é ${this._valor}`
    );
  }

  acelerar(velocidadeExtra = 10) {
    this.velocidade += velocidadeExtra;
    console.log(
      `O ${this.modelo} acelerou. Nova velocidade: ${this.velocidade} km/h.`
    );
  }
}

const porsche = new Carro("vermelho", "Porsche 911 Turbo", 320, 300000.0);
porsche.mostrarInfo();
porsche.acelerar(20);
porsche.acelerar(30);
