<template>
  <label class="flex items-center gap-2">
    <input
      :type="type"
      :value="value"
      v-model="model"
      class="accent-blue-600"
      :disabled="disabled"
    />
    <span><slot /></span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const {
  modelValue,
  value,
  type,
  disabled
} = defineProps({
  modelValue: {
    type: [Array, Boolean],
    required: true,
  },
  value: {
    type: [String, Number, Boolean],
    default: true,
  },
  type: {
    type: String,
    default: 'checkbox',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
