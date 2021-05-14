<template>
  <course-editor-item :title="title" v-on="$listeners">
    <span class="input-wrap__title strong pb-2"
      >{{ $t("editor.checklistCaption") }}
    </span>
    <div>
      <div class="row">
        <div class="col-6">
          <label class="input-wrap" v-for="(item, idx) in firstPart" :key="idx">
            <span class="input-wrap__title strong"
              >{{ $t("question") }} {{ idx + 1 }}
            </span>
            <input
              type="text"
              placeholder="Write an answer choice"
              class="form-control"
              :value="item.value"
              @input="onChangePart(idx, $event.target.value, 1)"
            />
          </label>
        </div>
        <div class="col-6">
          <label
            class="input-wrap"
            v-for="(item, idx) in secondPart"
            :key="idx"
          >
            <span class="input-wrap__title strong"
              >{{ $t("answer") }} {{ idx + 1 }}
            </span>
            <input
              type="text"
              placeholder="Write an answer choice"
              class="form-control"
              :value="item.value"
              @input="onChangePart(idx, $event.target.value, 2)"
            />
          </label>
        </div>
      </div>
    </div>
    <a href="#" class="strong" @click.prevent="addAnswer"
      >+ {{ $t("editor.addAnswer") }}</a
    >
  </course-editor-item>
</template>

<script lang="ts">
import {
  CourseEditorCrosscheckFirstPartEntity,
  CourseEditorCrosscheckSecondPartEntity,
} from "@/models/course-editor/course-editor-crosscheck.entity";
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";

export default defineComponent({
  props: {
    title: String,
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { CourseEditorItem },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const firstPart = computed(
      () =>
        (value.value.first_part as CourseEditorCrosscheckFirstPartEntity[]) ||
        []
    );
    const secondPart = computed(
      () =>
        (value.value.second_part as CourseEditorCrosscheckSecondPartEntity[]) ||
        []
    );

    const addAnswer = () => {
      const firstPartId = Date.now();
      const secondPartId = Date.now();
      const newFirstPart = [
        ...firstPart.value,
        { sub_id: firstPartId, value: "", correct: secondPartId },
      ];
      const newSecondPart = [
        ...secondPart.value,
        { sub_id: secondPartId, value: "", correct: firstPartId },
      ];
      emit("input", {
        ...value.value,
        first_part: newFirstPart,
        second_part: newSecondPart,
      });
    };
    const onChangePart = (idx: number, newValue: string, type: number) => {
      if (type === 1) {
        const newFirstPart = [...firstPart.value];
        newFirstPart[idx].value = newValue;
        emit("input", {
          ...value.value,
          first_part: newFirstPart,
        });
      } else {
        const newSecondPart = [...secondPart.value];
        newSecondPart[idx].value = newValue;
        emit("input", {
          ...value.value,
          second_part: newSecondPart,
        });
      }
    };
    return { firstPart, secondPart, addAnswer, onChangePart };
  },
});
</script>

<style lang="scss">
</style>