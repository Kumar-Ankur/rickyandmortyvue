<template>
  <div key="{index}" class="flex-item">
    <div class="flex-item_container">
      <img :src="this.item.image" :alt="name" class="flex-item_container-img" />
      <div class="intro">
        <div class="container-name">{{ this.item.name }}</div>
        <div class="container-creation">Id:{{ this.item.id }}  created: {{ year }} years ago</div>
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
          <div class="detail-value">{{ this.item.origin.name }}</div>
        </div>

        <div class="container-detail-location">
          <div class="detail-title">{{ LOCATION_LIST }}</div>
          <div class="detail-value">{{ this.item.location.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as constants from "../../constants";
import { getCreatedYear } from '../../utils';
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
  },
  computed: {
    year() {
      return getCreatedYear(this.item.created)
    }
  }
};
</script>

<style scoped>
.flex-item {
  height: 40rem;
  width: 30rem;
  border: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  transition: ease-in-out 1s all;
  cursor: pointer;
}

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
    .flex-item {
      width: 40rem;
      height: 55rem;
      margin-bottom: 5rem;
    }
  }

.flex-item:hover {
  transform: translateY(-1rem);
  box-shadow: 0 10px 20px rgba(black, 0.2);
}

.flex-item_container {
  margin: 0.5rem;
  transition: ease-in-out 1s all;
}

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
    .flex-item_container {
      width: 100%;
    }
  }

.flex-item_container-img {
  height: 19rem;
  width: 100%;
  transition: ease-in-out 1s all;
}

.intro {
  width: 100%;
  height: 9rem;
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
  font-size: 2rem;
  letter-spacing: 1px;
  color: white;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: gold;
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
  top: 4.2rem;
  left: 0.5rem;
  font-size: 1.5rem;
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
  height: 15rem;
  position: relative;
  font-size: 1.2rem;
  top: -4.65rem;
  background: #d3d3d380;
}

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
    .container-detail {
      height: 29rem;
      font-size: 2.2rem;
    }
  }

.container-detail-status {
  position: relative;
  top: 1rem;
}

.container-detail-species {
  position: relative;
  top: 4rem;
}

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
    .container-detail-species {
      top: 7rem;
    }
  }

.container-detail-gender {
  position: relative;
  top: 7rem;
}

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
    .container-detail-gender {
      top: 13rem;
    }
  }

.container-detail-origin {
  position: relative;
  top: 10rem;
}

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
    .container-detail-origin {
      top: 19rem;
    }
  }

.container-detail-location {
  position: relative;
  top: 13rem;
}

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
    .container-detail-location {
      top: 25rem;
    }
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

  @media only screen and (max-device-width: 568px) and (min-device-width: 320px) {
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