<script lang="ts" setup>

import { ref } from 'vue';

const userEmail = ref("")

</script>

<template>
  <div>
    <div class="flex flex-col space-x-2">
      <p>Meld deg inn i klubben</p>
      <p>Godta Termene for klubben</p>
      <p>Din Email: {{ userEmail }} </p>
      <p>Du vil bli tilsendt en bekreftelse email </p>
      <button>Påmeld</button>
    </div>
  </div>
</template>
