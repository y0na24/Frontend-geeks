import React from 'react'

import { useDispatch } from 'react-redux'

import FavoriteButton from '../../ui/favoriteButton/favoriteButton'

import { addFavorite, deleteFavorite } from '../../../store/favoritesSlice'

import team from '../../../constants/team'

import { github } from '../../../assets'

import './index.css'
import { useParams } from 'react-router-dom'
import Badges from '../../ui/badge/badges'
import ProgressBar from '../../progressBar/progressBar'

const TeamMemberPage = () => {
	const dispatch = useDispatch()

	const { memberId } = useParams()

	const [isFavorite, setIsFavorite] = React.useState(false)

	React.useEffect(() => {
		setIsFavorite(isMemberInLocalStorage())
	}, [])

	const memberById = team.find(member => member.id === Number(memberId))

	function isMemberInLocalStorage() {
		const arrayOfFavorites = JSON.parse(localStorage.getItem('favorites'))

		if (arrayOfFavorites) {
			return arrayOfFavorites.some(member => member.id === Number(memberId))
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
				<div className='card-top'>
					<img className='card-avatar' src={memberById.photo} alt='Аватарка' />
					<div className='card-info'>
						<span className='card-name'>{memberById.name}</span>
						<span className='card-age'>{memberById.age} лет</span>
						<Badges arr={memberById.qualities} />
					</div>
				</div>
				<div className='card-bottom'>
					<p className='card-description'>{memberById.description}</p>

					<div className='card-progress'>
						{memberById.skills.map(skill => (
							<ProgressBar name={skill.name} percent={skill.percent} />
						))}
					</div>
					<div className='card-thingsDone'>
						<h3 className='card-thingsDone-title'>Что было сделано:</h3>
						<ul className='card-thingsDone-list'>
							{memberById.tasksDone.map(task => (
								<li className='card-task'>
									<span>{task}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='card-footer'>
					<a href={memberById.github}>
						<img src={github} alt='Гитхаб' />
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
