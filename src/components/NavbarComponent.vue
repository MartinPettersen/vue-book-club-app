<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<template>
        <nav class="space-x-4 bg-blue-400 flex h-20 shadow-2xl items-center justify-center border-b-2 border-slate-600">
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/about">Om Oss</RouterLink>
        <RouterLink to="/about">Bøker</RouterLink>
        <RouterLink to="/about">Meld deg på</RouterLink>
        <RouterLink to="/about">Nyheter</RouterLink>
      </nav>
</template>
