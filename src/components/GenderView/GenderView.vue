<template>
  <div class="species-content">
    <h2>{{ GENDER_FILTER }}</h2>

    <app-check-box
      v-for="(data, index) in genderData"
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
      GENDER: constants.GENDER,
      GENDER_FILTER: constants.GENDER_FILTER,
      genderData: [],
      modelName: 'gender',
      addFilter: this.$store.dispatch("addGenderFilteredData"),
      removeFilter: this.$store.dispatch("removeGenderFilteredData"),
      store: this.$store
    };
  },
  components: {
    appCheckBox: CheckBox
  },
  computed: {
    characters() {
      return getCheckBoxData(this.$store.getters.characters, constants.GENDER);
    }
  },
  watch: {
    characters(newVal, oldVal) {
      this.genderData = newVal;
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