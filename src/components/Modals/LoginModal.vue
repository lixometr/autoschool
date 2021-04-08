<template>
  <div class="modal-content py-5">
    <button class="modal__close" @click="$emit('close')">
      <Close />
    </button>
    <login-form @send="onSend" />
  </div>
</template>

<script lang="ts">
import LoginForm from "../Login/LoginForm.vue";
import Close from "@/components/icons/Close.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { Close, LoginForm },
  setup(props, { emit }) {
    const onSend = () => {
      emit("close");
    };
    return { onSend };
  },
});
</script>

<style lang="scss">
</style>