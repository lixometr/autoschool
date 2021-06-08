<template>
  <div class="pb-3">
    <div class="h6 strong">{{ title }}</div>
    <p class="pt-2">
      The Pre-Licensing Course Completion Certificate (MV-278) is given to you
      at the completion of the course. This certificate is needed to schedule a
      road test. A valid MV-278 and Learner’s Permit must be given to the Motor
      Vehicle License Examiner when you appear for the road test
    </p>
    <p class="strong text-danger">You answered incorrectly</p>
    <course-test-answer
      v-for="(answer, idx) in answers"
      :key="idx"
      :title="answer.value"
      :isValid="value === undefined ? undefined : value === answer.sub_id"
      @click="selectAnswer(answer.sub_id)"
    />
  </div>
</template>

<script lang="ts">
import { CourseEditorTestQuestionEntity } from "@/models/course-editor/course-editor-test.entity";
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseTestAnswer from "./CourseTestAnswer.vue";
export default defineComponent({
  components: { CourseTestAnswer },
  props: {
    item: {
      type: Object as () => CourseEditorTestQuestionEntity,
      default: () => ({}),
    },
    value: Number,
  },
  setup(props, { emit }) {
    const { item } = toRefs(props);
    const answers = computed(() => item.value.answers || []);
    const selectAnswer = (subId: number) => {
      emit("input", subId);
    };
    const title = computed(() => item.value.value);
    return { answers, selectAnswer, title };
  },
});
</script>

<style lang="scss" >
</style>