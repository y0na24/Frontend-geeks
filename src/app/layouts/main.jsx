import React from 'react'
import MainPage from '../components/pages/mainPage/mainPage'
import { useParams } from 'react-router-dom'
import TeamMember from './teamMember'

const Main = props => {
	const { memberId } = useParams()

	if (memberId) {
		return <TeamMember />
	}

	return <MainPage />
}

// Main.propTypes = {}

export default Main
