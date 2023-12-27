<!--
 * @Author: flwfdd
 * @Date: 2023-09-20 08:42:22
 * @LastEditTime: 2023-12-27 19:51:29
 * @Description:
 * _(:з」∠)_
-->
<template>
  <n-card :bordered="false" class="h-full rounded-8px shadow-sm">
    <n-grid cols="s:1 m:2 l:3" responsive="screen" :x-gap="16" :y-gap="16">
      <n-grid-item v-for="item in cardData" :key="item.id">
        <gradient-bg class="h-124px" :start-color="item.colors[0]" :end-color="item.colors[1]">
          <h3 class="text-24px">{{ item.title }}</h3>
          <div class="flex justify-between pt-12px">
            <svg-icon :icon="item.icon" class="text-32px" />
            <count-to
              :prefix="item.unit"
              :start-value="1"
              :end-value="item.value"
              class="text-30px text-white dark:text-dark"
            />
          </div>
        </gradient-bg>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>

<script setup lang="ts">
import { GradientBg } from './components';

defineOptions({ name: 'DashboardAnalysisDataCard' });

interface CardData {
  id: string;
  title: string;
  value: number;
  unit: string;
  colors: [string, string];
  icon: string;
}

const cardData: CardData[] = [
  {
    id: 'pv',
    title: '日访问量',
    value: 16647,
    unit: '',
    colors: ['#ec4786', '#b955a4'],
    icon: 'mdi:chart-line'
  },
  {
    id: 'uv',
    title: '日访客数',
    value: 1770,
    unit: '',
    colors: ['#865ec0', '#5144b4'],
    icon: 'mdi:person'
  },
  {
    id: 'android',
    title: 'Android日活',
    value: 886,
    unit: '',
    colors: ['#56cdf3', '#719de3'],
    icon: 'mdi:android'
  }
];
</script>

<style scoped></style>
