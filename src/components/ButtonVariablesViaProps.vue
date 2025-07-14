<template>
  <button class="button" :style="buttonStyle">
    <slot />
  </button>
</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps(['bgColor'])

const buttonStyle = computed(() => ({
  '--bg-color': props.bgColor || 'white',
}))
</script>

<style scoped>
.button {
  padding: 1rem;
  color: black;
  border: none;
  margin-bottom: 1rem;
  background-color: var(--bg-color);
}


</style>