<template>
  <course-editor-item
    contentClass=" bg-light-bll"
    :title="title"
    v-on="$listeners"
  >
    <div>
      <course-editor-test-item
        class="border-bottom border-white pb-4 pt-4"
        v-for="(question, idx) in questions"
        :key="idx"
        :value="question"
        :idx="idx + 1"
        @up="questionUp(idx)"
        @down="questionDown(idx)"
        @remove="removeQuestion(idx)"
        @input="onChangeQuestion(idx, $event)"
      />
    </div>
    <button class="btn btn-white w-100" @click.prevent="addQuestion">
      + {{ $t("editor.addQuestion") }}
    </button>
  </course-editor-item>
</template>

<script lang="ts">
import CourseEditorTestItem from "./CourseEditorTestItem.vue";
import { CourseEditorTestQuestionEntity } from "@/models/course-editor/course-editor-test.entity";
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseEditorItem from "../../CourseEditorItem.vue";
import arrayMove from "@/compositions/array-move";

export default defineComponent({
  props: {
    title: String,
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { CourseEditorItem, CourseEditorTestItem },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const questions = computed(
      () => (value.value.questions as CourseEditorTestQuestionEntity[]) || []
    );
    const onChangeQuestion = (idx: number, newValue) => {
      const newQuestions = [...questions.value];
      newQuestions[idx] = newValue;
      emit("input", {
        ...value.value,
        questions: newQuestions,
      });
    };
    const addQuestion = () => {
      const newQuestions = [...questions.value];
      newQuestions.push({
        answers: [],
        value: "",
        correct: undefined,
      });
      emit("input", {
        ...value.value,
        questions: newQuestions,
      });
    };
    const removeQuestion = (idx: number) => {
      const newQuestions = [...questions.value];
      newQuestions.splice(idx, 1);
      emit("input", {
        ...value.value,
        questions: newQuestions,
      });
    };
    const questionUp = (idx: number) => {
      if (idx <= 0) return;
      const newItems = arrayMove(questions.value, idx, idx - 1);
      emit("input", { ...value.value, questions: newItems });
    };
    const questionDown = (idx: number) => {
      if (idx >= questions.value.length) return;
      const newItems = arrayMove(questions.value, idx, idx + 1);
      emit("input", { ...value.value, questions: newItems });
    };
    return {
      onChangeQuestion,
      addQuestion,
      questions,
      removeQuestion,
      questionUp,
      questionDown,
    };
  },
});
</script>

<style lang="scss">
</style>