export const updateCharacter = ({ commit }, payload) => {
    commit('setCharacters', payload)
};

export const sortAscendingById = ({ commit }) => {
    commit('sortAscending')
}

export const sortDescendingById = ({ commit }) => {
    commit('sortDescending')
}