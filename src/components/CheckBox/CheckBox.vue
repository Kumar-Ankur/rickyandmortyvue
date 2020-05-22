<template>
  <div>
    <input
      type="checkbox"
      :id="speciesName"
      :value="speciesName"
      v-model="checkedData"
      @click="handlecheckBox($event)"
    />
    <label :for="speciesName">{{speciesName}}</label>
    <br />
  </div>
</template>

<script>
import { getFilteredData } from "../../utils";
import { eventBus } from '../../main';
export default {
  props: ["data", "addFilter", "removeFilter", "modelName", "store"],
  data() {
    return {
      speciesName: this.data,
      checkedData: [],
      mName: this.modelName
    };
  },
  methods: {
    handlecheckBox(e) {
      getFilteredData(e, this.addFilter, this.removeFilter, this.modelName, this.store);
      eventBus.$emit('updateFilteredData')
    }
  },
  watch: {
    speciesName(newSpeciesName, oldSpeciesName) {
      this.speciesName = newSpeciesName;
    }
  }
};
</script>