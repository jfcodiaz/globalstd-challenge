<template>
  <button
    :type="type"
    :class="[
      'bg-[#1676F3] hover:bg-[#0f5fd9] text-white text-sm px-4 py-2 rounded-md',
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
