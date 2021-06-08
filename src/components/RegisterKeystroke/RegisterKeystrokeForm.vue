<template>
  <form action="#" @submit.prevent="onSubmit">
    <app-input ref="input"/>
  </form>
</template>

<script>
import useForm from "@/compositions/validators/useForm";
import * as yup from "yup";
import useTypingDna from "@/compositions/useTypingDna";
import { onMounted, ref } from "@vue/composition-api";
export default {
  setup() {
    const { handleSubmit, values, errors } = useForm([
      "",
      yup.string().required(),
    ]);
    const input = ref(null);
    const { init, addTarget } = useTypingDna({
      text: "",
    });
    onMounted(() => {
      console.log(input.value.el)
      addTarget(input.value.el);
      init();
    });
    const onSubmit = handleSubmit(async () => {
      return;
    });

    return { onSubmit, input };
  },
};
</script>

<style lang="scss" >
</style>