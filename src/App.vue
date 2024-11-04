<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue';
//import FrontDisplay from './components/FrontDisplay.vue';
//import BookList from './components/BookList.vue';
import { RouterView } from 'vue-router'

</script>

<template>
  <header>

    <NavbarComponent />
  </header>
  <RouterView />

</template>

<style scoped>

</style>
