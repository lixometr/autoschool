<template>
  <div>
    <div class="row">
      <div class="col">
        <span class="input-wrap__title strong">Question #1 </span>
      </div>
      <div class="col-auto">
        <div class="input-group btn-group">
          <button class="btn btn-light-bl btn-move">
            <ArrowUp />
          </button>
          <button class="btn btn-light-bl btn-move">
            <ArrowDown />
          </button>
          <button class="btn btn-light-bl btn-move">
            <Close />
          </button>
        </div>
      </div>
    </div>
    <label class="input-wrap">
      <textarea
        name=""
        class="form-control"
        :value="value.value"
        @input="onChangeQuestionTitle($event.target.value)"
      ></textarea>
    </label>

    <span class="input-wrap__title strong"
      >{{ $t("editor.answerOptions") }}
    </span>
    <div class="row" v-for="(answer, idx) in answers" :key="idx">
      <div class="col">
        <div class="input-group input-group--q mb-4">
          <span class="input-group-text"> {{ idx + 1 }}</span>
          <div class="delete-q cursor-pointer" @click="removeAnswer(idx)">
            <Close />
          </div>
          <input
            type="text"
            placeholder="Write an answer choice"
            class="form-control"
            :value="answer.value"
            @input="onChangeAnswer(idx, $event.target.value)"
          />
        </div>
      </div>

      <div class="col-auto pt-3">
        <label class="form-check form-check--success">
          <input
            class="form-check-input"
            type="radio"
            :checked="value.correct === answer.sub_id"
            @input="onChangeCorrect(answer.sub_id)"
          />
          <span class="form-check-label strong">{{ $t("true") }}</span>
        </label>
      </div>
    </div>
    <div>
      <a href="#" class="strong" @click.prevent="addAnswer"
        >+ {{ $t("editor.addAnswer") }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import Close from "@/components/icons/Close.vue";
import ArrowUp from "@/components/icons/ArrowUp.vue";
import ArrowDown from "@/components/icons/ArrowDown.vue";
import { CourseEditorTestAnswerEntity } from "@/models/course-editor/course-editor-test.entity";
export default defineComponent({
  components: { Close, ArrowUp, ArrowDown },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const answers = computed(
      () => (value.value.answers as CourseEditorTestAnswerEntity[]) || []
    );
    const onChangeAnswer = (idx: number, newValue: string) => {
      const newAnswers = [...answers.value];
      newAnswers[idx].value = newValue;
      emit("input", {
        ...value.value,
        answers: newAnswers,
      });
    };
    const removeAnswer = (idx: number) => {
      const newAnswers = [...answers.value];
      newAnswers.splice(idx, 1)
      emit("input", {
        ...value.value,
        answers: newAnswers,
      });
    };
    const addAnswer = () => {
      const newAnswers = [...answers.value];
      newAnswers.push({
        sub_id: Date.now(),
        value: "",
      });
      emit("input", {
        ...value.value,
        answers: newAnswers,
      });
    };
    const onChangeCorrect = (id: number) => {
      emit("input", {
        ...value.value,
        correct: id,
      });
    };
    const onChangeQuestionTitle = (newTitle: string) => {
      emit("input", {
        ...value.value,
        value: newTitle,
      });
    };
    return {
      onChangeQuestionTitle,
      onChangeAnswer,
      answers,
      removeAnswer,
      onChangeCorrect,
      addAnswer,
    };
  },
});
</script>

<style lang="scss" >
</style>