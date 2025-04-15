<template>
  <transition
    enter-active-class="transition-opacity duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isVisible"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click.self="close"
    />
  </transition>

  <transition
    enter-active-class="transition transform duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition transform duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div
      v-show="isVisible"
      class="fixed inset-0 flex justify-center items-center z-50"
    >
      <div class="bg-white rounded-lg w-96 max-w-full shadow-lg overflow-hidden">
        <header class="flex justify-between items-center p-4 border-b border-gray-300">
          <slot name="header">
            <h3 class="text-lg font-semibold">Dialog</h3>
          </slot>
          <button class="text-gray-500 hover:text-gray-700 text-2xl focus:outline-none" @click="close">×</button>
        </header>
        <main class="p-4">
          <slot>
            Default content goes here.
          </slot>
        </main>
        <footer class="p-4 border-t border-gray-300 text-right">
          <slot name="footer">
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none" @click="close">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const isVisible = ref(false)

function open() {
  isVisible.value = true
}

function close() {
  isVisible.value = false
}

defineExpose({
  open,
  close
})
</script>
