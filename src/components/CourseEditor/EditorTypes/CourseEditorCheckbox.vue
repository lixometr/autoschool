<template>
  <course-editor-item :title="title" v-on="$listeners">
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
    <div class="row" v-for="(item, idx) in options" :key="idx">
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
            :value="item.value"
            @input="onAnswerChangeTitle(idx, $event.target.value)"
          />
        </div>
      </div>

      <div class="col-auto pt-3">
        <label class="form-check form-check--success">
          <input
            class="form-check-input"
            type="checkbox"
            :checked="item.is_correct"
            @input="onAnswerChange(idx, $event.target.checked)"
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
  </course-editor-item>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";
import Close from "@/components/icons/Close.vue";
import {
  CourseEditorCheckboxContentEntity,
  CourseEditorCheckboxOptionEntity,
} from "@/models/course-editor/course-editor-checkbox.entity";
import EditorTypesMixin from "./EditorTypesMixin";
import { plainToClass } from "class-transformer";
export default defineComponent({
  props: {
    title: String,
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [EditorTypesMixin],
  components: { CourseEditorItem, Close },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const options = computed(() => value.value.options || []);
    const addAnswer = () => {
      const newOptions = [
        ...options.value,
        plainToClass(CourseEditorCheckboxOptionEntity, {
          is_correct: false,
          value: "",
        }),
      ];
      emit("input", {
        ...value.value,
        options: newOptions,
      });
    };
    const onAnswerChange = (idx: number, newValue: boolean) => {
      const newOptions = [...options.value];
      newOptions[idx].is_correct = newValue;
      emit("input", {
        ...value.value,
        options: newOptions,
      });
    };
    const onAnswerChangeTitle = (idx: number, newValue: string) => {
      const newOptions = [...options.value];
      newOptions[idx].value = newValue;
      emit("input", {
        ...value.value,
        options: newOptions,
      });
    };
    const removeAnswer = (idx: number) => {
      const newOptions = [...options.value];
      newOptions.splice(idx, 1);
      emit("input", {
        ...value.value,
        options: newOptions,
      });
    };
    return {
      options,
      addAnswer,
      onAnswerChange,
      onAnswerChangeTitle,
      removeAnswer,
    };
  },
});
</script>

<style lang="scss">
</style>