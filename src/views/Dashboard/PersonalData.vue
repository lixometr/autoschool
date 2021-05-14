<template>
  <div class="container section pt-0">
    <div class="row">
      <div class="cabinet-block bg-white col-12">
        <div class="row">
          <div class="col">
            <div class="cabinet-block__head row">
              <h1 class="col-lg">{{ $t("personalData.title") }}</h1>
              <div class="col-lg-auto pt-1 h6 strong text-danger">
                {{ $t("personalData.warning") }}
              </div>
              <!-- <div class="col-auto small"><a href="#">Edit information</a></div>
									<div class="col-auto small"><a href="#">Documents</a></div> -->
            </div>
            <form action="#" @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-xl-4 col-lg-6">
                  <app-input
                    v-model="values.lastName"
                    :errors="errors.lastName"
                    :label="$t('inputs.lastName')"
                  />
                </div>

                <div class="col-xl-4 col-lg-6">
                  <app-input
                    v-model="values.firstName"
                    :errors="errors.firstName"
                    :label="$t('inputs.firstName')"
                  />
                </div>
                <div class="col-xl-4 col-lg-6">
                  <app-input
                    v-model="values.middleName"
                    :errors="errors.middleName"
                    :label="$t('inputs.middleName')"
                  />
                </div>

                <div class="col-xxl-2 col-xl-3 col-lg-6">
                  <app-select
                    :label="$t('inputs.	permitClass')"
                    :options="permitOptions"
                    v-model="values.classOfPermit"
                    :errors="errors.classOfPermit"
                  />
                </div>
                <div class="col-xxl-2 col-xl-3 col-lg-6">
                  <date-input
                    :label="$t('inputs.expirationDate')"
                    v-model="values.expDate"
                    :errors="errors.expDate"
                  />
                </div>

                <div class="col-xxl-4 col-lg-6">
                  <div class="row">
                    <div class="col-lg-6">
                      <date-input
                        :label="$t('inputs.expirationDate')"
                        v-model="values.birthday"
                        :errors="errors.birthday"
                      />
                    </div>
                    <div
                      class="col-lg-6 align-self-center pt-lg-2 pb-2 pb-lg-0 smallest"
                      v-html="$t('personalData.birthdayText')"
                    ></div>
                  </div>
                </div>
                <div class="col-12"></div>

                <div class="col-xl-4 col-lg-6">
                  <app-input
                    v-model="values.idNumber"
                    :errors="errors.idNumber"
                    :label="$t('inputs.idNumber')"
                  />
                </div>
                <div class="col-xl-4 col-lg-6">
                  <app-input
                    v-model="values.documentNumber"
                    :errors="errors.documentNumber"
                    :label="$t('inputs.documentNumber')"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-auto">
                  <button
                    class="btn-reg btn-outline-primary mt-4"
                    @click="cancel"
                  >
                    {{ $t("cancel") }}
                  </button>
                </div>
                <div class="col-auto">
                  <button class="btn-reg btn-primary mt-4" type="submit">
                    {{ $t("submit") }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppSelect from "../../components/common/AppSelect.vue";
import DateInput from "../../components/common/DateInput.vue";
import AppInput from "@/components/common/AppInput.vue";
import useForm from "@/compositions/validators/useForm";
import { defineComponent } from "@vue/composition-api";
import * as yup from "yup";
import { useApiSendPersonalData } from "@/api/personal-data";
import { errorHandler } from "@/helpers/error-handler";
import useTranslate from "@/compositions/useTranslate";
import { UserModule } from "@/store/modules/user";
import useRouter from "@/compositions/useRouter";
export default defineComponent({
  components: { AppInput, DateInput, AppSelect },
  setup() {
    const { values, errors, handleSubmit, serialize } = useForm({
      lastName: ["", yup.string().required()],
      firstName: ["", yup.string().required()],
      middleName: ["", yup.string().required()],
      classOfPermit: ["", yup.string().required()],
      expDate: ["", yup.string().required()],
      birthday: ["", yup.string().required()],
      idNumber: ["", yup.string().required()],
      documentNumber: ["", yup.string().required()],
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);
      const { exec, error } = useApiSendPersonalData({
        toast: {
          error: errorHandler(),
          success: () =>
            useTranslate().i18n.t("personalData.sentSuccess") as string,
        },
      });
      await exec(toSend);
      if (error.value) return;
      await UserModule.fetchUser();
      useRouter().push({ name: "Dashboard" });
    });
    const permitOptions = ["A", "B", "C", "D"];
    const cancel = () => {
      useRouter().push({ name: "Dashboard" });
    };
    return { values, errors, cancel, onSubmit, permitOptions };
  },
});
</script>

<style lang="scss">
</style>