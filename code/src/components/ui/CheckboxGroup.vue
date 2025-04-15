<template>
  <div>
    <label v-if="title" class="block font-medium mb-1">{{ title }}</label>
    <div class="grid gap-2" :class="gridClass">
      <Checkbox
        v-for="item in list"
        :key="item[keyProp]"
        v-model="selected"
        :value="item[valueProp]"
      >
        {{ item[textProp] }}
      </Checkbox>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  list: {
    type: Array,
    default: () => []
  },
  textProp: {
    type: String,
    default: 'name'
  },
  valueProp: {
    type: String,
    default: 'id'
  },
  keyProp: {
    type: String,
    default: 'id'
  },
  title: {
    type: String,
    default: ''
  },
  /**
   * Tailwind responsive columns string, e.g., "1 sm:2 md:3"
   */
  columns: {
    type: String,
    default: '1'
  }
})

const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const gridClass = computed(() =>
  props.columns
    .split(' ')
    .map(entry => {
      const [prefix, value] = entry.includes(':') ? entry.split(':') : [null, entry]
      return prefix ? `${prefix}:grid-cols-${value}` : `grid-cols-${value}`
    })
    .join(' ')
)
</script>
