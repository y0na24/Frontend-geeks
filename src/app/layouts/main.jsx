import React, { useState } from 'react'
import MainPage from '../components/pages/mainPage/mainPage'
import IntroText from '../components/ui/intro/introText'

const Main = props => {
	const [state, setState] = useState(false)

	const handleClick = () => {
		setState(prevState => (prevState = true))
	}
	return (
		<div onMouseDown={handleClick}>
			{state ? (
				<div>
					<MainPage />
				</div>
			) : (
				<IntroText />
			)}
		</div>
	)
}

export default Main
