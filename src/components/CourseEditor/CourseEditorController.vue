<template>
  <div class="col p-0">
    <course-editor-name
      :value="currentPart.langName"
      @input="currentPart.setLangName($event)"
    />
    <div class="pt-2 pb-4 border-bottom border-primary">
      <course-editor-add-btns @add="taskAdd" />
    </div>
    <course-editor-tasks v-model="currentPart.tasks" />
    <div class="py-4 px-lg-5 px-3">
      <div class="row">
        <div class="col-4 mb-2">
          <button
            class="btn w-100 btn-md btn-outline-primary btn-bg"
            @click.prevent="deletePart"
          >
            {{ $t("editor.deletePartOfUnit") }}
          </button>
        </div>
        <div class="col"></div>
        <div class="col-4 mb-2">
          <button
            class="btn w-100 btn-md btn-primary"
            @click.prevent="savePart"
          >
            {{ $t("editor.savePartOfUnit") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CourseEditorAddBtns from "./CourseEditorAddBtns.vue";
import CourseEditorName from "./CourseEditorName.vue";
import {
  useApiCreateCoursePart,
  useApiDeleteCoursePart,
  useApiGetCoursePart,
  useApiUpdateCoursePart,
} from "@/api/course";
import useTranslate from "@/compositions/useTranslate";
import { CreateCoursePartDto } from "@/dto/course-editor/create-course-part.dto";
import { errorHandler } from "@/helpers/error-handler";
import { CourseEditorPartEntity } from "@/models/course-editor/course-editor-part.entity";
import { CourseEditorEnitties, CourseEditorTypes } from "@/types/constants";
import { computed, defineComponent, ref, toRefs } from "@vue/composition-api";
import { plainToClass, classToPlain } from "class-transformer";
import CourseEditorTasks from "./CourseEditorTasks.vue";
export default defineComponent({
  components: { CourseEditorTasks, CourseEditorName, CourseEditorAddBtns },
  props: {
    id: [String, Number],
    isNew: Boolean,
  },
  setup(props, { emit }) {
    const { id, isNew } = toRefs(props);
    const partId = computed(() =>
      typeof id.value !== "number" ? parseInt(id.value) : id.value
    );
    const tasks = computed(() => currentPart.value.tasks);
    const currentPart = ref({} as CourseEditorPartEntity);

    const fetchPart = async () => {
      const { exec, error, result } = useApiGetCoursePart({
        toast: { error: errorHandler() },
        loading: true,
      });
      await exec({ id: partId.value });
      // if (error.value) return router.push({ name: "Dashboard" });
      currentPart.value = result.value;
    };
    const initData = () => {
      if (isNew.value) {
        const toCreate = {
          type: "page",
          tasks: [],
          order: 1,
          name: [],
          parent_id: partId.value,
        };
        currentPart.value = plainToClass(CourseEditorPartEntity, toCreate);
      } else {
        fetchPart();
      }
    };
    initData();
    const updatePart = async () => {
      const { exec, error } = useApiUpdateCoursePart({
        toast: {
          error: errorHandler(),
          success: () => useTranslate().i18n.t("editor.succesUpdate") as string,
        },
      });
      await exec({ id: partId.value, data: currentPart.value });
      if (error.value) return;
      return;
    };
    const createPart = async () => {
      const { exec, error } = useApiCreateCoursePart({
        toast: {
          error: errorHandler(),
          success: () => useTranslate().i18n.t("editor.succesUpdate") as string,
        },
      });
      const toCreate = classToPlain(currentPart.value);
      await exec(plainToClass(CreateCoursePartDto, toCreate));
      if (error.value) return;
      return;
    };
    const savePart = async () => {
      if (isNew.value) {
        await createPart();
      } else {
        await updatePart();
      }
      emit('save')
    };
    const deletePart = async () => {
      const { exec, error } = useApiDeleteCoursePart({
        toast: { error: errorHandler() },
      });
      await exec({ id: partId.value });
      emit("delete");
      if (error.value) return;
    };
    const taskAdd = (type: CourseEditorTypes) => {
      const toCreateItem = {
        type,
        content: [],
        order: tasks.value.length + 1,
      };
      const newItem = plainToClass(CourseEditorEnitties[type], toCreateItem);
      currentPart.value.tasks.push(newItem);
    };
    return {
      savePart,
      deletePart,
      taskAdd,
      createPart,
      updatePart,
      currentPart,
    };
  },
});
</script>

<style lang="scss" >
</style>