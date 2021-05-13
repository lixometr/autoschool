<template>
  <div class="aside col-3 py-4 px-4 border-end border-primary">
    <button
      class="btn btn-outline-primary w-100 btn-md mb-3"
      @click.prevent="addUnit"
    >
      + {{ $t("editor.addUnit") }}
    </button>
    <div class="pb-3">
      <div v-for="(unit, idx) in units" :key="idx">
        <div class="row gx-2 align-items-center">
          <div class="col">
            <div class="h5 strong">
              {{ unit.name }} <Close class="cursor-pointer" @click.native="removeUnit" />
            </div>
          </div>
          <div class="col-auto mb-2">
            <small>{{ unit.time }}</small>
          </div>
          <div class="col-auto mb-2 cursor-pointer">
            <Clock />
          </div>
        </div>
        <ul class="ms-3">
          <li class="drag" v-for="(part, index) in unit.parts" :key="index">
            <span class="text-primary">{{ part.name }}</span>
          </li>
          <li class="drag">Rules for Persons with a Learner Permit</li>
        </ul>
        <button class="btn btn-outline-primary btn-md ms-3 mb-3">
          + Add part of <span clsas="lowercase">{{ unit.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Clock from "@/components/icons/Clock.vue";
import Close from "@/components/icons/Close.vue";

export default defineComponent({
  components: { Clock, Close },
  props: {
    // units: {
    //   type: Array ,
    //   default: () => []
    // }
  },
  setup(props, { emit }) {
    const addUnit = () => {
      return;
    };
    const removeUnit = () => {
      return;
    };
    const units = [
      {
        name: "Unit 1",
        parts: [
          {
            name: "Tets",
          },
          {
            name: "Tets 2",
          },
        ],
      },
    ];
    return { addUnit, removeUnit, units };
  },
});
</script>

<style lang="scss">
</style>