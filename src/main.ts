import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon.ts";
import { Pokemon } from "./data/types.ts";

const cardContainer = document.querySelector<HTMLElement>(".card-container");
const filterInput = document.querySelector<HTMLInputElement>(".cards__filter");

if (!cardContainer || !filterInput) {
  throw new Error("Something went wrong with the query selector");
}

let filteredPokemonCards = [...pokemonArray];

const renderPokemonCards = () => {
  cardContainer.innerHTML = "";
  filteredPokemonCards.forEach((pokemon) => {
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
};

const handleFilter = (event: Event) => {
  const userInput = (
    event.currentTarget as HTMLInputElement
  ).value.toLowerCase();

  filteredPokemonCards = pokemonArray.filter((pokemon: Pokemon) => {
    if (pokemon.types[1]) {
      return (
        pokemon.name.toLowerCase().includes(userInput) ||
        pokemon.types[0].toLowerCase().includes(userInput) ||
        pokemon.types[1].toLowerCase().includes(userInput)
      );
    } else {
      return (
        pokemon.name.toLowerCase().includes(userInput) ||
        pokemon.types[0].toLowerCase().includes(userInput) ||
        pokemon.id.toString().includes(userInput)
      );
    }
  });
  renderPokemonCards();
};

renderPokemonCards();

filterInput.addEventListener("input", handleFilter);
