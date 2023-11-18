import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App.jsx';
import store from './components/app/store.js';

import './style/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<Router basename='/portfolio-vscode'>
			<App />
		</Router>
	</Provider>
)
