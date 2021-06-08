<template>
  <div class="course-taks-checklist">
    <div class="h6 strong">{{ item.title }}</div>
    <course-task-checklist-question
      v-for="(question, idx) in questions"
      :key="idx"
      :item="question"
      :value="value[idx]"
      @input="onChangeQuestion($event, idx)"
    >
    </course-task-checklist-question>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseTaskChecklistQuestion from "./CourseTaskChecklistQuestion.vue";

export default defineComponent({
  components: { CourseTaskChecklistQuestion },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { value, item } = toRefs(props);
    const validate = () => true;
    const choose = (variant: boolean) => {
      emit("input", variant);
    };
    const questions = computed(() => item.value.questions || []);
    const onChangeQuestion = (newVal: boolean, idx: number) => {
      const newValues = { ...value.value };
      newValues[idx] = newVal;
      emit("input", newValues);
    };
    return { validate, choose, questions, onChangeQuestion };
  },
});
</script>

<style >
</style>