import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import './index.css'

import team from "../../constants/team"

const BreadCrumbs = () => {
	const {state, pathname} = useLocation()
	const ind = pathname.slice(-1) - 1

	const getContent = () => {
		return state === "/" ? "Главная" : "Избранное"
	}

	return (
		<nav className='breadcrumbs'>
			<Link className='breadcrumb-not-active' to={state}>
				{getContent()}
			</Link>
			<span className='breadcrumb-arrow'>/</span>
			<NavLink className='breadcrumb-active'>
				{team[ind].name}
			</NavLink>
		</nav>
	)
}

export default BreadCrumbs
