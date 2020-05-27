import { shallowMount } from "@vue/test-utils";
import Accordion from '../Accordion.vue';

describe('unit test case for accordion component', () => {
    test('generate snapshot test', () => {
        const wrapper = shallowMount(Accordion, {
            propsData: {
                text: 'Test'
            }
        })
        expect(wrapper.html()).toMatchSnapshot();
    })
})