<template>
  <button :class="[styles['base-button'], styles[variant]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant: string
}>();
import styles from './ButtonCSSModules.module.css'
</script>