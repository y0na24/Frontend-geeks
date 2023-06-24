import React from 'react'
import NavBar from '../../navBar/navBar'
import Slider from '../../slider/slider'
import Card from '../../cards/card'
import team from '../../../constants/team'

// import PropTypes from 'prop-types'

const MainPage = () => {
	const users = team
	return (
		<>
			<Slider width={600}>
				<Card
					key={users[0].id}
					name={users[0].name}
					image={users[0].photo}
					qual={users[0].qualities}
					id={users[0].id}
				/>

				<Card
					key={users[0].id}
					name={users[0].name}
					image={users[0].photo}
					qual={users[0].qualities}
					id={users[0].id}
				/>
			</Slider>
		</>
	)
}

// MainPage.propTypes = {}

export default MainPage
