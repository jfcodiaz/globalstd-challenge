<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-6">GlobalStd Challenge</h1>
      <form @submit.prevent="submit">
        <Input v-model="form.email" type="email" id="email" label="Email" required/>
        <Input v-model="form.password" type="password" id="password" label="Password" required/>
        <Button>Login</Button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
const form = ref({
  email: '',
  password: ''
})

function submit() {
  console.log('Logging in with:', form.value)
}
</script>
