import { Routes, Route } from 'react-router-dom'

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

import HelloPage from '../pages/HelloPage/HelloPage'

import './App.scss'

function App() {
	return (
		<>
			<AppHeader/>
			<Routes>
				<Route path='/' element={<HelloPage/>} />
			</Routes>
			<AppFooter/>
		</>
	)
}

export default App
