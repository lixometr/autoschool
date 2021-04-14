<template>
  <div class="modal-content">
    <button class="modal__close" @click="$emit('close')">
      <Close />
    </button>
    <form action="#" @submit.prevent="onSubmit">
      <div class="h6 strong mb-2">{{ $t("askQuestion") }}</div>

      <app-text-area v-model="values.text" :errors="errors.text" :label="$t('question')" rows="3" />

      <div class="row">
        <div class="col-6">
          <button
            @click="$emit('close')"
            class="btn btn-md btn-outline-primary btn-bg w-100"
          >
            {{ $t("cancel") }}
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-md btn-primary w-100" type="submit">
            {{ $t("send") }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Close from "@/components/icons/Close.vue";
import useForm from "@/compositions/validators/useForm";
import AppTextArea from "../common/AppTextArea.vue";
import * as yup from "yup";
import { useApiSendFeedback } from "@/api/feedback";
import { errorHandler } from "@/helpers/error-handler";
import useToast from "@/compositions/useToast";
import useTranslate from "@/compositions/useTranslate";
export default defineComponent({
  components: { Close, AppTextArea },
  setup(props, { emit }) {
    const { handleSubmit, serialize, values, errors } = useForm({
      text: ["", yup.string().required()],
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      const { exec, error } = useApiSendFeedback({
        toast: { error: errorHandler() },
      });
      await exec(toSend);
      if (error.value) return;
      const { success } = useToast();
      success({ message: useTranslate().i18n.t("messageSent") as string });
      emit("close");
    });
    return { onSubmit, values, errors };
  },
});
</script>

<style >
</style>