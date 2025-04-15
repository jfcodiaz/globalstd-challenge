<template>
  <Form @submit="handleSubmit">
    <Input v-model="formData.name" label="Name" />
    <Input v-model="formData.email" label="Email" />
    <RolesSelector v-model="formData.roles" columns="1 sm:2" />
  </Form>
</template>

<script setup>
import { computed } from 'vue'
import Form from '@/components/ui/Form.vue'
import Input from '@/components/ui/Input.vue'
import RolesSelector from '@/components/selectors/RolesSelector.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      name: '',
      email: '',
      roles: [],
    }),
  },
})

const emit = defineEmits(['update:modelValue', 'submit'])

const formData = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

function handleSubmit() {
  emit('submit', formData.value)
}
</script>
