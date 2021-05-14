<template>
  <div>
    <CKEditor
      :editor="editor"
      :config="editorConfig"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default defineComponent({
  components: { CKEditor: CKEditor.component },
  data() {
    return {
      editor: ClassicEditor,
    };
  },
  setup() {
    return {};
  },
  computed: {
    editorConfig() {
      return {
        uploadUrl: '/test/upload'
      };
    },
  },
});
</script>

<style lang="scss" >
</style>