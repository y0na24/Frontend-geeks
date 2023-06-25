import React, { useState } from 'react'
import NavBar from './navBar/navBar'
import { Outlet } from 'react-router-dom'
import IntroText from './ui/intro/introText'

const Layout = () => {
	const [show, setState] = useState(true)

	const handleClick = () => {
		setState(prevState => !prevState)
	}
	return (
		<>
			<NavBar handleShow={handleClick}/>
			{ !show 
			    ? <Outlet />
				:  <div onClick={handleClick}>
					<IntroText/>
				</div>
			}
		</>
	)
}

export default Layout
