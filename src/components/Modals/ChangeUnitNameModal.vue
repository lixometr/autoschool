<template>
  <div class="modal-content py-5">
    <button class="modal__close" @click="$emit('close')">
      <Close />
    </button>
    <form action="#" @submit.prevent="onSubmit">
      <div class="h5 strong mb-3">{{ $t("changeUnitName.title") }}</div>
      <app-input
        :label="$t('editor.unitName')"
        v-model="values.name"
        :errors="errors.name"
      />
      <div class="row">
        <div class="col-6">
          <button
            @click="$emit('close')"
            class="btn btn-md btn-outline-primary btn-bg w-100"
            type="button"
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
import { useApiUpdateUnitName } from "@/api/course";
import { errorHandler } from "@/helpers/error-handler";
import { CourseEditorUnitEntity } from "@/models/course-editor/course-editor-unit.entity";
export default defineComponent({
  components: { Close, AppInput },
  props: {
    id: Number,
    unit: {
      type: Object as () => CourseEditorUnitEntity,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { id, unit } = toRefs(props);
    const onSend = () => {
      emit("send");
      emit("close");
    };
    const { values, errors, handleSubmit } = useForm({
      name: [unit.value.langName.value, yup.string().required()],
    });
    const onSubmit = handleSubmit(async () => {
      const { exec, error, result } = useApiUpdateUnitName({
        toast: { error: errorHandler() },
      });
      unit.value.setLangName({ ...unit.value.langName, value: values.name });
      await exec({ id: id.value, name: unit.value.name });
      if (error.value) return;
      onSend();
    });
    return { onSend, values, errors, onSubmit };
  },
});
</script>

<style lang="scss">
</style>