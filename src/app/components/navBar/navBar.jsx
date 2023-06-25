import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import getRandomNumber from '../../utils/getRandomNumber'

import './navBar.css'

const NavBar = () => {
	const [randomNumber, setRandomNumber] = React.useState()
	const location = useLocation()

	React.useEffect(() => {
		setRandomNumber(getRandomNumber())
	}, [location])

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
						<NavLink className='link' to={`/teamMember/${randomNumber}`}>
							Участник команды
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default NavBar
