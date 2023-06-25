import React from 'react'
import { useSelector } from 'react-redux'
import { favoritesListSelector } from '../../../store/favoritesSlice'
import Cards from '../../cards/cards'
import './index.css'

const FavoritesPage = () => {
	const favorites = useSelector(favoritesListSelector())
	return (
		<div className='container'>
			{favorites.length > 0 ? (
				<Cards cards={favorites} />
			) : (
				<h1 className='noFavoritesTxt'>У вас нет избранных</h1>
			)}
		</div>
	)
}

export default FavoritesPage
