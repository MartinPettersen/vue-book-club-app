<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath: string) => {
  const route = useRoute()
  return route.path === routePath
}


</script>


<template>
        <nav class="space-x-4 bg-blue-300 text-2xl flex h-20 shadow-2xl items-center justify-center border-b-2 border-slate-300">
        <RouterLink :class="[isActiveLink('/')? 'border-b-2 border-white hover:border-orange-400' : '','font-bold text-white hover:text-orange-400']" to="/">Hjem</RouterLink>
        <RouterLink :class="[isActiveLink('/about')? 'border-b-2 border-white hover:border-orange-400' : '','font-bold text-white hover:text-orange-400']" to="/about">Om Oss</RouterLink>
        <RouterLink :class="[isActiveLink('/books')? 'border-b-2 border-white hover:border-orange-400' : '','font-bold text-white hover:text-orange-400']" to="/books">Bøker</RouterLink>
        <RouterLink :class="[isActiveLink('/signup')? 'border-b-2 border-white hover:border-orange-400' : '','font-bold text-white hover:text-orange-400']" to="/signup">Meld deg på</RouterLink>
        <RouterLink :class="[isActiveLink('/news')? 'border-b-2 border-white hover:border-orange-400' : '','font-bold text-white hover:text-orange-400']" to="/news">Nyheter</RouterLink>
      </nav>
</template>
