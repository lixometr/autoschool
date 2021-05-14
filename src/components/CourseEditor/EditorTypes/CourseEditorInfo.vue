<template>
  <course-editor-item :title="title" v-on="$listeners">
    <text-editor :value="value.value" @input="onChangeValue('value', $event)" />
  </course-editor-item>
</template>

<script lang="ts">
import TextEditor from "../../TextEditor/TextEditor.vue";
import { defineComponent, toRefs } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";
import EditorTypesMixin from "./EditorTypesMixin";

export default defineComponent({
  props: {
    title: String,
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [EditorTypesMixin],
  components: { CourseEditorItem, TextEditor },
  setup(props, { emit }) {
    return {};
  },
});
</script>

<style lang="scss">
</style>