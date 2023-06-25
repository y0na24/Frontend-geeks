import React from 'react'
import Slider from '../../slider/slider'
import SliderItem from '../../slider/item'
import Card from '../../cards/card'
import team from '../../../constants/team'

const MainPage = () => {
	return (
		<div className='container'>
			<Slider width={800}>
				{team.map(user => (
					<SliderItem key={user.id}>
						<Card
							name={user.name}
							image={user.photo}
							qual={user.qualities}
							id={user.id}
						/>
					</SliderItem>
				))}
			</Slider>
		</div>
	)
}

export default MainPage
