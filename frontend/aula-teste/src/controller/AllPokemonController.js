// src/controller/AllPokemonController.js
class AllPokemonController {
  constructor(root) {
    this.root = root;
    this.limit = 60; // Quantos pokémons por página
    this.offset = 0;
    this.pokemonList = [];
    this.renderSkeleton();
    this.fetchAndRender();
    this.addPaginationListeners();
  }

  renderSkeleton() {
    this.root.innerHTML = `
      <h2 class="all-title">Todos os Pokémon</h2>
      <div id="pokemon-list" class="pokemon-list"></div>
      <div class="pagination">
        <button id="prev-btn" disabled>Anterior</button>
        <button id="next-btn">Próximo</button>
      </div>
    `;
  }

  async fetchAndRender() {
    const listDiv = this.root.querySelector('#pokemon-list');
    listDiv.innerHTML = '<div class="loading">Carregando...</div>';
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`);
      const data = await res.json();
      this.pokemonList = data.results;
      listDiv.innerHTML = '';
      for (const poke of this.pokemonList) {
        const pokeId = poke.url.split('/').filter(Boolean).pop();
        listDiv.innerHTML += `
          <div class="poke-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png" alt="${poke.name}">
            <span>${poke.name}</span>
          </div>
        `;
      }
      this.updatePagination(data);
    } catch (err) {
      listDiv.innerHTML = '<div class="error-message">Erro ao carregar Pokémon.</div>';
    }
  }

  addPaginationListeners() {
    this.root.addEventListener('click', (e) => {
      if (e.target.id === 'prev-btn' && this.offset > 0) {
        this.offset -= this.limit;
        this.fetchAndRender();
      }
      if (e.target.id === 'next-btn') {
        this.offset += this.limit;
        this.fetchAndRender();
      }
    });
  }

  updatePagination(data) {
    const prevBtn = this.root.querySelector('#prev-btn');
    const nextBtn = this.root.querySelector('#next-btn');
    prevBtn.disabled = this.offset === 0;
    nextBtn.disabled = !data.next;
  }
}

const root = document.getElementById('all-pokemon-app');
new AllPokemonController(root);
