<template>
<Dialog ref="dialogRef">
  <template #header>
    <h3 class="text-lg font-semibold">Create New User</h3>
  </template>
  <template #default>
    <UserForm ref="form" @submit="save" v-model="user"/>
  {{ user }}
  </template>

  <template #footer>
    <ButtonsGroup customClass="justify-end">
      <ButtonDanger @click="dialogRef?.close()">Cancel</ButtonDanger>
      <Button @click="save()">Save</Button>
    </ButtonsGroup>
  </template>
</Dialog>

</template>

<script setup>
import Dialog from '../ui/Dialog.vue'
import UserForm from '../forms/UserForm.vue'
import Button from '../ui/Button.vue'
import ButtonDanger from '../ui/ButtonDanger.vue'
import ButtonsGroup from '../ui/ButtonsGroup.vue'

import { ref, toRaw } from 'vue'

const dialogRef = ref(null);
const form = ref(null);
const user = ref({
  name: '',
  email: '',
  password: '',
  roles: []
});
const isVisible = ref(false);

function open(data = {}) {
  dialogRef.value?.open();
}

function close() {
  dialogRef.value?.close()
}

function save() {
  console.log(toRaw(user.value));
  emit('save', {});
  // emit('update', updatedData);
  close();
}
const emit = defineEmits(['save', 'update'])

defineExpose({
  open,
  close
})
</script>
