import { shallowMount } from '@vue/test-utils';
import OriginView from '../OriginView.vue';

test('generate snapshot', () => {
    const wrapper = shallowMount(OriginView, {
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