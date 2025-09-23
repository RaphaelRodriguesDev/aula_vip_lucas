// src/controller/PokemonController.js
import Pokemon from '../model/Pokemon.js';
import PokemonView from '../view/PokemonView.js';

class PokemonController {
  constructor(root) {
    this.view = new PokemonView(root);
    this.view.renderForm();
    this.addFormListener();
  }

  addFormListener() {
    const form = document.querySelector('.pokemon-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = form.pokemon.value.trim().toLowerCase();
      if (!input) return;
      this.view.clearResult();
      try {
        const data = await this.fetchPokemon(input);
        const pokemon = new Pokemon(data);
        this.view.renderPokemon(pokemon);
      } catch (err) {
        this.view.renderError('Pokémon não encontrado!');
      }
    });
  }

  async fetchPokemon(nameOrId) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    if (!res.ok) throw new Error('Pokémon não encontrado');
    return res.json();
  }
}

// Inicialização
const root = document.getElementById('app');
new PokemonController(root);
