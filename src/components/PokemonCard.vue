<script setup>
defineProps({ pokemon: {} });

const getName = (pokemon) => {
  console.log(pokemon.name);
};
</script>

<template>
  <div class="card m-3 p-2 shadow-lg" style="width: 18rem">
    <img :src="pokemon.img" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ pokemon.name }}</h5>
      <button class="btn btn-success mt-4" @click="getName(pokemon)">
        Más Información
      </button>
    </div>
  </div>
</template>

<style scoped></style>
