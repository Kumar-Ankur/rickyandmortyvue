const state = {
    search_text: ''
}

const getters = {
    getSearchText: state => {
        return state.search_text
    }
}

const mutations = {
    'ADD_SEARCH_TEXT'(state, payload) {
        state.search_text = payload
    }
}

const actions = {
    addSearchText: ({ commit}, payload) => {
        commit('ADD_SEARCH_TEXT', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}