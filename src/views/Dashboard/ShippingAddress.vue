<template>
  <div class="container section pt-0">
    <div class="row">
      <div class="cabinet-block bg-white col-12">
        <div class="row">
          <div class="col">
            <div class="cabinet-block__head row">
              <h1 class="col-lg">{{ $t("shippingAddress.title") }}</h1>
              <div class="col-12 h6 strong text-danger">
                {{ $t("shippingAddress.subTitle") }}
              </div>
              <!-- <div class="col-auto small"><a href="#">Edit information</a></div>
									<div class="col-auto small"><a href="#">Documents</a></div> -->
            </div>
            <form action="#" @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-12 opacity-50 text-secondary h6 strong">
                  {{ $t("shippingAddress.formTitle") }}
                </div>
                <div class="col-lg-6">
                  <country-select
                    v-model="values.country"
                    :errors="errors.country"
                    :label="$t('inputs.country')"
                  />
                </div>
                <div class="col-xl-4 col-lg-6">
                  <app-input
                    :required="true"
                    v-model="values.zipCode"
                    :errors="errors.zipCode"
                    :label="$t('inputs.zipCode')"
                  />
                </div>
                <div class="col-lg-12">
                  <app-input
                    :required="true"
                    v-model="values.address1"
                    :errors="errors.address1"
                    :label="$t('inputs.address') + ' 1'"
                  />
                </div>

                <div class="col-lg-12">
                  <app-input
                    :required="true"
                    v-model="values.address2"
                    :errors="errors.address2"
                    :label="$t('inputs.address') + ' 2'"
                  />
                </div>

                <div class="col-lg-6">
                  <city-select
                    :errors="errors.city"
                    v-model="values.city"
                    :label="$t('inputs.city')"
                  />
                </div>

                <div class="col-lg-6">
                  <state-select
                    v-model="values.state"
                    :errors="errors.state"
                    :label="$t('inputs.state')"
                  />
                </div>

                <div class="col-lg-12">
                  <app-input
                    v-model="values.fullName"
                    :errors="errors.fullName"
                    :label="$t('inputs.fullName')"
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
                  <button class="btn-reg btn-primary mt-4">
                    {{ $t("submit") }}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xl-4 pt-2">
            <div v-html="$t('shippingAddress.info')"></div>
            <div class="pt-2">
              <a
                :href="$t('shippingAddress.requirementsLink')"
                class="tdu strong"
                >{{ $t("shippingAddress.requirements") }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CitySelect from "../../components/common/CitySelect.vue";
import StateSelect from "../../components/common/StateSelect.vue";
import CountrySelect from "../../components/common/CountrySelect.vue";
import { defineComponent } from "@vue/composition-api";
import useForm from "@/compositions/validators/useForm";
import * as yup from "yup";
import AppInput from "@/components/common/AppInput.vue";
import useRouter from "@/compositions/useRouter";
import { useApiSendShippingAddress } from "@/api/shipping-address";
import { errorHandler } from "@/helpers/error-handler";
import useTranslate from "@/compositions/useTranslate";
export default defineComponent({
  components: { CountrySelect, AppInput, StateSelect, CitySelect },
  setup() {
    const { values, errors, handleSubmit, serialize } = useForm({
      country: ["", yup.string().required()],
      zipCode: ["", yup.string().required()],
      address1: ["", yup.string().required()],
      address2: ["", yup.string()],
      city: ["", yup.string().required()],
      state: ["", yup.string().required()],
      fullName: ["", yup.string()],
    });
    const onSubmit = handleSubmit(async () => {
      const { exec, error } = useApiSendShippingAddress({
        toast: {
          error: errorHandler(),
          success: () =>
            useTranslate().i18n.t("shippingAddress.sentSuccess") as string,
        },
      });
      const ser = serialize();
      const toSend = Object.assign({}, ser, {
        address: [ser.address1, ser.address2],
      });
      delete toSend.address1;
      delete toSend.address2;
      console.log(toSend);

      await exec(toSend);
      if (error.value) return;
    });
    const cancel = () => {
      useRouter().push({ name: "Dashboard" });
    };
    return { values, errors, onSubmit, cancel };
  },
});
</script>

<style >
</style>