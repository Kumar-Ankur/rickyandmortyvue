const state = {
    filter_origin_data: []
}

const getters = {
    filterOriginData: state => {
        return state.filter_origin_data
    }
}

const mutations = {
    'ADD_ORIGIN_FILTERED_DATA'(state, payload) {
        state.filter_origin_data = state.filter_origin_data.concat(payload)
    },

    'REMOVE_ORIGIN_FILTERED_DATA'(state, payload) {
        const idx = state.filter_origin_data.indexOf(payload);
        state.filter_origin_data.splice(idx, 1);
    }
}

const actions = {
    addOriginFilteredData: ({ commit}, payload) => {
        commit('ADD_ORIGIN_FILTERED_DATA', payload)
    },
    removeOriginFilteredData: ({ commit }, payload) => {
        commit('REMOVE_ORIGIN_FILTERED_DATA', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}