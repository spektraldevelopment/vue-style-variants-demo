<template>
  <button :class="['base-button', variantClass]">
    <slot />
  </button>
</template>

<script setup lang="ts">

import { computed } from "vue";

// Define allowed variants as a union type
type Variant = 'primary' | 'secondary' | 'danger'

// Strongly type props using `defineProps<T>()`
const props = defineProps<{
  variant?: Variant
}>()

// Fallback to 'primary' if undefined (to match default behavior)
const variantClass = computed(() => `button-${props.variant ?? 'primary'}`)
</script>

<style scoped>
.base-button {
  padding: 1rem;
  border: none;
  margin-bottom: 1rem;
}

.button-primary {
  background-color: blue;
  color: white;
}

.button-secondary {
  background-color: gray;
  color: black;
}

.button-danger {
    background-color: red;
    color: white;
}
</style>