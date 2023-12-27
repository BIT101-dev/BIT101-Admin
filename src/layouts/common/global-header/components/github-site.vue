<!--
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 18:14:38
 * @Description:
 * _(:з」∠)_
-->
<template>
  <hover-container
    tooltip-content="GitHub"
    class="w-40px h-full"
    :inverted="theme.header.inverted"
    @click="handleClickLink"
  >
    <icon-mdi-github class="text-20px" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';

defineOptions({ name: 'GithubSite' });

const theme = useThemeStore();
function handleClickLink() {
  window.open('https://github.com/bit101-dev/BIT101-Admin/', '_blank');
}
</script>

<style scoped></style>
