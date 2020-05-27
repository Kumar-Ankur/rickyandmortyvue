import { shallowMount } from "@vue/test-utils";
import Checkbox from '../Checkbox.vue';

describe('check checkbox component', () => {
    test('generate snapshot test', () => {
        const wrapper = shallowMount(Checkbox)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('check handleclick event', () => {
        const wrapper = shallowMount(Checkbox)
        const inp = wrapper.find('input')
        inp.trigger('click')
        expect(wrapper.isVueInstance()).toBe(true)
    })
})