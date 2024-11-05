<script lang="ts" setup>

import { defineProps } from 'vue';
import { RouterLink} from 'vue-router'

defineProps({
  title: String,
  imageUrl: String,
})

</script>

<template>
  <div class="bg-blue-300 p-2 space-y-2 rounded-md flex items-center justify-center text-white flex-col">
    <h1 class="font-bold text-xl">{{ title }}</h1>
    <p>{{  imageUrl }}</p>
    <RouterLink class="bg-orange-400 p-1 rounded-md hover:bg-orange-300 font-bold ']" to="/about">Les mer</RouterLink>
  </div>
</template>
