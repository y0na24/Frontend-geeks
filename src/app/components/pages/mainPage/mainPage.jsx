import React from 'react'
import Slider from '../../slider/slider'
import Card from '../../cards/card'
import team from '../../../constants/team'

const MainPage = () => {
	return (
		<div className='container'>
			<Slider width={800}>
				{team.map(user => (
					<Card
						key={user.id}
						name={user.name}
						image={user.photo}
						qual={user.qualities}
						id={user.id}
					/>
				))}
			</Slider>
		</div>
	)
}

export default MainPage
