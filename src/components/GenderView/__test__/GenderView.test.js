import { shallowMount } from '@vue/test-utils';
import GenderView from '../GenderView.vue';

test('generate snapshot', () => {
    const wrapper = shallowMount(GenderView, {
        mocks: {
            $store: {
                getters: {
                    characters: []
                }
            }
        }
    })
    expect(wrapper.html()).toMatchSnapshot();
})