
import Slider from "./components/slider/slider"
import NavBar from './components/navBar/navBar'
import TeamMember from './layouts/teamMember'

import img1 from "./assets/asya.jpeg"
import img2 from "./assets/matvey.jpg"
import img3 from "./assets/nikolay.jpeg"
import img4 from "./assets/yura.jpg"



function App() {
	return (<>
  <NavBar/>
	<TeamMember />
	<Slider>
		<img src={img1} alt="" />
		<img src={img2} alt="" />
		<img src={img3} alt="" />
		<img src={img4} alt="" />
	</Slider>
	</>)





export default App
