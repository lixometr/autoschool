<template>
  <div class="modal-content">
    <button class="modal__close" @click="$emit('close')">
      <Close />
    </button>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Close from "@/components/icons/Close.vue";

export default defineComponent({
  components: { Close },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>