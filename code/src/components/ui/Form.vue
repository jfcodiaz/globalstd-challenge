<template>
  <form @submit.prevent="handleSubmit" :class="formClass">
    <slot />
    <!-- Botón oculto para permitir envío con Enter -->
    <button type="submit" class="hidden" tabindex="-1" aria-hidden="true"></button>
  </form>
</template>

<script setup>
const props = defineProps({
  formClass: {
    type: String,
    default: 'space-y-4'
  }
})

const emit = defineEmits(['submit'])

function handleSubmit(event) {
  emit('submit', event)
}
</script>
