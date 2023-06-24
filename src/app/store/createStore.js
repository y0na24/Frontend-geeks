import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesSlice'

const createStore = () =>
	configureStore({
		reducer: favoritesReducer,
	})

export default createStore
