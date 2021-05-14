<template>
  <course-editor-item
    contentClass="bg-light-bll border-bottom border-white"
    :title="title"
    v-on="$listeners"
  >
    <course-editor-test-item
      v-for="(question, idx) in questions"
      :key="idx"
      :value="question"
      @input="onChangeQuestion(idx, $event)"
    />

    <div>
      <a href="#" class="strong" @click.prevent="addQuestion">+ {{$t('editor.addQuestion')}}</a>
    </div>
  </course-editor-item>
</template>

<script lang="ts">
import CourseEditorTestItem from './CourseEditorTestItem.vue'
import { CourseEditorTestQuestionEntity } from "@/models/course-editor/course-editor-test.entity";
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseEditorItem from "../../CourseEditorItem.vue";

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
    return { onChangeQuestion, addQuestion, questions };
  },
});
</script>

<style lang="scss">
</style>