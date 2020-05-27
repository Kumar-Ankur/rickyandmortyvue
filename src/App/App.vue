<template>
  <div class="main">
    <div class="heading">{{ appHeading }}</div>
    <div class="sortBox">
      <app-sort-button></app-sort-button>
    </div>

    <div class="main_functionality">
      <div class="main_functionality-species">
        <app-accordion :text="ACCORDION_TEXT"></app-accordion>
      </div>
    </div>
    <div class="main_input">
      <app-search-view></app-search-view>
    </div>
    <div class="viewcontent">
      <app-list-items :filteredItems="getFilteredItem" v-if="getFilteredItem.length > 0"></app-list-items>
      <div v-else>
        <div class="norecord">No records found. Search with different Filter !!!!</div>
      </div>
    </div>
  </div>
</template>

<script>
import SortButton from "../components/SortButton/SortButton.vue";
import SearchView from "../components/SearchView/SearchView.vue";
import ListItems from "../components/ListItems/ListItems.vue";
import Accordion from "../components/Accordion/Accordion.vue";
import { eventBus } from "../main";
import * as constants from "../constants";
export default {
  data() {
    return {
      appHeading: constants.APP_HEADING,
      ACCORDION_TEXT: constants.ACCORDION_TEXT,
      filteredItems: [],
      filteredItemsLength: 0,
      ACCORDION_TEXT: constants.ACCORDION_TEXT,
      search_value: ""
    };
  },
  components: {
    appSortButton: SortButton,
    appAccordion: Accordion,
    appListItems: ListItems,
    appSearchView: SearchView
  },
  methods: {
    getSearchData(filteredOriginItem, search_text) {
      let filteredSearchItem =
        search_text.length > 0
          ? filteredOriginItem.filter(item => {
              return item.name
                .toLowerCase()
                .includes(search_text.toLowerCase());
            })
          : filteredOriginItem;

      return filteredSearchItem;
    },
    getOriginFilter(filteredGenderItem, filterOriginData) {
      let filteredOriginItem =
        filterOriginData.length > 0
          ? filteredGenderItem.filter(item => {
              return filterOriginData.indexOf(item.origin.name) >= 0;
            })
          : filteredGenderItem;
      return this.getSearchData(
        filteredOriginItem,
        this.$store.getters.getSearchText
      );
    },

    getGenderFilter(filterSpeciesData, filterGenderData) {
      let filteredGenderItem =
        filterGenderData.length > 0
          ? filterSpeciesData.filter(item => {
              return filterGenderData.indexOf(item.gender) >= 0;
            })
          : filterSpeciesData;

      return this.getOriginFilter(filteredGenderItem, this.filterOriginData);
    },
    getSpeciesFilter(all_characters, filterSpeciesData) {
      let filteredItem =
        filterSpeciesData.length > 0
          ? all_characters.filter(item => {
              return filterSpeciesData.indexOf(item.species) >= 0;
            })
          : all_characters;
      return this.getGenderFilter(filteredItem, this.filterGenderData);
    }
  },
  computed: {
    filterGenderData() {
      return this.$store.getters.filterGenderData;
    },
    filterOriginData() {
      return this.$store.getters.filterOriginData;
    },
    filterSpeciesData() {
      return this.$store.getters.filterSpeciesData;
    },
    getFilteredItem() {
      const fValue = this.getSpeciesFilter(
        this.filteredItems,
        this.$store.getters.filterSpeciesData
      );
      return fValue;
    }
  },
  watch: {
    filteredItems(newVal, oldVal) {
      this.filteredItems = newVal;
    }
  },
  created() {
    this.$http
      .get()
      .then(response => response.json())
      .then(response => {
        this.$store.dispatch("updateCharacter", response.results).then(() => {
          this.filteredItems = response.results;
        });
      });

    eventBus.$on("updateFilteredData", () => {
      this.getFilteredItem;
    });
    eventBus.$on("updateSortedData", data => {
      this.filteredItems = data;
      this.getFilteredItem;
    });
    eventBus.$on("updateSearchData", data => {
      this.search_value = data;
      this.getFilteredItem;
    });
  }
};
</script>

<style scoped src="./App.css"></style>