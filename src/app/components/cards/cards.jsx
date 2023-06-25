import React from 'react'
import PropTypes from 'prop-types'
import Card from './card'

const Cards = ({ cards }) => {
	return (
		<div className='cardsList-container'>
			{cards.map(user => (
				<div key={user.id} className='cardsList-item'>
					<Card
						key={user.id}
						name={user.name}
						image={user.photo}
						qual={user.qualities}
						id={user.id}
					/>
				</div>
			))}
		</div>
	)
}

Cards.propTypes = {
	cards: PropTypes.array.isRequired,
}

export default Cards
