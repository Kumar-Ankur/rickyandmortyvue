import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "../App.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("App view component test case", () => {
  let store;
  let actions;
  let wrapper;
  beforeEach(() => {
    actions = {
      updateCharacter: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });

    wrapper = shallowMount(App, {
      data: () => {
        return {
          filteredItems: [],
          search_value: ""
        };
      },
      mocks: {
        $store: {
          getters: {
            filterGenderData: [],
            filterOriginData: [],
            filterSpeciesData: [],
            getSearchText: ""
          },
          dispatch: {
            updateCharacter: data => data
          }
        }
      },
      localVue: localVue
    });
  });

  test('generate snapshot testing', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })

  test("check `filterGenderData` call on computed hooks", () => {
    expect(wrapper.vm.filterGenderData).toStrictEqual([]);
  });

  test("check `filterOriginData` call on computed hooks", () => {
    expect(wrapper.vm.filterOriginData).toStrictEqual([]);
  });

  test("check `filterSpeciesData` call on computed hooks", () => {
    expect(wrapper.vm.filterSpeciesData).toStrictEqual([]);
  });

  test("check `getFilteredItem` call on computed hooks", () => {
    expect(wrapper.vm.getFilteredItem).toStrictEqual([]);
  });

  test("check `getSpeciesFilter` call on methods", () => {
    const res = wrapper.vm.getSpeciesFilter([1, 2, 3], [1]);
    expect(res).toStrictEqual([]);
  });

  test("check `getGenderFilter` call on methods", () => {
    const res = wrapper.vm.getGenderFilter([1, 2, 4], [1]);
    expect(res).toStrictEqual([]);
  });

  test("check `getOriginFilter` call on methods", () => {
    const res = wrapper.vm.getOriginFilter(
      [{ origin: { name: "rick" } }],
      [""]
    );
    expect(res).toStrictEqual([]);
  });

  test("check `getSearchData` call on methods", () => {
    const res = wrapper.vm.getSearchData([{ name: "rick" }], "test");
    expect(res).toStrictEqual([]);
  });

  test("check filteredItems method inside watch", () => {
    wrapper.vm.$options.watch.filteredItems.call(wrapper.vm, [], []);
    expect(wrapper.vm.$data.filteredItems).toStrictEqual([]);
  });

  test("check filteredItems method inside watch", () => {
    wrapper.vm.$options.watch.filteredItems.call(wrapper.vm, [], []);
    expect(wrapper.vm.$data.filteredItems).toStrictEqual([]);
  });
});
