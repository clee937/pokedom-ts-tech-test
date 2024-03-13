import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon.ts";

console.log(pokemonArray);

const cardContainer = document.querySelector<HTMLElement>(".card-container");

if (!cardContainer) {
  throw new Error("Something went wrong with the query selector");
}

pokemonArray.forEach((pokemon) => {
  if (pokemon.types.length === 1) {
    cardContainer.innerHTML += `<div class="card">
                                  <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}">
                                  <div class="card__content">
                                    <h2 class="card-_heading">${pokemon.name}</h2>
                                    <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} type of pokemon.</p>
                                  </div>
                                  </div>`;
  } else {
    cardContainer.innerHTML += `<div class="card">
                                  <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}">
                                  <div class="card__content">
                                    <h2 class="card-_heading">${pokemon.name}</h2>
                                    <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} &  ${pokemon.types[1]} type of pokemon.</p>
                                  </div>
                                  </div>`;
  }
});
