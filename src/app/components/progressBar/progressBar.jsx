import './index.css'

const ProgressBar = ({ name, percent }) => {
	return (
		<>
			<div className='progress-bar'>
				<div className='progress-item'>
					<div className='progress-text'>
						<p>{name}</p>
						<p>{percent}%</p>
					</div>
					<div className='progress-line' data-percent={percent}>
						<span
							className='progress-color'
							style={{ width: `${percent}%` }}
						></span>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProgressBar
