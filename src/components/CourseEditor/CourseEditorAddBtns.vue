<template>
  <div class="add-var px-lg-5 px-3 border-bottom border-light">
    <div class="add-var__btn" @click.prevent="addPart(CourseEditorTypes.info)">
      Info
    </div>
    <div
      class="add-var__btn"
      @click.prevent="addPart(CourseEditorTypes.question)"
    >
      Question
    </div>
    <div
      class="add-var__btn"
      @click.prevent="addPart(CourseEditorTypes.checklist)"
    >
      Checklist
    </div>
    <div
      class="add-var__btn"
      @click.prevent="addPart(CourseEditorTypes.crosscheck)"
    >
      Croscheck
    </div>
    <div
      class="add-var__btn"
      @click.prevent="addPart(CourseEditorTypes.checkbox)"
    >
      Checkbox
    </div>
    <div class="add-var__btn" @click.prevent="addPart(CourseEditorTypes.test)">
      Test
    </div>
  </div>
</template>

<script lang="ts">
import { CourseEditorTypes } from "@/types/constants";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup(props, { emit }) {
    const addPart = (type: CourseEditorTypes) => {
      emit("add", type);
    };
    return { CourseEditorTypes, addPart };
  },
});
</script>

<style scoped>
</style>