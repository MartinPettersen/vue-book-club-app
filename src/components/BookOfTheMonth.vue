<script lang="ts" setup>

import { defineProps } from 'vue';

defineProps({
  title: String,
  imageUrl: String,
  author: String,
  description: String,
})

</script>

<template>
  <div>
    <h1>Månedens bok: Fangen fra Sulten</h1>
    <p>bilde</p>
    <div class="flex flex-row space-x-2">
      <p>Forfatter: {{ author }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
