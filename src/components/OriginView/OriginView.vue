<template>
  <div class="species-content">
    <h2>{{ ORIGIN_FILTER }}</h2>

    <app-check-box
      v-for="(data, index) in originData"
      :key="index"
      :data="data"
      :addFilter="addFilter"
      :removeFilter="removeFilter"
      :modelName="modelName"
      :store="store"
    ></app-check-box>
  </div>
</template>

<script>
import CheckBox from "../CheckBox/CheckBox.vue";
import * as constants from "../../constants";
import { getCheckBoxData } from "../../utils";
export default {
  data() {
    return {
      ORIGIN: constants.ORIGIN,
      ORIGIN_FILTER: constants.ORIGIN_FILTER,
      originData: [],
      modelName: 'origin',
      addFilter: this.$store.dispatch("addOriginFilteredData"),
      removeFilter: this.$store.dispatch("removeOriginFilteredData"),
      store: this.$store
    };
  },
  components: {
    appCheckBox: CheckBox
  },
  computed: {
    characters() {
      return getCheckBoxData(
        this.$store.getters.characters,
        constants.ORIGIN,
        true
      );
    }
  },
  watch: {
    characters(newVal, oldVal) {
      this.originData = newVal;
    }
  }
};
</script>

<style scoped>
.species-content {
  color: white;
  border: 1px solid white;
  padding: 2rem;
  margin-left: 2rem;
}
</style>