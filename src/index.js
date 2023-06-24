import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './app/store/createStore'

import './index.css'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
