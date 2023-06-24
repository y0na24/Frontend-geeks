import React, { cloneElement, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Slider = ({ children, width = 700 }) => {
	const [pageNumber, setPage] = useState(1)
	const editedChildren = React.Children.map(children, function (children) {
		return cloneElement(children, {
			style: {
				...children.props.style,
				height: '100%',
				minWidth: `${width}px`,
				maxWidth: `${width}px`,
			},
		})
	})
	const handleLeftClick = () => {
		if (pageNumber === 1) {
			setPage(children.length)
		} else {
			setPage(p => p - 1)
		}
	}
	const handleRigthClick = () => {
		if (children.length === pageNumber) {
			setPage(1)
		} else {
			setPage(p => p + 1)
		}
	}
	return (
		<div className='slider-main' style={{ width: width }}>
			<div className='slider-leftShadow'>
				<div className='slider-leftBtn' onClick={handleLeftClick}>
					{'<'}
				</div>
			</div>
			<div className='slider-window'>
				<div
					className='slider-items'
					style={{
						transform: `translateX(-${(pageNumber - 1) * width}px)`,
					}}
				>
					{editedChildren}
				</div>
			</div>
			<div className='slider-rightShadow'>
				<div className='slider-rigthBtn' onClick={handleRigthClick}>
					{'>'}
				</div>
			</div>
			{/* <div className="slider-dots">
                {children.map(( el, ind )=>(
                    <div key={ind}></div>
                ))}
            </div> */}
		</div>
	)
}

export default Slider

Slider.propTypes = {
	width: PropTypes.number,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
}
