import React from 'react'
import NavBar from './navBar/navBar'
import { Outlet } from 'react-router-dom'
import BreadCrumbs from './breadCrumbs/breadCrumbs'

const Layout = () => {
	return (
		<>
			<NavBar />
			<BreadCrumbs />
			<Outlet />
		</>
	)
}

export default Layout
