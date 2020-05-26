const state = {
    filter_gender_data: []
}

const getters = {
    filterGenderData: state => {
        return state.filter_gender_data
    },
}

const mutations = {
    'ADD_GENDER_FILTERED_DATA'(state, payload) {
        state.filter_gender_data =state.filter_gender_data.concat(payload)
    },

    'REMOVE_GENDER_FILTERED_DATA'(state, payload) {
        const idx = state.filter_gender_data.indexOf(payload);
        state.filter_gender_data.splice(idx, 1);
    }
}

const actions = {
    addGenderFilteredData: ({ commit}, payload) => {
        commit('ADD_GENDER_FILTERED_DATA', payload)
    },
    removeGenderFilteredData: ({ commit}, payload) => {
        commit('REMOVE_GENDER_FILTERED_DATA', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}