<template>
  <div class="h-full">
    <iframe class="wh-full" :src="src"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const src = ref(`https://bit101.cn${route.query.path}`);
console.log(src);
</script>

<style scoped></style>
