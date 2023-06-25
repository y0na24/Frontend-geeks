import React from 'react'
import './index.css'

const IntroText = () => {
	return (
		<section className='cd-intro'>
			<div className='cd-intro-content bouncy'>
				<h1>Frontend-Geeks</h1>
				<p>Команда увлеченных фронтендом людей!</p>
				<div className='action-wrapper'>
					<p className='cd-btn main-action'>
						Мы стремимся максимально прокачаться в деле, которое любим!
					</p>
					<p className='cd-btn'>
						Мы готовы без сна и отдыха часами сидеть за проектом, чтобы добиться результата!
					</p>
					<p><strong>(Кликни на текст, чтобы продолжить)</strong></p>
				</div>
			</div>
		</section>
	)
}

export default IntroText
