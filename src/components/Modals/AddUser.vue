<template>
  <modal-content @close="$emit('close')">
    <add-user-form />
  </modal-content>
</template>

<script lang="ts">
import ModalContent from './ModalContent.vue'
import { defineComponent } from "@vue/composition-api";
import AddUserForm from "../AddUser/AddUserForm.vue";

export default defineComponent({
  components: { AddUserForm, ModalContent },
  setup(props, { emit }) {
    const onSend = () => {
      emit("close");
    };
    return {
      onSend,
    };
  },
});
</script>

<style >
</style>