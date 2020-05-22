import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        all_characters: [],
        filter_gender_data: [],
        filter_origin_data: [],
        filter_species_data: [],
        search_text: ''
    },
    getters: {
        characters: state => {
            return state.all_characters
        },
        filterGenderData: state => {
            return state.filter_gender_data
        },
        filterOriginData: state => {
            return state.filter_origin_data
        },
        filterSpeciesData: state => {
            return state.filter_species_data
        },
        getSearchText: state => {
            return state.search_text
        }
    },
    mutations: {
        'SET_CHARACTERS'(state, payload) {
            state.all_characters = payload
        },

        'ADD_GENDER_FILTERED_DATA'(state, payload) {
            state.filter_gender_data =state.filter_gender_data.concat(payload)
        },

        'REMOVE_GENDER_FILTERED_DATA'(state, payload) {
            const idx = state.filter_gender_data.indexOf(payload);
            state.filter_gender_data.splice(idx, 1);
        },
        
        'ADD_ORIGIN_FILTERED_DATA'(state, payload) {
            state.filter_origin_data = state.filter_origin_data.concat(payload)
        },

        'REMOVE_ORIGIN_FILTERED_DATA'(state, payload) {
            const idx = state.filter_origin_data.indexOf(payload);
            state.filter_origin_data.splice(idx, 1);
        },

        'ADD_SPECIES_FILTERED_DATA'(state, payload) {
            state.filter_species_data = state.filter_species_data.concat(payload)
        },

        'REMOVE_SPECIES_FILTERED_DATA'(state, payload) {
            const idx = state.filter_species_data.indexOf(payload);
            state.filter_species_data.splice(idx, 1);
        },

        'SORT_DATA_BY_ASCENDING'(state) {
            state.all_characters = state.all_characters.slice().sort((a,b) => a.id - b.id)
        },

        'SORT_DATA_BY_DESCENDING'(state) {
            state.all_characters = state.all_characters.slice().sort((a,b) => b.id - a.id)
        },
        'ADD_SEARCH_TEXT'(state, payload) {
            console.log(payload)
            state.search_text = payload
        }
    },
    actions: {
        updateCharacter: ({ commit }, payload) => {
            commit('SET_CHARACTERS', payload)
        },
        addGenderFilteredData: ({ commit}, payload) => {
            commit('ADD_GENDER_FILTERED_DATA', payload)
        },
        removeGenderFilteredData: ({ commit}, payload) => {
            commit('REMOVE_GENDER_FILTERED_DATA', payload)
        },
        addOriginFilteredData: ({ commit}, payload) => {
            commit('ADD_ORIGIN_FILTERED_DATA', payload)
        },
        removeOriginFilteredData: ({ commit }, payload) => {
            commit('REMOVE_ORIGIN_FILTERED_DATA', payload)
        },
        addSpeciesFilteredData: ({ commit}, payload) => {
            commit('ADD_SPECIES_FILTERED_DATA', payload)
        },
        removeSpeciesFilteredData: ({ commit }, payload) => {
            commit('REMOVE_SPECIES_FILTERED_DATA', payload)
        },
        sortAscendingById: ({ commit }) => {
            commit('SORT_DATA_BY_ASCENDING')
        },
        sortDescendingById: ({ commit }) => {
            commit('SORT_DATA_BY_DESCENDING')
        },
        addSearchText: ({ commit}, payload) => {
            commit('ADD_SEARCH_TEXT', payload)
        }
    }
})