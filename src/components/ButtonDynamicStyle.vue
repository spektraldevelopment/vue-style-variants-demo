<template>
  <button class="base-button" @click="onButtonClick">
    <slot />
  </button>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps<{
  bgColor?: string;
}>();

const dynamicColor = ref<string>(props.bgColor || 'purple');

const onButtonClick = () => {
  // Toggle between two colors on each click
  dynamicColor.value = dynamicColor.value !== 'orange' ? 'orange' : props.bgColor || 'purple';
}

</script>

<style scoped>
.base-button {
  padding: 1rem;
  border: none;
  margin-bottom: 1rem;
  background-color: v-bind(dynamicColor);
}
</style>