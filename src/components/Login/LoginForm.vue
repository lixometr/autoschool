<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="h6 strong mb-3">Login</div>
    <app-input label="E-mail" v-model="values.login" :errors="errors.login" />
    <app-input
    type="password"
      label="Password"
      v-model="values.password"
      :errors="errors.password"
    />

    <div class="row justify-content-center pt-2">
      <div class="col-12">
        <button class="btn btn-md btn-primary w-100" type="submit">
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import useForm from "@/compositions/validators/useForm";
import { UserModule } from "@/store/modules/user";
import { defineComponent, ref } from "@vue/composition-api";
import * as yup from "yup";
import AppInput from "../common/AppInput.vue";
export default defineComponent({
  components: { AppInput },
  setup(props, { emit }) {
    /**
     *
     * Login: admin
     * Pass: 12345678
     */
    const { values, errors, serialize, handleSubmit } = useForm(
      {
        // не email, т.к. в бд бекендщик только такого юзера занес
        login: ["", yup.string().required()],
        password: ["", yup.string().required()],
      },
      {}
    );
    const onSubmit = handleSubmit(async () => {
      const done = await UserModule.login(serialize());
      if (!done) return;
      emit("send");
      return;
    });
    return {
      values,
      errors,
      onSubmit,
    };
  },
});
</script>

<style scoped>
</style>