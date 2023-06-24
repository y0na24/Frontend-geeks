import Slider from './components/slider/slider'
import TeamMember from './layouts/teamMember'
import { matvey, yura, nikolay, asya } from './assets'

function App() {
	return (
		<>
			<TeamMember />
			<Slider>
				<img src={matvey} alt='Матвей' />
				<img src={yura} alt='Юрий' />
				<img src={asya} alt='Анастасия' />
				<img src={nikolay} alt='Николай' />
			</Slider>
		</>
	)
}

export default App
