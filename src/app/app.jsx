import { useRoutes } from 'react-router-dom'

import routes from './routes'
import Layout from './components/Layout'

function App() {
	const elements = useRoutes(routes)

	return <Layout>{elements}</Layout>
}

export default App
