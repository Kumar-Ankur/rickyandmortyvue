<template>
  <div key="{index}" class="flex-item">
    <div class="flex-item_container">
      <img :src="this.item.image" :alt="name" class="flex-item_container-img" />
      <div class="intro">
        <div class="container-name">{{ this.item.name }}</div>
        <div class="container-creation">2 years ago</div>
      </div>

      <div class="container-detail">
        <div class="container-detail-status">
          <div class="detail-title">{{ STATUS_LIST }}</div>
          <div class="detail-value">{{ this.item.status }}</div>
        </div>

        <div class="container-detail-species">
          <div class="detail-title">{{ SPECIES_LIST }}</div>
          <div class="detail-value">{{ this.item.species }}</div>
        </div>

        <div class="container-detail-gender">
          <div class="detail-title">{{ GENDER_LIST }}</div>
          <div class="detail-value">{{ this.item.gender }}</div>
        </div>

        <div class="container-detail-origin">
          <div class="detail-title">{{ ORIGIN_LIST }}</div>
          <div class="detail-value">{{ this.item.originName }}</div>
        </div>

        <div class="container-detail-origin">
          <div class="detail-title">{{ LOCATION_LIST }}</div>
          <div class="detail-value">{{ this.item.locationName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as constants from "../../constants";
export default {
  props: ["item", "index"],
  data() {
    return {
      STATUS_LIST: constants.STATUS_LIST,
      SPECIES_LIST: constants.SPECIES_LIST,
      GENDER_LIST: constants.GENDER_LIST,
      ORIGIN_LIST: constants.ORIGIN_LIST,
      LOCATION_LIST: constants.LOCATION_LIST
    };
  },
  watch: {
    item(newCharacter, oldCharacter) {
      this.item = newCharacter;
    }
  }
};
</script>

<style scoped>
.flex-item {
  height: 30rem;
  width: 30rem;
  border: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  transition: ease-in-out 1s all;
  cursor: pointer;
}

.flex-item:hover {
  transform: translateY(-1rem);
  box-shadow: 0 10px 20px rgba(black, 0.2);
}

.flex-item_container {
  margin: 0.5rem;
  transition: ease-in-out 1s all;
}

.flex-item_container-img {
  height: 19rem;
  width: 100%;
  transition: ease-in-out 1s all;
}

.intro {
  width: 100%;
  height: 4.5rem;
  position: relative;
  top: -4.65rem;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
}

.container-name {
  position: absolute;
  top: 0.5rem;
  left: 0.3rem;
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: white;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 949px) and (min-width: 550px),
  only screen and (max-width: 549px) and (min-width: 400px),
  only screen and (max-width: 399px) and (min-width: 350px),
  only screen and (max-width: 349px) {
  .container-name {
    font-size: 0.8rem;
  }
}

.container-creation {
  position: absolute;
  color: white;
  top: 2.2rem;
  left: 0.5rem;
}

@media only screen and (max-width: 949px) and (min-width: 550px),
  only screen and (max-width: 549px) and (min-width: 400px),
  only screen and (max-width: 399px) and (min-width: 350px),
  only screen and (max-width: 349px) {
  .container-creation {
    font-size: 0.8rem;
  }
}

.container-detail {
  width: 100%;
  height: 10rem;
  position: relative;
  font-size: 0.8rem;
  top: -4.65rem;
  background: #d3d3d380;
}

.container-detail-status {
  position: relative;
  top: 1rem;
}

.container-detail-species {
  position: relative;
  top: 3rem;
}

.container-detail-gender {
  position: relative;
  top: 5rem;
}

.container-detail-origin {
  position: relative;
  top: 7rem;
}

.container-detail-location {
  position: relative;
  top: 9rem;
}

.detail-title {
  left: 1rem;
  position: absolute;
  color: white;
}

@media only screen and (max-width: 949px) and (min-width: 550px),
  only screen and (max-width: 549px) and (min-width: 400px),
  only screen and (max-width: 399px) and (min-width: 350px),
  only screen and (max-width: 349px) {
  .detail-title {
    left: 0.1rem;
  }
}

@media only screen and (max-width: 949px) and (min-width: 550px),
  only screen and (max-width: 549px) and (min-width: 400px),
  only screen and (max-width: 399px) and (min-width: 350px),
  only screen and (max-width: 349px) {
  .detail-title {
    font-size: 0.6rem;
  }
}

.detail-value {
  right: 0.5rem;
  position: absolute;
  color: gold;
}

@media only screen and (max-width: 949px) and (min-width: 550px),
  only screen and (max-width: 549px) and (min-width: 400px),
  only screen and (max-width: 399px) and (min-width: 350px),
  only screen and (max-width: 349px) {
  .detail-value {
    display: inline-block;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    right: 0.1rem;
  }
}

@media only screen and (max-width: 949px) and (min-width: 550px),
  only screen and (max-width: 549px) and (min-width: 400px),
  only screen and (max-width: 399px) and (min-width: 350px),
  only screen and (max-width: 349px) {
  .detail-value {
    font-size: 0.6rem;
    right: -10px;
  }
}
</style>