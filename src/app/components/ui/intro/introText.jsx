import React from 'react'
import './intro.css'
const IntroText = () => {
	return (
		<section className='cd-intro'>
			<div className='cd-intro-content bouncy'>
				<h1>Frontend-Geeks</h1>
				<p>команда увлеченных фронтендом людей!</p>
				<div className='action-wrapper'>
					<p className='cd-btn main-action'>
						Мы стремимся максимально прокачаться в деле, которое любим!
					</p>
					<p className='cd-btn'>
						Мы готовы без сна и отдыха часами сидеть за проектом, чтобы добиться
					</p>
					<p>Кликни на текст чтобы продолжить</p>
				</div>
			</div>
		</section>
	)
}

export default IntroText
