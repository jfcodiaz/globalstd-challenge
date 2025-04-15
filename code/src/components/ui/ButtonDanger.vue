<template>
  <Button
    v-bind="$attrs"
    customClass="bg-red-600 text-white hover:bg-red-700"
    :onClick="onClick"
  >
    <slot />
  </Button>
</template>

<script setup>
import Button from './Button.vue'

defineProps({
  onClick: {
    type: Function,
    default: () => {},
  },
})
</script>
