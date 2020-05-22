<template>
  <div>
    <button
      type="submit"
      class="btn btn--animated btn--white"
      @click="handleAsc"
      :style="{ marginRight: 1 + 'rem'}"
    >{{ sortAscendingBtn }}</button>
    <button
      data-test="component-btn-desc"
      type="submit"
      @click="handleDesc"
      class="btn btn--animated btn--white"
    >{{ sortDescendingBtn }}</button>
  </div>
</template>

<script>
import * as constants from "../../constants";
import { eventBus } from '../../main';
export default {
  data() {
    return {
      sortAscendingBtn: constants.SORT_ASCENDING_TEXT,
      sortDescendingBtn: constants.SORT_DESCENDING_TEXT
    };
  },
  methods: {
    handleDesc() {
      this.$store.dispatch('sortDescendingById')
      eventBus.$emit('updateSortedData', this.$store.getters.characters)
    },
    handleAsc() {
      this.$store.dispatch('sortAscendingById')
      eventBus.$emit('updateSortedData', this.$store.getters.characters)
    }
  }
};
</script>

<style scoped>

button:focus {outline:0;}

.btn {
  padding: 0.5rem 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-0.3rem);
  box-shadow: 0 10px 20px rgba(black, 0.2);
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn--white {
  background-color: white;
  color: black;
}

.btn--white::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn--animated {
  animation: moveInBottom 1s ease-out 0.75s;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>