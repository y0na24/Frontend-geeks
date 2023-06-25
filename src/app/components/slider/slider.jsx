import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import { SliderContext } from './slider-context'

const Slider = ({ children, width = 700 }) => {
	const [pageNumber, setPage] = useState(1)
	const [pageWidth, setPageWidth] = useState(width)

	const windowRef = useRef()

	const handleLeftClick = () => {
		if (pageNumber === 1) {
			setPage(children.length)
		} else {
			setPage(p => p - 1)
		}
	}

	useEffect(() => {
		const resizeHandler = () => {
			const _width = windowRef.current.offsetWidth
			setPageWidth(_width)
			setPage(1)
		}
		resizeHandler()
		window.addEventListener('resize', resizeHandler)
	}, [])

	const handleRigthClick = () => {
		if (children.length === pageNumber) {
			setPage(1)
		} else {
			setPage(p => p + 1)
		}
	}
	return (
		<SliderContext.Provider value={pageWidth}>
			<div className='slider-main'>
				<div className='slider-leftShadow'>
					<div className='slider-leftBtn' onClick={handleLeftClick}>
						{'<'}
					</div>
				</div>
				<div className='slider-window' ref={windowRef}>
					<div
						className='slider-items'
						style={{
							transform: `translateX(-${(pageNumber - 1) * pageWidth}px)`,
						}}
					>
						{children}
					</div>
				</div>
				<div className='slider-rightShadow'>
					<div className='slider-rigthBtn' onClick={handleRigthClick}>
						{'>'}
					</div>
				</div>
			</div>
		</SliderContext.Provider>
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
