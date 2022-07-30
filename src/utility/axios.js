import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const limit = 3;

export const getPokemons = async () => {
  const pokemons = await axios.get(`${BASE_URL}?limit=${limit}`);

  return pokemons.data;
};

export const getPokemonImage = async (urlImage) => {
  const pokemonImage = await axios.get(urlImage);

  return pokemonImage.data.sprites.other.home["front_default"];
};

export const getPokemon = async (query) => {
  try {
    const pokemon = await axios.get(`${BASE_URL}/${query}`);

    return pokemon.data;
  } catch (error) {
    //console.log(error);
    return null;
  }
};
