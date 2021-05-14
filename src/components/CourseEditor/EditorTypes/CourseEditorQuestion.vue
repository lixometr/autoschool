<template>
  <course-editor-item v-bind="$attrs" v-on="$listeners">
    <label class="input-wrap">
      <span class="input-wrap__title strong">Question </span>
      <textarea
        name=""
        class="form-control"
        :value="value.title"
        @input="onChangeValue('title', $event.target.value)"
      ></textarea>
    </label>
    <div class="input-wrap__title strong">{{ $t("editor.answerOptions") }}</div>
    <div class="row row--btns">
      <div class="col-auto">
        <div class="row">
          <div class="col-auto">
            <button class="btn btn-primary">{{ $t("yes") }}</button>
          </div>
          <div class="col-auto">
            <label class="form-check form-check--success">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
                @change="onChangeValue('is_correct', true)"
                :checked="value.is_correct"
              />
              <span class="form-check-label strong">{{ $t("true") }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="col-auto">
        <div class="row">
          <div class="col-auto">
            <button class="btn btn-danger">{{ $t("no") }}</button>
          </div>
          <div class="col-auto">
            <label class="form-check form-check--success">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
                @change="onChangeValue('is_correct', false)"
                :checked="!value.is_correct"
              />
              <span class="form-check-label strong">{{ $t("false") }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </course-editor-item>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";
import EditorTypesMixin from "./EditorTypesMixin";
export default defineComponent({
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { CourseEditorItem },
  mixins: [EditorTypesMixin],
  setup(props, { emit }) {
    return {};
  },
});
</script>

<style lang="scss">
</style>