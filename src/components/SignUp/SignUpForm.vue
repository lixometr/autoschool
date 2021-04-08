<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-12 opacity-50 text-secondary h6 strong">
        Personal information
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.lastName"
          :required="true"
          label="Last name"
          :errors="errors.lastName"
        />
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.firstName"
          :required="true"
          label="First name"
          :errors="errors.firstName"
        />
      </div>

      <div class="col-lg-6">
        <app-input
          v-model="values.middleName"
          :required="true"
          label="Middle name"
          :errors="errors.middleName"
        />
      </div>
      <div class="col-lg-6">
        <app-select
          v-model="values.country"
          :required="true"
          label="Country"
          :options="[{name: 'test', value: 'test'}]"
          :errors="errors.country"
        />
      </div>

      <div class="col-lg-6">
        <app-input
          v-model="values.email"
          label="E-mail Address1"
          :errors="errors.email"
          :required="true"
        />
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.validateEmail"
          label="Validate E-mail Address1"
          :errors="errors.validateEmail"
          :required="true"
        />
      </div>

      <div class="col-12 opacity-50 text-secondary h6 strong pt-1">
        Data for logging in to a personal account
      </div>

      <div class="col-lg-6">
        <app-input
          v-model="values.username"
          label="Username"
          :errors="errors.username"
          :required="true"
        />
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.password"
          label="Password"
          :errors="errors.password"
          :required="true"
          :type="isPassword ? 'password' : 'text'"
          :inputClass="{ 'form-control--sp-right': true }"
        >
          <template #footer>
            <div
              class="btn-toggle-type"
              :class="{ show: !isPassword }"
              @click="toggleType"
            >
              <Eye /></div></template
        ></app-input>
      </div>
    </div>
    <button class="btn-reg btn-primary mt-4" type="submit">Next</button>
  </form>
</template>

<script lang="ts">
import AppInput from "../common/AppInput.vue";
import { defineComponent, ref } from "@vue/composition-api";
import Eye from "@/components/icons/Eye.vue";
import useForm from "@/compositions/validators/useForm";
import * as yup from "yup";
import AppSelect from "../common/AppSelect.vue";
export default defineComponent({
  components: { Eye, AppInput, AppSelect },
  setup() {
    const isPassword = ref(false);
    const toggleType = () => {
      isPassword.value = !isPassword.value;
      // some code to filter users
    };
    const { values, errors, handleSubmit, serialize, isSubmit } = useForm({
      lastName: ["", yup.string().required()],
      firstName: ["", yup.string().required()],
      middleName: ["", yup.string().required()],
      country: ["", yup.string().required()],
      email: ["", yup.string().email().required()],
      validateEmail: ["", yup.string().email().required()],
      username: ["", yup.string().required()],
      password: ["", yup.string().required()],
    });
    const onSubmit = handleSubmit(async () => {
      console.log(serialize());
    });
    return { toggleType, isPassword, values, errors, onSubmit, isSubmit };
  },
});
</script>

<style scoped>
</style>