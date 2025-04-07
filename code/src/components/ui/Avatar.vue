<template>
  <div
    class="rounded-full overflow-hidden flex items-center justify-center shadow-sm ring-1 ring-gray-300"
    :style="{
      width: `${size}px`,
      height: `${size}px`
    }"
  >
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="object-cover w-full h-full bg-gray-300"
    />
    <span
      v-else
      class="w-full h-full bg-gray-300 inline-block"
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: null,
  },
  size: {
    type: Number,
    default: 32,
  },
});
</script>
