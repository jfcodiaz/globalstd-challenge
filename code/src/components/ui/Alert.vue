<template>
  <div
    v-if="message"
    :class="[
      'px-4 py-2 rounded-lg text-sm',
      type === 'error' ? 'bg-red-100 text-red-700' :
      type === 'success' ? 'bg-green-100 text-green-700' :
      'bg-blue-100 text-blue-700'
    ]"
  >
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String,
  type: {
    type: String,
    default: 'error' // could be 'error', 'success', 'info', etc.
  }
})
</script>
