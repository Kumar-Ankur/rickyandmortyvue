const state = {
    filter_species_data: []
}

const getters = {
    filterSpeciesData: state => {
        return state.filter_species_data
    }
}

const mutations = {
    'ADD_SPECIES_FILTERED_DATA'(state, payload) {
        state.filter_species_data = state.filter_species_data.concat(payload)
    },

    'REMOVE_SPECIES_FILTERED_DATA'(state, payload) {
        const idx = state.filter_species_data.indexOf(payload);
        state.filter_species_data.splice(idx, 1);
    }
}

const actions = {
    addSpeciesFilteredData: ({ commit}, payload) => {
        commit('ADD_SPECIES_FILTERED_DATA', payload)
    },
    removeSpeciesFilteredData: ({ commit }, payload) => {
        commit('REMOVE_SPECIES_FILTERED_DATA', payload)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}