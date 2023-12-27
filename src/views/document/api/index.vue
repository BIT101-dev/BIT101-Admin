<!--
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 16:52:25
 * @Description:
 * _(:з」∠)_
-->
<template>
  <div class="h-full">
    <iframe class="wh-full" :src="src"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const src = ref('https://bit101-api.apifox.cn');
</script>

<style scoped></style>
