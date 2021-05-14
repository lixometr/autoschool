<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="pb-3" v-for="(question, idx) in questionsItems" :key="idx">
      <div class="h5 mb-3 strong">{{ question.name }}</div>
      <app-radio-group
        :items="question.answers"
        :value="answers[question.id]"
        @input="onAnswerChange($event, question)"
      />
    </div>
    <div class="row">
      <div class="col-auto">
        <button class="btn-reg btn-primary mt-4">{{ $t("save") }}</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import AppRadioGroup from "../common/AppRadioGroup.vue";
import { errorHandler } from "@/helpers/error-handler";
import { computed, defineComponent, ref } from "@vue/composition-api";
import {
  useApiGetSecurityQuestions,
  useApiSendSecurityQuestions,
} from "@/api/security-questions";
import { SecurityQuestionEntity } from "@/models/sequrity-question.entity";
import { SecurityQuestionsDto } from "@/dto/security-questions.dto";
import useTranslate from "@/compositions/useTranslate";
import useToast from "@/compositions/useToast";
import useRouter from "@/compositions/useRouter";
import { UserModule } from "@/store/modules/user";

export default defineComponent({
  components: { AppRadioGroup },
  setup() {
    const questions = ref([] as SecurityQuestionEntity[]);
    const questionsItems = computed(() => {
      return questions.value.map((item) => ({
        ...item,
        answers: item.answers.map((answer) => ({
          value: answer.id,
          name: answer.answer,
        })),
      }));
    });
    const fetchQuestions = async () => {
      const { exec, error, result } = useApiGetSecurityQuestions({
        toast: { error: errorHandler() },
      });
      await exec();
      if (error.value) return;
      questions.value = result.value || ([] as SecurityQuestionEntity[]);
    };
    fetchQuestions();
    const serialize = (): SecurityQuestionsDto => {
      const answersToSend = [];
      Object.keys(answers.value).map((questionId: string) => {
        const currentQuestion = questions.value.find(
          (question) => question.id === parseInt(questionId)
        );
        const currentAnswer = currentQuestion?.answers.find(
          (answer) => answer.id === answers.value[questionId]
        );
        answersToSend.push({
          question_id: parseInt(questionId),
          answer_id: answers.value[questionId],
          value: currentAnswer?.answer,
        });
      });
      return { answers: answersToSend };
    };
    const validate = () => {
      if (Object.keys(answers.value).length < questions.value.length) {
        const { error } = useToast();
        error({
          message: useTranslate().i18n.t("securityQuestions.error") as string,
        });
        return false;
      }

      return true;
    };
    const onSubmit = async () => {
      if (!validate()) return;
      const toSend = serialize();
      const { error, exec } = useApiSendSecurityQuestions({
        toast: {
          error: errorHandler(),
          success: () =>
            useTranslate().i18n.t("securityQuestions.sentSuccess") as string,
        },
      });
      await exec(toSend);
      if (error.value) return;
      await UserModule.fetchUser()
      useRouter().push({ name: "Dashboard" });
      return;
    };
    const answers = ref({} as { [key: number]: number });
    const onAnswerChange = (
      answerId: number,
      question: SecurityQuestionEntity
    ) => {
      answers.value = { ...answers.value, [question.id]: answerId };
    };
    return { onSubmit, questionsItems, answers, onAnswerChange };
  },
});
</script>

<style >
</style>