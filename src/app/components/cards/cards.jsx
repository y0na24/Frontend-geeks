import React from 'react'
import Card from './card'
import team from '../../constants/team'

const Cards = () => {
	return (
		<>
			{team.map(user => (
				<Card
					key={user.id}
					name={user.name}
					image={user.photo}
					qual={user.qualities}
					id={user.id}
				/>
			))}
		</>
	)
}

export default Cards
