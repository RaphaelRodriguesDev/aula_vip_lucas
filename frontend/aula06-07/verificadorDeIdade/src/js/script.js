import {VerificadorDeIdade} from "./VerificadorDeIdade.js";

document.addEventListener("DOMContentLoaded", () => {
  new VerificadorDeIdade({
    anoInput: "#txtano",
    sexoInputName: "radsex",
    resultadoDiv: "#resultado",
    botao: ".btn",
    assetsPath: "./assets/img/",
  })
});