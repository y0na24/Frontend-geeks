import React from 'react'
import PropTypes from 'prop-types'

import ProgressBar from './progressBar'

const ProgressBarList = ({ skills }) => {
	return skills.map((skill, i) => (
		<ProgressBar key={i} name={skill.name} percent={skill.percent} />
	))
}

ProgressBarList.propTypes = {
	skills: PropTypes.array,
}

export default ProgressBarList
