import { shallowMount } from "@vue/test-utils";
import ListItem from "../ListItem.vue";
import * as constants from "../../../constants";

describe("test list item component", () => {
  test("snapshot testing", () => {
    const item = {
      id: 1,
      image: "",
      name: "Test",
      status: "",
      species: "",
      gender: "male",
      origin: { name: "" },
      location: { name: "" }
    };
    const index = 2;
    const wrapper = shallowMount(ListItem, {
      propsData: {
        item,
        index
      },
      data() {
        return {
          STATUS_LIST: constants.STATUS_LIST,
          SPECIES_LIST: constants.SPECIES_LIST,
          GENDER_LIST: constants.GENDER_LIST,
          ORIGIN_LIST: constants.ORIGIN_LIST,
          LOCATION_LIST: constants.LOCATION_LIST
        };
      }
    });
    expect(wrapper.html()).toMatchSnapshot()
  });
});
