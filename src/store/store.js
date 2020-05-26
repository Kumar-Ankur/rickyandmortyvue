import Vue from 'vue';
import Vuex from 'vuex';
import gender from './modules/gender';
import origin from './modules/origin';
import species from './modules/species';
import search from './modules/search';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        all_characters: []
    },
    getters,
    mutations,
    actions,
    modules: {
        gender,
        origin,
        species,
        search
    }
})