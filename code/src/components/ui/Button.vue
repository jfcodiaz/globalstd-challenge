<template>
  <button
    :type="type"
    :class="[
      'bg-primary text-primary-light text-sm px-4 py-2 rounded-md',
      'hover:bg-primary-hover',
      'active:bg-primary-active',
      customClass
    ]"
    :style="customStyle"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'submit',
  },
  customClass: {
    type: [String, Array, Object],
    default: '',
  },
  customStyle: {
    type: [String, Object],
    default: '',
  },
  onClick: {
    type: Function,
    default: () => {},
  },
})
</script>
