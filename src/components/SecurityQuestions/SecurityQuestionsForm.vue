<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="pb-3">
      <div class="h5 mb-3 strong">One line question title?</div>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Cake</span>
      </label>

      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Answer</span>
      </label>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Answer</span>
      </label>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Long answer in one line</span>
      </label>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Answer</span>
      </label>
    </div>
    <div class="pb-3">
      <div class="h5 mb-3 strong">One line question title?</div>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Cake</span>
      </label>

      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Answer</span>
      </label>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Answer</span>
      </label>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Long answer in one line</span>
      </label>
      <label class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        <span class="form-check-label">Answer</span>
      </label>
    </div>

    <div class="row">
      <div class="col-auto">
        <button class="btn-reg btn-primary mt-4">Save</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { errorHandler } from "@/helpers/error-handler";
import { defineComponent, ref } from "@vue/composition-api";
import { useApiGetSequrityQuestions } from "@/api/security-questions";
import { SecurityQuestionEntity } from "@/models/sequrity-question.entity";
export default defineComponent({
  setup() {
    const questions = ref([] as SecurityQuestionEntity[]);
    const fetchQuestions = async () => {
      const { exec, error, result } = useApiGetSequrityQuestions({
        toast: { error: errorHandler() },
      });
      await exec();
      if (error.value) return;
      questions.value = result.value;
    };
    fetchQuestions();
    const onSubmit = () => {
      return;
    };
    return { onSubmit };
  },
});
</script>

<style >
</style>