<template>
  <course-editor-item :title="title" v-on="$listeners">
    <label class="input-wrap">
      <span class="input-wrap__title strong">Headline </span>
      <input
        type="text"
        placeholder="Write an answer choice"
        class="form-control"
      />
    </label>
    <label class="input-wrap">
      <span class="input-wrap__title strong">Overview </span>
      <textarea name="" class="form-control">
Rules for Persons with a Learner Permit</textarea
      >
    </label>

    <span class="input-wrap__title strong">Answer options </span>
    <div class="row">
      <div class="col">
        <div class="input-group input-group--q mb-4">
          <span class="input-group-text"> 1</span>
          <div class="delete-q">
            <Close />
          </div>
          <input
            type="text"
            placeholder="Write an answer choice"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-auto pt-3">
        <label class="form-check form-check--success">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault3"
          />
          <span class="form-check-label strong">True</span>
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-group input-group--q mb-4">
          <span class="input-group-text"> 2</span>
          <div class="delete-q">
            <Close />
          </div>
          <input
            type="text"
            placeholder="Write an answer choice"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-auto pt-3">
        <label class="form-check form-check--success">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault4"
          />
          <span class="form-check-label strong">True</span>
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-group input-group--q mb-4">
          <span class="input-group-text"> 3</span>
          <div class="delete-q">
            <Close />
          </div>
          <input
            type="text"
            placeholder="Write an answer choice"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-auto pt-3">
        <label class="form-check form-check--success">
          <input
            class="form-check-input"
            type="checkbox"
            name="flexRadioDefault4"
          />
          <span class="form-check-label strong">True</span>
        </label>
      </div>
    </div>
    <div>
      <a href="#" class="strong">+ Add answer</a>
    </div>
  </course-editor-item>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CourseEditorItem from "../CourseEditorItem.vue";
import Close from "@/components/icons/Close.vue";
export default defineComponent({
  props: {
    title: String,
  },
  components: { CourseEditorItem, Close },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
</style>