<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :for="id"
      class="block mb-1 text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <input
      :id="id"
      v-bind="$attrs"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        'w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500',
        inputClass
      ]"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: String,
  id: String,
  type: {
    type: String,
    default: 'text',
  },
  inputClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: 'mb-4',
  },
})

defineEmits(['update:modelValue'])
</script>
