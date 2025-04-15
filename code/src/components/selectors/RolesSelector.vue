<template>
  <CheckboxGroup
    v-model="selectedRoles"
    :list="rolesStore.roles"
    text-prop="name"
    value-prop="name"
    key-prop="id"
    title="Roles"
    columns="1 sm:2 md:3"
  />
</template>
<script setup>
import { useRolesStore } from '@/stores/roles'
import CheckboxGroup from '@/components/ui/CheckboxGroup.vue'
import { ref } from 'vue'

const rolesStore = useRolesStore()

const selectedRoles = ref([])
</script>
