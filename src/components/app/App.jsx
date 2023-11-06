import { Routes, Route, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

import HelloPage from '../pages/HelloPage/HelloPage';
import AboutPage from '../pages/AboutPage/AboutPage';

import './app.scss';	// CSSTransition styles

function App() {
	const location = useLocation();

	return (
		<>
			<AppHeader/>
				<SwitchTransition>
					<CSSTransition
						classNames='page'
						key={location.key}
						timeout={300}
						in={true}
					>
						<Routes location={location}>
							<Route path='/' element={<HelloPage/>} />
							<Route path='/about' element={<AboutPage/>} />
						</Routes>
					</CSSTransition>
				</SwitchTransition>
			<AppFooter/>
		</>
	)
}

export default App
