<template>
  <button class="base-button" @click="onButtonClick">
    <slot />
  </button>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const dynamicColor = ref<string>('purple');

const onButtonClick = () => {
    dynamicColor.value = dynamicColor.value === 'purple' ? 'orange' : 'purple';
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