<template>
  <header class="flex items-center justify-between bg-white h-14 px-6 border-b">
    <div class="flex items-center gap-2 text-sm text-gray-600">
      <span>🏠</span>
      <span>{{ authStore.user.name }}</span>
    </div>
    <div>
      <component :is="topbarStore.content" v-if="topbarStore.content"/>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useTopBarStore } from '@/stores/topbar'

const authStore = useAuthStore()
const topbarStore = useTopBarStore()

</script>
