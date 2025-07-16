<template>
  <button class="button" :style="buttonStyle">
    <slot />
  </button>
</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps<{
  bgColor?: string;
  color?: string;
}>()

const buttonStyle = computed(() => ({
  '--bg-color': props.bgColor || 'white',
  '--color': props.color || 'black',
}))
</script>

<style scoped>
.button {
  padding: 1rem;
  color: var(--color);
  border: none;
  margin-bottom: 1rem;
  background-color: var(--bg-color);
}
</style>