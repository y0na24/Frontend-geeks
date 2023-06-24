import React from 'react'
import Card from './card'
import team from '../../constants/team'

const Cards = () => {
	const users = team
	return (
		<>
			{users.map(el => (
				<Card key={el.id} name={el.name} image={el.photo} qual={el.qualities} />
			))}
		</>
	)
}

export default Cards
