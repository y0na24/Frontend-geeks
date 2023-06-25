import React from 'react'
import PropTypes from 'prop-types'

const Tasks = ({ tasks }) => {
	return tasks.map((task, i) => (
		<li key={i} className='card-task'>
			<span>{task}</span>
		</li>
	))
}

Tasks.propTypes = {
	tasks: PropTypes.array,
}

export default Tasks
