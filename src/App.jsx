import './index.css'
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Layout from './app/components/nav/layout/layout';

function App() {
  const elements = useRoutes(routes);
	return (
    <div>
      <Layout />
      {elements}
    </div>
  )
}

export default App
