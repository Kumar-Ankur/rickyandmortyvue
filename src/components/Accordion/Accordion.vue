<template>
  <section id="app" class="section container">
    <article class="message" :class="accordionClasses">
      <div class="message-header" @click="toggleAccordion">{{ text }}</div>
      <div class="message-body">
        <div class="message-content">
          <app-species-view></app-species-view>
            <app-gender-view></app-gender-view>
            <app-origin-view></app-origin-view>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import SpeciesView from '../SpeciesView/SpeciesView.vue';
import GenderView from '../GenderView/GenderView.vue';
import OriginView from '../OriginView/OriginView.vue';

export default {
    props: ['text'],
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    accordionClasses: function() {
      return {
        "is-closed": !this.isOpen,
        "is-primary": this.isOpen,
        "is-dark": !this.isOpen
      };
    }
  },
  components: {
    appSpeciesView: SpeciesView,
    appGenderView: GenderView,
    appOriginView: OriginView
  }
};
</script>

<style scoped>
.message {
  width: 90vw;
  margin-top: 3rem;
  background: linear-gradient(to right, #3c3b3f, #605c3c);
  color: white;
  cursor: pointer;
  padding: 18px;
  align-items: center;
  transition: ease-in-out 3s all;
}
.message-header {
  cursor: pointer;
  font-size: 1.5rem;
}
.message-body {
  padding: 0;
  max-height: 50em;
  overflow: hidden;
  transition: 0.3s ease all;
}
.is-closed .message-body {
  max-height: 0;
}
.message-content {
  padding: 20px;
}
</style>