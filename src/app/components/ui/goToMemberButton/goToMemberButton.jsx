import React from 'react'
import PropTypes from 'prop-types'

const GoToMemberButton = ({ clickHandler }) => {
	return (
		<div onClick={clickHandler} className='randomizeButton'>
			Перейти
		</div>
	)
}

GoToMemberButton.propTypes = {
	clickHandler: PropTypes.func,
}

export default GoToMemberButton
