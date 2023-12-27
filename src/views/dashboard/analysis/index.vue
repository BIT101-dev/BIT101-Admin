<!--
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 19:31:53
 * @Description:
 * _(:з」∠)_
-->
<template>
  <n-space :vertical="true" :size="16">
    <top-chart />
    <data-card />
    <!-- <bottom-part /> -->
  </n-space>
</template>

<script lang="ts" setup>
import { DataCard, TopChart } from './components';
</script>

<style scoped></style>
