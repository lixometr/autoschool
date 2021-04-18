<template>
  <modal-content @close="$emit('close')">
    <add-promocode-form @send="onSend" />
  </modal-content>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import AddPromocodeForm from "../AddPromocode/AddPromocodeForm.vue";
export default defineComponent({
  components: { AddPromocodeForm },
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