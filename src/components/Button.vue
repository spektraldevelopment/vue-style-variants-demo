<template>
  <button
    :class="[button.base, button[variantClass]]"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary',
  disabled?: boolean,
}>()

const variantClass = props.variant ?? 'primary'
</script>

<style module="button">
.base {
  padding: var(--size-2) var(--size-2);
  border-radius: 6px;
  font-family: var(--text-fonts-sans);
  margin-right: var(--size-2);
}

.primary {
  background-color: var(--colors-orange-500);
  color: var(--colors-black);
}

.secondary {
  background-color: var(--colors-orange-900);
  color: var(--colors-white);
  border: 1px solid var(--colors-orange-900);
}
</style>