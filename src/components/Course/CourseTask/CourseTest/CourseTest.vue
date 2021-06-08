<template>
  <div>
    <div class="h4 strong text-primary mb-4">Control question</div>

    <course-test-question
      v-for="(question, idx) in questions"
      :key="idx"
      :item="question"
      :value="question[idx]"
      @input="onChangeQuestion($event, idx)"
    />

    <div class="pb-3 row align-items-center">
      <div class="col-auto">
        <button class="btn btn-md btn-primary px-4" @click.prevent="startAgain">
          Go again
        </button>
      </div>
      <div class="col-auto">
        Attempts left to try:
        <strong class="text-danger">{{ leftAttempts }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  CourseEditorTestContentEntity,
  CourseEditorTestEntity,
} from "@/models/course-editor/course-editor-test.entity";
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseTestQuestion from "./CourseTestQuestion.vue";
export default defineComponent({
  components: { CourseTestQuestion },
  props: {
    item: {
      type: Object as () => CourseEditorTestContentEntity,
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { item, value } = toRefs(props);
    const startAgain = () => {
      return;
    };
    const leftAttempts = computed(() => 3);

    const questions = computed(() => item.value.questions);
    const onChangeQuestion = (newValue: any, idx: number) => {
      const newValues = { ...value.value };
      newValues[idx] = newValue;
      emit("input", newValues);
    };
    return { startAgain, leftAttempts, onChangeQuestion, questions };
  },
});
</script>

<style lang="scss" >
</style>