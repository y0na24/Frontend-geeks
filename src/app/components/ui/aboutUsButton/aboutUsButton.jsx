import React from 'react'
import PropTypes from 'prop-types'

const AboutUsButton = ({ handleShow }) => {
	return (
		<button type='button' className='navbar-info' onClick={handleShow}>
			О команде
		</button>
	)
}

AboutUsButton.propTypes = {
	handleShow: PropTypes.func,
}

export default AboutUsButton
