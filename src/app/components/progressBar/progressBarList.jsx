import React from 'react'
import PropTypes from 'prop-types'

import ProgressBar from './progressBar'

const ProgressBarList = ({ skills }) => {
	return skills.map(skill => (
		<ProgressBar name={skill.name} percent={skill.percent} />
	))
}

ProgressBarList.propTypes = {
	skills: PropTypes.array,
}

export default ProgressBarList
