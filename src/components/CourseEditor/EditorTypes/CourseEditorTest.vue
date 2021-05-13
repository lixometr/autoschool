<template>
  <course-editor-item :title="title" v-on="$listeners">
    <div class="row">
      <div class="col">
        <span class="input-wrap__title strong">Question #1 </span>
      </div>
      <div class="col-auto">
        <div class="input-group btn-group">
          <button class="btn btn-light-bl btn-move">
            <ArrowUp />
          </button>
          <button class="btn btn-light-bl btn-move">
            <ArrowDown />
          </button>
          <button class="btn btn-light-bl btn-move">
            <Close />
          </button>
        </div>
      </div>
    </div>
    <label class="input-wrap">
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
            type="radio"
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
            type="radio"
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
import ArrowUp from "@/components/icons/ArrowUp.vue";
import ArrowDown from "@/components/icons/ArrowDown.vue";
export default defineComponent({
  props: {
    title: String,
  },
  components: { CourseEditorItem, Close, ArrowUp, ArrowDown },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
</style>