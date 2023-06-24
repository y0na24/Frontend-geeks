import React from 'react'
import NavBar from './navBar/navBar'

const Layout = ({children}) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	)
}

export default Layout
