<template>
  <modal-content @close="$emit('close')">
    <add-user-form />
  </modal-content>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import AddUserForm from "../AddUser/AddUserForm.vue";

export default defineComponent({
  components: { AddUserForm },
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