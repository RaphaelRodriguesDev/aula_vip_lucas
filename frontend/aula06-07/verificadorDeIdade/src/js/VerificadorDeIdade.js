export class VerificadorDeIdade {
  constructor(formSelectors) {
    this.anoInput = document.querySelector(formSelectors.anoInput);
    // Esperamos uma lista de inputs (radio) com o mesmo name. O script que
    // instancia esta classe passa `sexoInputName` (por exemplo 'radsex').
    // Aceitamos `formSelectors.sexo` ou `formSelectors.sexoInputName`.
    const sexoName = formSelectors.sexo || formSelectors.sexoInputName;
    this.sexoInputs = sexoName ? document.getElementsByName(sexoName) : null;
    this.resultadoDiv = document.querySelector(formSelectors.resultadoDiv);
    this.botao = document.querySelector(formSelectors.botao);
    this.assetsPath = formSelectors.assetsPath || "./assets/img/";
    this.init();
  }

  init() {
    this.botao.addEventListener("click", () => this.verificar());
  }

  verificar() {
    const anoAtual = new Date().getFullYear();
    const anoNascimento = Number(this.anoInput.value);
    this.resultadoDiv.innerHTML = "";

    if (!anoNascimento || anoNascimento > anoAtual) {
      alert("[ERRO] Verifique os dados e tente novamente!");
      this.resultadoDiv.innerHTML =
        "Preencha os dados corretamente para ver o resultado!";

      return;
    }

    const idade = anoAtual - anoNascimento;
    // Determina corretamente qual radio está marcado (procura pelo checked)
    let sexo = "masculino"; // padrão
    if (this.sexoInputs && this.sexoInputs.length) {
      for (let i = 0; i < this.sexoInputs.length; i++) {
        const el = this.sexoInputs[i];
        if (el.checked) {
          // Usamos o id (ex.: 'fem' / 'masc') para mapear para 'feminino'/'masculino'
          const id = (el.id || "").toLowerCase();
          sexo = id.includes("fem") ? "feminino" : "masculino";
          break;
        }
      }
    }
    let faixaEtaria = this.getFaixaEtaria(idade, sexo);
    let img = this.criarImagem(faixaEtaria.img);

    this.resultadoDiv.innerHTML = `Detectamos ${faixaEtaria.texto} com ${idade} anos.`;
    this.resultadoDiv.appendChild(img);
  }

  getFaixaEtaria(idade, sexo) {
    const faixasEtarias = {
      feminino: [
        { min: 0, max: 4, texto: "uma bebê", img: "bebe-f.jpg" },
        { min: 5, max: 12, texto: "uma criança", img: "crianca-f.jpeg" },
        {
          min: 13,
          max: 21,
          texto: "uma adolescente",
          img: "adolescente-f.jpeg",
        },
        { min: 22, max: 59, texto: "uma adulta", img: "adulto-f.jpeg" },
        { min: 60, max: 120, texto: "uma idosa", img: "idoso-f.jpeg" },
      ],
      masculino: [
        { min: 0, max: 4, texto: "um bebê", img: "bebe-m.jpeg" },
        { min: 5, max: 12, texto: "uma criança", img: "crianca-m.jpeg" },
        {
          min: 13,
          max: 21,
          texto: "um adolescente",
          img: "adolescente-m.jpeg",
        },
        { min: 22, max: 59, texto: "um adulto", img: "adulto-m.jpeg" },
        { min: 60, max: 120, texto: "um idoso", img: "idoso-m.jpeg" },
      ],
    };

    return (
      // 'f' é cada objeto da lista de faixas etárias (f = faixa)
      faixasEtarias[sexo].find(
        /* f = faixa */ f => idade >= f.min && idade <= f.max
      ) || {
        texto: "uma pessoa de idade desconhecida",
        img: "",
      }
    );
  }

  criarImagem(nomeArquivo) {
    const img = document.createElement("img");
    img.id = "imagem";
    img.alt = "Foto representativa";
    img.src = this.assetsPath + nomeArquivo;
    img.style.marginTop = "10px";
    return img;
  }
}
