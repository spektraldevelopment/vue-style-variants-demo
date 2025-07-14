<script setup lang="ts">
import ButtonPropsClass from "./components/ButtonPropsClass.vue"
import ButtonDynamicStyle from "./components/ButtonDynamicStyle.vue";
import ButtonCSSModules from "./components/ButtonCSSModules.vue";
import ButtonVariablesViaProps from "./components/ButtonVariablesViaProps.vue";
</script>

<template>
  <h1>Vue 3 Style Variations</h1>
  <div class="variant-example">
    <h2>Props + :class</h2>
    <p>Using props to determine button styles with computed classes.</p>
    <ButtonPropsClass>Primary Variant</ButtonPropsClass>
    <ButtonPropsClass variant="secondary">Secondary Variant</ButtonPropsClass>
    <ButtonPropsClass variant="danger">Danger Variant</ButtonPropsClass>
  </div>

  <div class="variant-example">
    <h2>Dynamic Style</h2>
    <p>Using reactive state to change styles dynamically.</p>
    <ButtonDynamicStyle>Click to change background color</ButtonDynamicStyle>
  </div>

  <div class="variant-example">
    <h2>CSS Modules</h2>
    <p>Using CSS Modules for scoped styles.</p>
    <ButtonCSSModules variant="primary">Primary Variant</ButtonCSSModules>
    <ButtonCSSModules variant="secondary">Secondary Variant</ButtonCSSModules>
    <ButtonCSSModules variant="danger">Danger Variant</ButtonCSSModules>
  </div>

  <div class="variant-example">
    <h2>CSS Variables via Props</h2>
    <p>Using CSS variables to set specific styles via props.</p>
    <ButtonVariablesViaProps bgColor="lightblue">Light Blue Background</ButtonVariablesViaProps>
    <ButtonVariablesViaProps bgColor="lightgreen">Light Green Background</ButtonVariablesViaProps>
    <ButtonVariablesViaProps bgColor="lightcoral">Light Coral Background</ButtonVariablesViaProps>
  </div>
</template>

<style scoped>
.variant-example {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid white;
}
</style>
