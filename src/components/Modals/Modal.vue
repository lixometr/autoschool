<template>
  <transition :name="modalTransition">
    <div class="modal" v-if="isOpen">
      <div class="modal-container"  :class="modalClass">
        <component
          :is="activeModal"
          v-bind="cProps"
          v-on="cListeners"
          @close="close"
        />
      </div>
      <div class="modal-overlay" @click="overlayClick"></div>
    </div>
  </transition>
</template>

<script>
import useModal from "@/compositions/useModal";
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  setup(props, { emit }) {
    const isOpen = ref(false);
    const activeName = ref("");
    const cProps = ref({});
    const cListeners = ref({});
    const activeModal = ref({});
    const modalTransition = ref("modal-fade");
    const { api } = useModal();
    const open = () => {
      isOpen.value = true;
    };
    const close = () => {
      isOpen.value = false;
      cProps.value = {};
      cListeners.value = {};
      activeName.value = "";
    };
    api.on("open", ({ component, name, transition, props = {}, on = {} }) => {
      cProps.value = props;
      cListeners.value = on;
      activeModal.value = component;
      activeName.value = name;
      if (transition) {
        modalTransition.value = transition;
      }
      open();
    });
    api.on("close", () => {
      close();
    });
    const overlayClick = () => {
      if (cProps.value._closeOnOverlay === false) return;
      close();
    };
    return {
      isOpen,
      open,
      close,
      cListeners,
      cProps,
      activeModal,
      modalTransition,
      overlayClick,
    };
  },
  components: {
    // svgClose,
  },
  computed: {
    modalClass() {
      return `modal-${this.activeName}`;
    },
  },
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  &-container {
    height: 100%;
  }
  &-content {
    z-index: 1001;
  }
}
.modal-fade-enter, .modal-fade-leave-to{
  opacity: 0;
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: .2s;
}
</style>