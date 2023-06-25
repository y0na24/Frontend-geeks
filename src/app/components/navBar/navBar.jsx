import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import './index.css'

const NavBar = ({handleShow}) => {

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
						<div className="navbar-info" onClick={handleShow}>
							О команде
						</div>
					</li>
				</ul>
			</nav>
		</header>
	)
}

NavBar.propTypes = {
	handleShow: PropTypes.func
}

export default NavBar
