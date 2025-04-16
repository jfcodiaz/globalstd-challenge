<template>
  <div class="h-screen flex flex-col text-text">
    <div class="flex items-center bg-[#2F3746] text-white h-14 px-6">
      <img src="@/assets/logo.svg" alt="Logo" class="w-5 h-5 mr-2" />
      <span class="font-semibold">GlobalStd Challenge</span>
    </div>
    <div class="flex flex-1 overflow-hidden">
      <SidebarMenu/>
      <div class="flex-1 flex flex-col bg-[#F6F7FB]">
        <TopBar/>
        <main class="flex-1 p-6 overflow-y-auto">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
  import SidebarMenu from '@/layouts/SidebarMenu.vue'
  import TopBar from './TopBar.vue';
</script>
