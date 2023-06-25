import React from 'react'
import PropTypes from 'prop-types'
import Badge from './badge'

const Badges = ({ arr }) => {
	return (
		<ul className='card-qualities'>
			{arr.map((el, ind) => {
				return <Badge key={ind} name={el} id={ind} />
			})}
		</ul>
	)
}

export default Badges

Badges.propTypes = {
	arr: PropTypes.array.isRequired,
}
