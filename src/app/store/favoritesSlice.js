import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	entities: [],
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		favoriteAdded(state, action) {
			state.entities.push(action.payload)
		},
		favoriteDeleted(state, action) {
			state.entities = state.entities.filter(
				member => member.id !== action.payload
			)
		},
	},
})

const { reducer: favoritesReducer, actions } = favoritesSlice
const { favoriteAdded, favoriteDeleted } = actions

export const addFavorite = memberPayload => dispatch => {
	dispatch(favoriteAdded(memberPayload))
}

export const deleteFavorite = memberId => dispatch => {
	dispatch(favoriteDeleted(memberId))
}

export default favoritesReducer
