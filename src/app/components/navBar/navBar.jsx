import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './index.css'
import AboutUsButton from '../ui/aboutUsButton/aboutUsButton'

const NavBar = ({ handleShow }) => {
	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='nav_links'>
					<li>
						<NavLink className='link' to='/'>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink className='link' to='/favorites'>
							Избранное
						</NavLink>
					</li>
					<li>
						<AboutUsButton handleShow={handleShow} />
					</li>
				</ul>
			</nav>
		</header>
	)
}

NavBar.propTypes = {
	handleShow: PropTypes.func,
}

export default NavBar
