<script lang="ts" setup>

import { defineProps } from 'vue';

defineProps({
  title: String,
  imageUrl: String,
})

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{  imageUrl }}</p>
    <div class="flex flex-row space-x-2">
      <p>Les mer om månedens bok</p>
      <p>Bli medlem</p>
      <p>Vi møtes en gang i måneden</p>
    </div>
  </div>
</template>
