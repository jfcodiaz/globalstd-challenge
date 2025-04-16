<template>
  <Button
    v-bind="$attrs"
    customClass="
      !bg-danger
      hover:!bg-danger-hover
      active:!bg-danger-active
      text-scondary hover:bg-red-700"
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
