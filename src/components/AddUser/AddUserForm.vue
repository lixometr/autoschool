<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="h6 strong mb-2">{{ $t("addUser.title") }}</div>
    <app-input :label="$t('inputs.firstName')" />

    <app-input :label="$t('inputs.lastName')" />

    <div class="row g-3">
      <span class="input-wrap__title">Birth day</span>
      <label class="input-wrap col-6">
        <input type="text" class="form-control" />
      </label>
      <label class="input-wrap col">
        <input type="text" class="form-control" placeholder="Day" />
      </label>
      <label class="input-wrap col">
        <input type="text" class="form-control" placeholder="Year" />
      </label>
    </div>
    <label class="input-wrap">
      <span class="input-wrap__title">Promocode</span>
      <input type="text" class="form-control" />
    </label>
    <label class="input-wrap">
      <span class="input-wrap__title">E-mail</span>
      <input type="email" class="form-control" />
    </label>
    <label class="input-wrap">
      <span class="input-wrap__title">ID permit</span>
      <input type="text" class="form-control" />
    </label>
    <label class="input-wrap col">
      <span class="input-wrap__title">Number of document</span>
      <input type="text" class="form-control" />
    </label>

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
        <button class="btn btn-md btn-primary w-100">{{ $t("add") }}</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import useForm from "@/compositions/validators/useForm";
import { defineComponent } from "@vue/composition-api";
import * as yup from "yup";
export default defineComponent({
  setup() {
    const { handleSubmit, values, errors, serialize } = useForm({
      firstName: ["", yup.string().required()],
      lastName: ["", yup.string().required()],
      birthday: ["", yup.string().required()],
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
});
</script>

<style >
</style>