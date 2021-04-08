<template>
  <div>
    <router-view />
    <modal />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import Modal from "@/components/Modals/Modal.vue";
export default defineComponent({
  components: { Modal },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "assets/scss/main";
</style>
