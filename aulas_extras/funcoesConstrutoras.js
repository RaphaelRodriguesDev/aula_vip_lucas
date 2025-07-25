function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.saudar = () => {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`;
  }
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Ana", 25);
console.log(pessoa1.saudar());

 // Mostra "Ana"
