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
    <div class="flex flex-col space-x-2">
      <div>

        <h1>Månedens bok: {{ title }}</h1>
        <p>{{ imageUrl }}</p>
      </div>
      <div>
        <h1>Tidligere Bøker:</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="book in books.slice(0, limit || books.length)" :key="book.title">
              <BookDisplay  :title="book.title" :image-url="book.imageUrl"/>

            </div>
        </div>
      </div>
      <button @click="toggleShowMore" class="p-4 bg-blue-400 rounded-lg">Mer</button>
    </div>
  </div>
</template>
