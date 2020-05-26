import { shallowMount, createLocalVue } from '@vue/test-utils';
import SpeciesView from '../SpeciesView.vue';
import CheckBox from "../../CheckBox/CheckBox.vue";
const localVue = createLocalVue();
localVue.use(CheckBox)

describe("species view component test case", () => {
  test('sets the correct default data', () => {
      const wrapper = shallowMount(SpeciesView, {
          mocks: {
              $store: {
                getters: {
                    characters: []
                }
              }
          },
          localVue: localVue
      })
      expect(wrapper.isVueInstance).toBeTruthy()
  })
})