import { useRoutes } from 'react-router-dom'

import routes from './routes'
import Layout from './components/Layout'

function App() {
	const elements = useRoutes(routes)

	return elements
}

export default App
