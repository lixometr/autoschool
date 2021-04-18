<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="h6 strong mb-3">{{ $t("addPromocode.title") }}</div>

    <label class="input-wrap">
      <span class="input-wrap__title">Name </span>
      <input type="text" class="form-control" />
    </label>

    <label class="input-wrap">
      <span class="input-wrap__title">Last Name </span>
      <input type="text" class="form-control" />
    </label>

    <label class="input-wrap">
      <span class="input-wrap__title">Promocode</span>
      <input type="text" class="form-control" value="CZ-BASE" />
    </label>
    <div class="row">
      <div class="col-6">
        <label class="input-wrap">
          <span class="input-wrap__title">Discount</span>
          <input type="text" class="form-control" value="5" />
          <strong class="persent text-primary">$</strong>
        </label>
      </div>
      <label class="input-wrap col-6">
        <span class="input-wrap__title">Date from</span>
        <input type="text" class="form-control" placeholder="MM.DD.YYYY" />
      </label>
    </div>

    <div class="row justify-content-center pt-2">
      <div class="col-6">
        <button class="btn btn-md btn-outline-primary btn-bg w-100">
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

export default defineComponent({
  setup() {
    const { values, errors, handleSubmit, serialize } = useForm({});
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