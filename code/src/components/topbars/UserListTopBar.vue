<template>
  <Button @click="emit('new')"> + New User</Button>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
const emit = defineEmits(['new'])
</script>
