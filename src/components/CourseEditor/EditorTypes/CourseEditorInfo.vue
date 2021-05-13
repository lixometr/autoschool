<template>
  <course-editor-item :title="title" v-on="$listeners">
    <label class="input-wrap">
      <textarea name="" class="form-control">developer add plugin</textarea>
    </label>
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