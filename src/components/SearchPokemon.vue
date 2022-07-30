<script setup>
import { ref } from "vue";
import { getPokemon } from "../utility/axios";
import PokemonCard from "./PokemonCard.vue";

const query = ref("");
const pokemon = ref(null);

const handleInput = (e) => {
  if (!e.target.value) {
    pokemon.value = null;
  }
};

const setPokemon = async () => {
  if (query.value) {
    const _pokemon = await getPokemon(query.value);
    if (_pokemon) {
      pokemon.value = {
        name: _pokemon.name,
        img: _pokemon.sprites.other.home["front_default"],
      };
    } else {
      alert("Pokemon no encontrado");
      pokemon.value = null;
    }
  } else {
    alert("Introduce algún nombre");
  }
};
</script>

<template>
  <form @submit.prevent="setPokemon">
    <div class="input-group input-group-lg m-auto mb-5 w-50">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar pokemon"
        v-model="query"
        @input="handleInput"
      />
      <button class="btn btn-success" type="submit">Buscar</button>
    </div>
  </form>

  <div class="container mb-5" v-if="pokemon">
    <PokemonCard :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
