import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import createStore from './app/store/createStore'

import './index.css'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
      <BrowserRouter>
			  <App />
      </BrowserRouter>
		</Provider>
	</React.StrictMode>
)
