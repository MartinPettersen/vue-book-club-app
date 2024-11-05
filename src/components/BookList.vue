<script lang="ts" setup>

import { ref } from 'vue';

import { defineProps } from 'vue';
import BookDisplay from './BookDisplay.vue';

defineProps({
  title: String,
  imageUrl: String,
})


const showMore = ref(false)
const limit = ref(3)


const books = ref([
  {title: "Bangkok for foodies", imageUrl: "image"},
  {title: "Lord of the Necklases", imageUrl: "image"},
  {title: "Flies among the lords", imageUrl: "image"},
  {title: "Bat among the Dows", imageUrl: "image"},
])

const toggleShowMore = () => {
  if ( showMore.value) {
    limit.value = 3
  } else {
    limit.value = books.value.length
  }
  showMore.value = !showMore.value
}



</script>

<template>
  <div>
    <div class="flex flex-col space-x-2 items-center justify-center">
      <div>

        <h1 class="text-3xl font-bold">Månedens bok: {{ title }}</h1>
        <p>{{ imageUrl }}</p>
      </div>
      <div class="w-full h-full flex items-center justify-center bg-blue-50 rounded-md flex-col">

        <div class="flex m-4 items-center justify-center flex-col ">
          <h1 class="m-4 text-3xl font-bold">Tidligere Bøker</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="book in books.slice(0, limit || books.length)" :key="book.title">
              <BookDisplay  :title="book.title" :image-url="book.imageUrl"/>

            </div>
          </div>
        </div>
        <button @click="toggleShowMore" class="p-4 m-4 w-[60%] bg-orange-400 hover:bg-orange-300 text-white text-3xl font-bold rounded-lg">Mer</button>
      </div>
    </div>
  </div>
</template>
