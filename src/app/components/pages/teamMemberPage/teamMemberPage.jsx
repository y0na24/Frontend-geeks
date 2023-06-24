import React from 'react'
import { useDispatch } from 'react-redux'

import FavoriteButton from '../../ui/favoriteButton/favoriteButton'

import { addFavorite, deleteFavorite } from '../../../store/favoritesSlice'

import team from '../../../constants/team'

import { github } from '../../../assets'

import './index.css'

const TeamMemberPage = () => {
	const dispatch = useDispatch()

	const [isFavorite, setIsFavorite] = React.useState(false)

	React.useEffect(() => {
		setIsFavorite(isMemberInLocalStorage())
	}, [])

	const memberById = team.find(member => member.id === 2)

	function isMemberInLocalStorage() {
		const arrayOfFavorites = JSON.parse(localStorage.getItem('favorites'))

		if (arrayOfFavorites) {
			return arrayOfFavorites.some(member => member.id === 2)
		}

		return false
	}

	const addToFavorites = () => {
		setIsFavorite(true)
		dispatch(addFavorite(memberById))
	}

	const deleteFromFavorites = () => {
		setIsFavorite(false)
		dispatch(deleteFavorite(memberById))
	}

	return (
		<div className='container'>
			<div className='card'>
				<div className='profile'>
					<img className='avatar' src={memberById.photo} alt='Аватарка' />
					<div className='info-block'>
						<span className='name'>Матвей Клёнов</span>
						<span className='age'>20 лет</span>
						<ul className='qualities'>
							{memberById.qualities.map((quality, i) => (
								<li key={i}>{quality}</li>
							))}
						</ul>
					</div>
				</div>
				<div className='description-block'>
					<h2 className='description-title'>О Себе:</h2>
					<p className='description-text'>{memberById.description}</p>
				</div>
				<div className='card-footer'>
					<a className='github' href={memberById.github}>
						<img src={github} alt='GitHub' />
					</a>
					<FavoriteButton
						onAdd={addToFavorites}
						onDelete={deleteFromFavorites}
						isFavorite={isFavorite}
						label='Добавить в избранное'
					/>
				</div>
			</div>
		</div>
	)
}

export default TeamMemberPage
