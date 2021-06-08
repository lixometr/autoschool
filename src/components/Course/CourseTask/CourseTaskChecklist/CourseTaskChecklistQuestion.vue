<template>
  <div class="h6">
    {{ item.value }}
    <div class="input-wrap d-lg-inline-block">
      <select
        class="form-select form-select--q"
        v-model="selectModel"
        placeholder="sad"
        :class="{
          'border-success': isCorrect,
          'border-danger': isCorrect === false,
        }"
      >
        <option :value="undefined" disabled selected>{{$t('select')}}</option>
        <option :value="true">{{ $t("true") }}</option>
        <option :value="false">{{ $t("false") }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: Boolean,
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { value, item } = toRefs(props);
    const isCorrect = computed(() => {
      if (value.value === undefined) return;
      return item.value.is_correct === value.value;
    });
    const selectModel = computed({
      get() {
        return value.value;
      },
      set(val: any) {
        emit("input", val);
      },
    });
    return { isCorrect, selectModel };
  },
});
</script>

<style >
</style>