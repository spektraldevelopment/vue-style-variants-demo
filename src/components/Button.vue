<template>
  <button :class="[button.base, button[variantClass]]" :disabled="props.disabled" @click="changeButton">
    <slot />
  </button>
</template>

<script setup lang="ts">

import { ref, useCssModule } from 'vue';

import { ColorsOrange300, ColorsOrange500 } from '../styles/tokens';

const button = useCssModule();

const buttonBG = ref<string>(ColorsOrange300);

const changeButton = () => {
  buttonBG.value = buttonBG.value === ColorsOrange300 ? ColorsOrange500 : ColorsOrange300;
}

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'custom',
  disabled?: boolean,
}>()

const variantClass = props.variant ?? 'primary'
</script>

<style module>
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

.custom {
  color: var(--colors-black);
  background-color: v-bind(buttonBG);
}
</style>