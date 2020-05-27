<template>
  <div class="species-content" data-test="component-species">
    <h2>{{ SPECIES_FILTER }}</h2>

    <app-check-box
      v-for="(data, index) in speciesData"
      :key="index"
      :data="data"
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
  name: 'app-species-view',
  data() {
    return {
      SPECIES: constants.SPECIES,
      SPECIES_FILTER: constants.SPECIES_FILTER,
      speciesData: [],
      modelName: 'species',
      store: this.$store
    };
  },
  components: {
    appCheckBox: CheckBox
  },
  computed: {
    characters() {
      return getCheckBoxData(this.$store.getters.characters, constants.SPECIES);
    }
  },
  watch: {
    characters(newVal, oldVal) {
      this.speciesData = newVal;
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