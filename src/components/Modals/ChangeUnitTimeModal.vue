<template>
  <div class="modal-content py-5">
    <button class="modal__close" @click="$emit('close')">
      <Close />
    </button>
    <form action="#" @submit.prevent="onSubmit">
      <div class="h5 strong mb-3">{{ $t("changeUnitTime.title") }}</div>
      <app-input
        :label="$t('changeUnitTime.timeForTasks')"
        v-model="values.time"
        :errors="errors.time"
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
            {{ $t("change") }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import AppInput from "../common/AppInput.vue";
import Close from "@/components/icons/Close.vue";
import useForm from "@/compositions/validators/useForm";
import { defineComponent, toRefs } from "@vue/composition-api";
import * as yup from "yup";
import { useApiUpdateUnitTime } from "@/api/course";
import { errorHandler } from "@/helpers/error-handler";
export default defineComponent({
  props: {
    // unit id
    id: Number,
  },
  components: { Close, AppInput },
  setup(props, { emit }) {
    const { id } = toRefs(props);
    const onSend = () => {
      emit("send");
      emit("close");
    };
    const { values, errors, handleSubmit } = useForm({
      time: ["", yup.number().required()],
    });
    const onSubmit = handleSubmit(async () => {
      const unitId = id.value;

      const { exec, error } = useApiUpdateUnitTime({
        toast: { error: errorHandler() },
      });
      await exec({ passingTime: values.time, id: unitId });
      if (error.value) return;
      onSend();
    });
    return { onSend, values, errors, onSubmit };
  },
});
</script>

<style lang="scss">
</style>