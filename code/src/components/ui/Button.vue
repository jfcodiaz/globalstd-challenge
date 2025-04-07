<template>
  <button
    :type="type"
    :class="[
      'w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition',
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
    default: 'submit', // también puede ser 'button' o 'reset'
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
