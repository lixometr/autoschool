<template>
  <course-editor-item v-bind="$attrs" v-on="$listeners">
    <label class="input-wrap">
      <span class="input-wrap__title strong">Question </span>
      <textarea name="" class="form-control">
Rules for Persons with a Learner Permit</textarea
      >
    </label>
    <div class="input-wrap__title strong">Answer options</div>
    <div class="row row--btns">
      <div class="col-auto">
        <div class="row">
          <div class="col-auto">
            <button class="btn btn-primary">Yes</button>
          </div>
          <div class="col-auto">
            <label class="form-check form-check--success">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
              />
              <span class="form-check-label strong">True</span>
            </label>
          </div>
        </div>
      </div>

      <div class="col-auto">
        <div class="row">
          <div class="col-auto">
            <button class="btn btn-danger">No</button>
          </div>
          <div class="col-auto">
            <label class="form-check form-check--success">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
              />
              <span class="form-check-label strong">True</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </course-editor-item>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";
export default defineComponent({
  props: {},
  components: { CourseEditorItem },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
</style>