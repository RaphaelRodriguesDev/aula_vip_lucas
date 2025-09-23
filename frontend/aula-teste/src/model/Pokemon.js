// src/model/Pokemon.js
export default class Pokemon {
  constructor({ name, id, sprites, types, height, weight }) {
    this.name = name;
    this.id = id;
    this.sprite = sprites?.front_default || '';
    this.types = types?.map(t => t.type.name) || [];
    this.height = height;
    this.weight = weight;
  }
}
