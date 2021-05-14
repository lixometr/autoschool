<template>
  <div class="pt-4 pb-2 px-lg-5 px-3 border-bottom border-light">
    <label class="input-wrap">
      <span class="input-wrap__title">{{ $t("editor.namePartOfUnit") }}</span>
      <input
        type="text"
        class="form-control"
        :value="value.value"
        @input="onChange($event.target.value)"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { CourseEditorLangValueEntity } from "@/models/course-editor/course-editor-lang-value.entity";
import { CourseModule } from "@/store/modules/course";
import { defineComponent, toRefs } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: {
      type: Object,
      default: () => ({}) as CourseEditorLangValueEntity,
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const onChange = (newValue: string) => {
      emit("input", { ...value.value, value: newValue });
    };
    return { onChange };
  },
});
</script>

<style scoped>
</style>