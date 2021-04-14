<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-12 opacity-50 text-secondary h6 strong">
        {{ $t("signup.personalInformation") }}
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.lastName"
          :required="true"
          :label="$t('inputs.lastName')"
          :errors="errors.lastName"
        />
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.firstName"
          :required="true"
          :label="$t('inputs.firstName')"
          :errors="errors.firstName"
        />
      </div>

      <div class="col-lg-6">
        <app-input
          v-model="values.middleName"
          :required="true"
          :label="$t('inputs.middleName')"
          :errors="errors.middleName"
        />
      </div>
      <div class="col-lg-6">
        <country-select
          v-model="values.countryId"
          :required="true"
          :label="$t('inputs.country')"
          :errors="errors.countryId"
        />
      </div>

      <div class="col-lg-6">
        <app-input
          v-model="values.email"
          :label="$t('inputs.email')"
          :errors="errors.email"
          :required="true"
        />
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.validateEmail"
          :label="$t('inputs.emailRepeat')"
          :errors="errors.validateEmail"
          :required="true"
        />
      </div>

      <div class="col-12 opacity-50 text-secondary h6 strong pt-1">
        {{ $t("signup.dataPersonalAccaount") }}
      </div>

      <div class="col-lg-6">
        <app-input
          v-model="values.username"
          :label="$t('inputs.username')"
          :errors="errors.username"
          :required="true"
        />
      </div>
      <div class="col-lg-6">
        <app-input
          v-model="values.password"
          :label="$t('inputs.password')"
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
    <button class="btn-reg btn-primary mt-4" type="submit">
      {{ $t("signup.submit") }}
    </button>
  </form>
</template>

<script lang="ts">
import CountrySelect from "../common/CountrySelect.vue";
import AppInput from "../common/AppInput.vue";
import { defineComponent, ref } from "@vue/composition-api";
import Eye from "@/components/icons/Eye.vue";
import useForm from "@/compositions/validators/useForm";
import * as yup from "yup";
// import AppSelect from "../common/AppSelect.vue";
import { useApiSignup } from "@/api/auth";
import { errorHandler } from "@/helpers/error-handler";
import useTranslate from "@/compositions/useTranslate";
import { SignUpDto } from "@/dto/signup.dto";
import { UserModule } from "@/store/modules/user";
import useRouter from "@/compositions/useRouter";
export default defineComponent({
  components: { Eye, AppInput, CountrySelect },
  setup() {
    const isPassword = ref(true);
    const router = useRouter();
    const toggleType = () => {
      isPassword.value = !isPassword.value;
      // some code to filter users
    };
    const { values, errors, handleSubmit, serialize, isSubmit } = useForm({
      lastName: ["", yup.string().required()],
      firstName: ["", yup.string().required()],
      middleName: ["", yup.string().required()],
      countryId: ["", yup.number().required()],
      email: ["", yup.string().email().required()],
      validateEmail: [
        "",
        yup
          .string()
          .email()
          .required()
          .test(
            "",
            useTranslate().i18n.t("validations.sameEmail"),
            (value, context) => {
              return context.parent.email === value;
            }
          ),
      ],
      username: ["", yup.string().required()],
      password: ["", yup.string().required()],
    });
    const onSubmit = handleSubmit(async () => {
      const toSend: SignUpDto = serialize();
      const { exec, error, result } = useApiSignup({
        toast: { error: errorHandler() },
      });
      await exec(toSend);
      if (error.value) return;
      UserModule.setTokenWithCookie({ token: result.value.access_token });
      await UserModule.fetchUser();
      router.push({ name: "Dashboard" });
    });
    return { toggleType, isPassword, values, errors, onSubmit, isSubmit };
  },
});
</script>

<style >
</style>