export const setCharacters = (state, payload) => state.all_characters = payload;

export const sortAscending = state => state.all_characters = state.all_characters.slice().sort((a,b) => a.id - b.id);

export const sortDescending = state => state.all_characters = state.all_characters.slice().sort((a,b) => b.id - a.id)