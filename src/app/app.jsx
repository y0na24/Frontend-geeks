import Slider from "./components/slider/slider"
import img1 from "./assets/asya.jpeg"
import img2 from "./assets/matvey.jpg"
import img3 from "./assets/nikolay.jpeg"
import img4 from "./assets/yura.jpg"



function App() {
	return (<>
	<h1>App</h1>
	<Slider>
		<img src={img1} alt="" />
		<img src={img2} alt="" />
		<img src={img3} alt="" />
		<img src={img4} alt="" />
	</Slider>
	</>)
}

export default App
