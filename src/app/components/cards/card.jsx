import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.css'

const Card = ({ name, image, qual, id }) => {
	return (
		<div id='card'>
			<div className='personal'>
				<div className='avatar'>
					<img src={image} alt='user avatar' />
					<div className='nameHolder'>
						<h1>{name}</h1>
						<h2>Backend developer</h2>
					</div>
				</div>

				<div className='info'>
					<div className='skills'>
						{qual.map((elem, i) => {
							return <span key={i}>{elem}</span>
						})}
					</div>
					<Link to={`/teamMember/${id}` } className='randomizeButton'>
						Перейти
					</Link>
				</div>
			</div>
		</div>
	)
}

Card.propTypes = {
	name: PropTypes.string,
	qual: PropTypes.array,
}
export default Card
