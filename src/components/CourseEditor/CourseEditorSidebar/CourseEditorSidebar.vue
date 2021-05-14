<template>
  <div class="aside col-3 py-4 px-4 border-end border-primary">
    <button
      class="btn btn-outline-primary w-100 btn-md mb-3"
      @click.prevent="addUnit"
    >
      + {{ $t("editor.addUnit") }}
    </button>
    <div class="pb-3">
      <draggable :value="units" @input="onChangeUnitsOrder">
        <course-editor-sidebar-unit
          v-for="(unit, idx) in units"
          :key="idx"
          :value="unit"
          @input="onUnitChange(idx, $event)"
          :units="units"
          @refresh="fetchUnits"
        />
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import CourseEditorSidebarUnit from "./CourseEditorSidebarUnit.vue";
import { computed, defineComponent, toRefs } from "@vue/composition-api";

import { errorHandler } from "@/helpers/error-handler";
import {
  useApiCreateUnit,
  useApiDeleteUnit,
  useApiUpdatePartsOrder,
} from "@/api/course";
import useRouter from "@/compositions/useRouter";
import { CreateCourseUnitDto } from "@/dto/course-editor/create-course-unit.dto";
import { CourseModule } from "@/store/modules/course";
import { CourseEditorUnitEntity } from "@/models/course-editor/course-editor-unit.entity";
import draggable from "vuedraggable";

export default defineComponent({
  components: { CourseEditorSidebarUnit, draggable },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const units = computed(() => value.value as CourseEditorUnitEntity[]);
    const router = useRouter();
    const fetchUnits = () => {
      emit("refresh");
    };
    fetchUnits();
    const addUnit = async () => {
      const { exec, error, result } = useApiCreateUnit({
        toast: { error: errorHandler() },
      });
      const toCreate: CreateCourseUnitDto = {
        name: [
          {
            lang: CourseModule.activeLanguage,
            value: `Unit ${units.value.length + 1}`,
          },
        ],
        passing_time: 0,
        order: units.value.length + 1,
        type: "unit",
      };
      await exec(toCreate);
      if (error.value) return;
      fetchUnits();
      return;
    };

    const onChangeUnitsOrder = async (
      newOrderUnits: CourseEditorUnitEntity[]
    ) => {
      emit("input", newOrderUnits);
      const toOrderUpdate = newOrderUnits.map((unit, idx) => {
        return {
          id: unit.id,
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
    const onUnitChange = (idx: number, newValues: any) => {
      const newUnits = [...units.value];
      newUnits[idx] = newValues;
      emit("input", newUnits);
    };
    return { addUnit, units, onChangeUnitsOrder, fetchUnits, onUnitChange };
  },
});
</script>

<style lang="scss">
</style>