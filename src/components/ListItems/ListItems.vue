<template>
  <div>
    <app-list-item
      v-for="(filteredItem, index) in filteredCharacter"
      :key="index"
      :item="filteredItem"
      :index="index"
    ></app-list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  props: ["filteredItems"],
  data() {
    return {
      filteredCharacter: this.filteredItems
    };
  },
  watch: {
    filteredItems(newVal, oldVal) {
      if(newVal) {
        this.filteredCharacter = newVal
      }
    }
  },
  components: {
    appListItem: ListItem
  }
};
</script>

<style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    transition: ease-in-out 1s all;
    position: relative;
    top: 9rem;
  }
</style>