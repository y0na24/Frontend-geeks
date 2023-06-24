import { createSlice } from '@reduxjs/toolkit'

const favorites = JSON.parse(localStorage.getItem('favorites')) || []

const initialState = {
	entities: favorites,
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		favoriteAdded(state, action) {
			state.entities.push(action.payload)
			localStorage.setItem('favorites', JSON.stringify(state.entities))
		},
		favoriteDeleted(state, action) {
			state.entities = state.entities.filter(
				member => member.id !== action.payload.id
			)

			if (state.entities.length > 0) {
				localStorage.setItem('favorites', JSON.stringify(state.entities))
			} else {
				localStorage.removeItem('favorites')
			}
		},
	},
})

const { reducer: favoritesReducer, actions } = favoritesSlice
const { favoriteAdded, favoriteDeleted } = actions

export const addFavorite = memberPayload => dispatch => {
	dispatch(favoriteAdded(memberPayload))
}

export const deleteFavorite = memberPayload => dispatch => {
	dispatch(favoriteDeleted(memberPayload))
}

export default favoritesReducer
