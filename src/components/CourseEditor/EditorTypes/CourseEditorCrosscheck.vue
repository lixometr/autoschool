<template>
  <course-editor-item :title="title" v-on="$listeners">
    <span class="input-wrap__title strong pb-2"
      >All questions and answers in the unit will be placed in random order
    </span>
    <div class="row">
      <label class="input-wrap col-6">
        <span class="input-wrap__title strong">Question 1 </span>
        <input
          type="text"
          placeholder="Write an answer choice"
          class="form-control"
        />
      </label>
      <label class="input-wrap col-6">
        <span class="input-wrap__title strong">Question2 </span>
        <input
          type="text"
          placeholder="Write an answer choice"
          class="form-control"
        />
      </label>
      <label class="input-wrap col-6">
        <span class="input-wrap__title strong">Question 3</span>
        <input
          type="text"
          placeholder="Write an answer choice"
          class="form-control"
        />
      </label>
      <label class="input-wrap col-6">
        <span class="input-wrap__title strong">Question 4</span>
        <input
          type="text"
          placeholder="Write an answer choice"
          class="form-control"
        />
      </label>
    </div>
  </course-editor-item>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";

export default defineComponent({
  props: {
    title: String,
  },
  components: { CourseEditorItem },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
</style>