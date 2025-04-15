<template>
  <div :class="[
      'flex items-center',
      customClass,
      '[&>*:not(:first-child)]:ml-2 [&>*:not(:last-child)]:mr-2']"
    >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  customClass: {
    type: [String, Array, Object],
    default: 'justify-start',
  }
})
</script>
