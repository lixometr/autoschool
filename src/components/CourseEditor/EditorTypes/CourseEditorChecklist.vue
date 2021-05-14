<template>
  <course-editor-item v-bind="$attrs" v-on="$listeners">
    <label class="input-wrap">
      <span class="input-wrap__title strong">{{ $t("editor.headline") }} </span>
      <input
        type="text"
        class="form-control"
        :value="value.title"
        @input="onChangeValue('title', $event.target.value)"
      />
    </label>

    <span class="input-wrap__title strong"
      >{{ $t("editor.answerOptions") }}
    </span>
    <div class="row" v-for="(question, idx) in questions" :key="idx">
      <div class="col">
        <div class="input-group input-group--q mb-4">
          <span class="input-group-text"> {{ idx + 1 }}</span>
          <div class="delete-q cursor-pointer" @click="removeTask(idx)">
            <Close />
          </div>
          <input
            type="text"
            placeholder="Write an answer choice"
            class="form-control"
            @input="onAnswerChangeTitle(idx, $event.target.value)"
            :value="question.value"
          />
        </div>
      </div>
      <div class="col-auto pt-3">
        <label class="form-check form-check--danger">
          <input
            class="form-check-input"
            type="radio"
            :checked="!question.is_correct"
            @change="onAnswerChange(idx, false)"
          />
          <span class="form-check-label strong">{{ $t("false") }}</span>
        </label>
      </div>
      <div class="col-auto pt-3">
        <label class="form-check form-check--success">
          <input
            class="form-check-input"
            type="radio"
            :checked="question.is_correct"
            @change="onAnswerChange(idx, true)"
          />
          <span class="form-check-label strong">{{ $t("true") }}</span>
        </label>
      </div>
    </div>

    <a href="#" class="strong" @click.prevent="addAnswer"
      >+ {{ $t("editor.addAnswer") }}</a
    >
  </course-editor-item>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";
import Close from "@/components/icons/Close.vue";
import EditorTypesMixin from "./EditorTypesMixin";
import { plainToClass } from "class-transformer";
import { CourseEditorChecklistQuestionEntity } from "@/models/course-editor/course-editor-checklist.entity";
export default defineComponent({
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { CourseEditorItem, Close },
  mixins: [EditorTypesMixin],
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const questions = computed(() => value.value.questions || []);
    const addAnswer = () => {
      const newQuestions = [
        ...questions.value,
        plainToClass(CourseEditorChecklistQuestionEntity, {
          is_correct: false,
          value: "",
        }),
      ];
      emit("input", {
        ...value.value,
        questions: newQuestions,
      });
    };
    const onAnswerChange = (idx: number, newValue: boolean) => {
      const newQuestions = [...questions.value];
      newQuestions[idx].is_correct = newValue;
      emit("input", {
        ...value.value,
        questions: newQuestions,
      });
    };
    const onAnswerChangeTitle = (idx: number, newValue: string) => {
      const newQuestions = [...questions.value];
      newQuestions[idx].value = newValue;
      emit("input", {
        ...value.value,
        questions: newQuestions,
      });
    };
    const removeTask = (idx: number) => {
      const newQuestions = [...questions.value];
      newQuestions.splice(idx, 1);
      emit("input", {
        ...value.value,
        questions: newQuestions,
      });
    };
    return {
      addAnswer,
      questions,
      onAnswerChange,
      onAnswerChangeTitle,
      removeTask,
    };
  },
});
</script>

<style lang="scss">
</style>