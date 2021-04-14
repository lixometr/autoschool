<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <modal />
  </div>
</template>
<script>
import { computed, defineComponent } from "@vue/composition-api";
import Modal from "@/components/Modals/Modal.vue";
import { LayoutType } from "@/types/types";
export default defineComponent({
  components: { Modal },
  computed: {
    layout() {
      return (this.$route.meta.layout || LayoutType.default) + "-layout";
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "assets/scss/main";
</style>
