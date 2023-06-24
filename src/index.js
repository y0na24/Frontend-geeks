import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import { Provider } from 'react-redux'
import createStore from './app/store/createStore'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
)
