<template>
  <div>
    <div class="row gx-2 align-items-center">
      <div class="col">
        <div class="h5 strong">
          {{ unit.langName.value }}
          <Close class="cursor-pointer" @click.native="removeUnit(unit.id)" />
        </div>
      </div>
      <div class="col-auto mb-2">
        <small>{{ unit.passing_time }} {{ $t("min") }}</small>
      </div>
      <div
        class="col-auto mb-2 cursor-pointer"
        @click="changeUnitTime(unit.id)"
      >
        <Clock />
      </div>
    </div>
    <draggable
      tag="ul"
      class="ms-3"
      :value="unit.pages"
      @input="updatePartsOrder"
    >
      <li
        class="drag"
        v-for="(part, index) in unit.pages"
        :key="index"
        @click="goToPart(part.id)"
      >
        <span
          :class="{
            'text-primary': parseInt(part.id) !== parseInt($route.params.id),
          }"
          >{{ part.langName.value }}</span
        >
      </li>
      <!-- <li class="drag">Rules for Persons with a Learner Permit</li> -->
    </draggable>
    <button
      class="btn btn-outline-primary btn-md ms-3 mb-3"
      @click.prevent="addPart(unit.id)"
    >
      + {{ $t("editor.addPartOf") }}
      <span clsas="lowercase">{{ unit.langName.value }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";
import Clock from "@/components/icons/Clock.vue";
import Close from "@/components/icons/Close.vue";
import useRouter from "@/compositions/useRouter";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { CreateCoursePartDto } from "@/dto/course-editor/create-course-part.dto";
import {
  useApiCreateCoursePart,
  useApiDeleteUnit,
  useApiUpdatePartsOrder,
} from "@/api/course";
import { errorHandler } from "@/helpers/error-handler";
import { CourseModule } from "@/store/modules/course";
import { CourseEditorUnitEntity } from "@/models/course-editor/course-editor-unit.entity";
import draggable from "vuedraggable";
import { plainToClass } from "class-transformer";

export default defineComponent({
  components: { Clock, Close, draggable },
  props: {
    value: {
      type: Object as () => CourseEditorUnitEntity,
      default: () => ({}),
    },
    units: {
      type: Array as () => CourseEditorUnitEntity[],
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const { value, units } = toRefs(props);
    const unit = computed(() => value.value);
    const router = useRouter();
    const fetchUnits = () => {
      emit("refresh");
    };
    const addPart = async (id: number) => {
      const { exec, error, result } = useApiCreateCoursePart({
        toast: { error: errorHandler() },
      });
      const { pages: unitPages } = units.value.find((unit) => unit.id === id);

      const toCreate: CreateCoursePartDto = {
        name: [
          {
            lang: CourseModule.activeLanguage,
            value: `Part ${unitPages.length + 1}`,
          },
        ],
        tasks: [],
        parent_id: id,
        type: "page",
        order: unitPages.length + 1,
      };
      await exec(toCreate);
      if (error.value) return;
      fetchUnits();
      router.push({
        name: "CourseEditor",
        params: { id: String(result.value.id) },
      });
    };
    const changeUnitTime = (id: number) => {
      const { showByName } = useModal();
      showByName(ModalName.changeUnitTime, {
        props: {
          id,
        },
        on: {
          send: () => {
            fetchUnits();
          },
        },
      });
    };
    const goToPart = (id: string) => {
      router.push({ name: "CourseEditor", params: { id } });
    };
    const updatePartsOrder = async (newPartsOrder: any[]) => {
      emit(
        "input",
        plainToClass(CourseEditorUnitEntity, {
          ...unit.value,
          pages: newPartsOrder,
        })
      );
      const toOrderUpdate = newPartsOrder.map((part, idx) => {
        return {
          id: part.id,
          order: idx + 1,
        };
      });
      const { exec, error } = useApiUpdatePartsOrder({
        toast: { error: errorHandler() },
      });
      await exec({ parts: toOrderUpdate });
      if (error.value) return;
      fetchUnits();
    };
    const removeUnit = async (id: number) => {
      const { exec, error, result } = useApiDeleteUnit({
        toast: { error: errorHandler() },
      });
      await exec({ id });
      if (error.value) return;
      router.push({ name: "CourseEditorDisabled" });
      fetchUnits();
    };
    return {
      addPart,
      changeUnitTime,
      goToPart,
      updatePartsOrder,
      removeUnit,
      unit,
    };
  },
});
</script>

<style lang="scss">
</style>