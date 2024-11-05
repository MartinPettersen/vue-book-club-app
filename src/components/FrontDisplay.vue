<script lang="ts" setup>

import { defineProps } from 'vue';

defineProps({
  title: String,
  imageUrl: String,
})

</script>

<template>
  <div class="flex items-center justify-center flex-col">
    <h1>{{ title }}</h1>
    <p>{{  imageUrl }}</p>
    <div class="flex flex-row space-x-2">
      <button class="p-4 m-4 w-[60%] bg-orange-400 hover:bg-orange-300 rounded-lg font-bold text-white text-xl">Les mer om månedens bok</button>
      <button class="p-4 m-4 w-[60%] bg-orange-400  hover:bg-orange-300 rounded-lg font-bold text-white text-xl">Bli medlem</button>
      <button class="p-4 m-4 w-[60%] bg-orange-400  hover:bg-orange-300 rounded-lg font-bold text-white text-xl">Vi møtes en gang i måneden</button>
    </div>
  </div>
</template>
