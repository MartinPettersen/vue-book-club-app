<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<template>
        <nav class="space-x-4 bg-blue-400 flex h-20 shadow-2xl items-center justify-center border-b-2 border-slate-600">
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/about">Om Oss</RouterLink>
        <RouterLink to="/books">Bøker</RouterLink>
        <RouterLink to="/signup">Meld deg på</RouterLink>
        <RouterLink to="/news">Nyheter</RouterLink>
      </nav>
</template>
