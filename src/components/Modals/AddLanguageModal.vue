<template>
  <div class="modal-content py-5">
    <button class="modal__close" @click="$emit('close')">
      <Close />
    </button>
    <form action="#" @submit.prevent="onSubmit">
      <div class="h5 strong mb-3">{{ $t("addLanguage.title") }}</div>
      <app-input
        :label="$t('inputs.language')"
        v-model="values.name"
        :errors="errors.name"
      />
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
            {{ $t("add") }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import AppInput from '../common/AppInput.vue'
import Close from "@/components/icons/Close.vue";
import useForm from "@/compositions/validators/useForm";
import { defineComponent } from "@vue/composition-api";
import * as yup from "yup";
import { CourseModule } from '@/store/modules/course';
export default defineComponent({
  components: { Close, AppInput },
  setup(props, { emit }) {
    const onSend = () => {
      emit("send");
      emit("close");
    };
    const { values, errors, handleSubmit } = useForm({
      name: ["", yup.string().required()],
    });
    const onSubmit = handleSubmit(async () => {
      console.log(values.name);
      CourseModule.addLanguage(values.name)
      onSend()
    });
    return { onSend, values, errors, onSubmit };
  },
});
</script>

<style lang="scss">
</style>