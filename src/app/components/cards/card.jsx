import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.css'
import Badges from '../ui/badge/badges'

const Card = ({ name, image, qual, id, style }) => {
	return (
		<div id='card' style={style}>
			<div className='personal'>
				<div className='avatar'>
					<img className='avatar-image' src={image} alt='user avatar' />
				</div>

				<div className='info'>
					<div className='nameHolder'>
						<h1>{name}</h1>
						<h2>Frontend developer</h2>
					</div>
					<Badges arr={qual} />
				</div>
			</div>
			<Link to={`/teamMember/${id}`} className='randomizeButton'>
				Перейти
			</Link>
		</div>
	)
}

Card.propTypes = {
	name: PropTypes.string,
	qual: PropTypes.array,
}
export default Card
