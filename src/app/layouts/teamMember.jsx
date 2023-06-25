import React from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'

const TeamMember = props => {
	const { memberId } = useParams()

	if (memberId) {
		return <Outlet />
	}

	return <Navigate to='/' />
}

TeamMember.propTypes = {}

export default TeamMember
