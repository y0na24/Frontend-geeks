import React from 'react'
import './index.css'
import '../../assets/nikolay.jpeg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ name, image, qual }) => {
	let startKey = 0
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
						{qual.map(elem => {
							return <span key={startKey++}>{elem}</span>
						})}
					</div>
					<Link to='userPageId' className='randomizeButton'>
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
