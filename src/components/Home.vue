<script setup>
import { onBeforeMount, ref } from "vue";
import { getPokemons, getPokemonImage } from "../utility/axios";
import PokemonCard from "./PokemonCard.vue";
import SearchPokemon from "./SearchPokemon.vue";

const pokemons = ref([]);

onBeforeMount(async () => {
  const _pokemons = await getPokemons();

  _pokemons.results.map(async (pokemon, index) => {
    await pokemons.value.push({
      id: index,
      name: pokemon.name,
      img: await getPokemonImage(pokemon.url),
    });
  });
});
</script>

<template>
  <h3 class="title">Pokemons</h3>
  <SearchPokemon />
  <div class="container">
    <template v-for="pokemon in pokemons" :key="pokemon.id">
      <PokemonCard :pokemon="pokemon" />
    </template>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.title {
  color: #fff;
  margin: 10px 0 30px 0;
  font-size: 3em;
}
</style>
