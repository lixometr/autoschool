<template>
  <div class="pb-3">
    <component
      :is="currentComponent"
      v-on="$listeners"
      v-bind="$attrs"
      ref="el"
    />
  </div>
</template>

<script lang="ts">
import useTranslate from "@/compositions/useTranslate";
import { CourseEditorTypes } from "@/types/constants";
import { computed, defineComponent, ref, toRef, toRefs } from "@vue/composition-api";
import CourseTaskCheckbox from "./CourseTaskCheckbox.vue";
import CourseTaskChecklist from "./CourseTaskChecklist/CourseTaskChecklist.vue";
import CourseTaskCrosscheck from "./CourseTaskCrosscheck.vue";
import CourseTaskInfo from "./CourseTaskInfo.vue";
import CourseTaskQuestion from "./CourseTaskQuestion.vue";

export default defineComponent({
  components: {  },
  props: {
    type: String,
  },
  setup(props) {
    const { type } = toRefs(props);
    const components = {
      [CourseEditorTypes.info]: CourseTaskInfo,
      [CourseEditorTypes.question]: CourseTaskQuestion,
      [CourseEditorTypes.checklist]: CourseTaskChecklist,
      [CourseEditorTypes.checkbox]: CourseTaskCheckbox,
      // [CourseEditorTypes.test]: CourseEditorTest,
      [CourseEditorTypes.crosscheck]: CourseTaskCrosscheck,
    };
    const currentComponent = computed(() => {
      return components[type.value];
    });
    const el = ref(null)
    const validate = () => {
      return el.value?.validate()
    }
    return { CourseEditorTypes, currentComponent, validate, el };
  },
});
</script>

<style lang="scss">
</style>