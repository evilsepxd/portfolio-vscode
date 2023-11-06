import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App.jsx';

import './style/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Router>
		<App />
	</Router>
)
