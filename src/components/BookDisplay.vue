<script lang="ts" setup>

import { defineProps } from 'vue';

defineProps({
  title: String,
  imageUrl: String,
})

</script>

<template>
  <div class="bg-blue-300">
    <h1>{{ title }}</h1>
    <p>{{  imageUrl }}</p>
  </div>
</template>
