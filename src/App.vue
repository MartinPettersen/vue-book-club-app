<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue';
import FrontDisplay from './components/FrontDisplay.vue';
import BookList from './components/BookList.vue';


</script>

<template>
  <header>

    <NavbarComponent />
  </header>

  <main class="p-16 flex items-center justify-center">
    <FrontDisplay title="Månedens bok: Fangen fra Sulten" imageUrl="bilde" />
    <BookList />
  </main>

</template>

<style scoped>

</style>
