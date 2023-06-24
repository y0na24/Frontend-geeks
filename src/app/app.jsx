import { Route, Routes } from 'react-router-dom'
import '../index.css'
import Favorites from './layouts/favorites'
import Main from './layouts/main'
import TeamMember from './layouts/teamMember'
import NavBar from './components/navBar/navBar'
// import Card from './components/cards/card'
function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/Favorites' element={<Favorites />} />
				<Route path='/TeamMember' element={<TeamMember />} />
				<Route path='' element={<Main />} />
			</Routes>
		</div>
	)
}

export default App
