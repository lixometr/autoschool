<template>
  <div>
    <course-task-element
      v-for="(task, i) in items"
      :key="i"
      :item="task.langContent"
      :type="task.type"
      ref="tasks"
      :value="value[task.id]"
      @input="onChangeTask($event, task.id)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "@vue/composition-api";
import CourseTaskElement from "./CourseTask/CourseTaskElement.vue";

export default defineComponent({
  components: { CourseTaskElement },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const tasks = ref([]);
    const validate = () => {
      return !tasks.value.map((task) => task.validate()).includes(false);
    };
    const onChangeTask = (newValue: any, taskId: number) => {
      const newValues = { ...value.value };
      newValues[taskId] = newValue;
      emit("input", newValues);
    };
    return { tasks, validate, onChangeTask};
  },
});
</script>

<style >
</style>