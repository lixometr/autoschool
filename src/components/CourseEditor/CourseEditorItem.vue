<template>
  <div class="pb-4 border-bottom border-primary">
    <div class="control-line px-lg-5 px-3">
      <div class="row">
        <div class="col h5 mb-0 strong">{{ title }}</div>
        <div class="col-auto">
          <div class="control-line__btn" @click="putUp">
            <ArrowUp />
            {{ $t("up") }}
          </div>
        </div>
        <div class="col-auto">
          <div class="control-line__btn" @click="putDown">
            <ArrowDown />
            {{ $t("down") }}
          </div>
        </div>
        <div class="col-auto" @click="onDelete">
          <div class="control-line__btn">
            <Close />
            {{ $t("delete") }}
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 px-lg-5 px-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ArrowUp from "@/components/icons/ArrowUp.vue";
import ArrowDown from "@/components/icons/ArrowDown.vue";
import Close from "@/components/icons/Close.vue";

export default defineComponent({
  components: { ArrowUp, ArrowDown, Close },
  props: {
    title: String,
  },
  setup(props, { emit }) {
    const putUp = () => {
      emit("up");
      return;
    };
    const putDown = () => {
      emit("down");
      return;
    };
    const onDelete = () => {
      emit("delete");
      return;
    };
    return {
      putUp,
      putDown,
      onDelete,
    };
  },
});
</script>

<style lang="scss">
</style>