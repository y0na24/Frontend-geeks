import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const FavoriteButton = ({ isFavorite, label, onAdd, onDelete }) => {
	const buttonStyles = !isFavorite ? 'button' : 'button active'

	return (
		<button className={buttonStyles} onClick={!isFavorite ? onAdd : onDelete}>
			{!isFavorite ? label : 'Удалить из избранного'}
		</button>
	)
}

FavoriteButton.propTypes = {
	onAdd: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	isFavorite: PropTypes.bool,
	label: PropTypes.string.isRequired,
}

export default FavoriteButton
