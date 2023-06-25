import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'

const BreadCrumbs = () => {
	return (
		<nav className='breadcrumbs'>
			<NavLink className='breadcrumb-not-active' to='/'>
				Главная
			</NavLink>
			<span className='breadcrumb-arrow'>/</span>
			<NavLink className='breadcrumb-not-active' to='/favorites'>
				Избранное
			</NavLink>
		</nav>
	)
}

export default BreadCrumbs
