// src/view/PokemonView.js
export default class PokemonView {
  constructor(root) {
    this.root = root;
  }

  renderForm() {
    this.root.innerHTML = `
      <form class="pokemon-form">
        <input type="text" name="pokemon" placeholder="Digite o nome ou ID do Pokémon" required />
        <button type="submit">Buscar</button>
      </form>
      <div id="pokemon-result"></div>
    `;
  }

  renderPokemon(pokemon) {
    const result = this.root.querySelector('#pokemon-result');
    result.innerHTML = `
      <div class="pokemon-card">
        <img src="${pokemon.sprite}" alt="${pokemon.name}" />
        <h2>${pokemon.name} (#${pokemon.id})</h2>
        <ul>
          <li><strong>Tipo(s):</strong> ${pokemon.types.join(', ')}</li>
          <li><strong>Altura:</strong> ${pokemon.height / 10} m</li>
          <li><strong>Peso:</strong> ${pokemon.weight / 10} kg</li>
        </ul>
      </div>
    `;
  }

  renderError(message) {
    const result = this.root.querySelector('#pokemon-result');
    result.innerHTML = `<div class="error-message">${message}</div>`;
  }

  clearResult() {
    const result = this.root.querySelector('#pokemon-result');
    result.innerHTML = '';
  }
}
