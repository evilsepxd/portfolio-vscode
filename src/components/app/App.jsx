import { lazy, Suspense } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import Spinner from '../Spinner/Spinner';

const HelloPage = lazy(() => import('../pages/HelloPage/HelloPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage/ProjectsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));

import './app.scss';	// CSSTransition styles

function App() {
	const location = useLocation();

	return (
		<>
			<AppHeader/>
				<Suspense fallback={<Spinner />}>
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
								<Route path='/projects' element={<ProjectsPage/>} />
								<Route path='/contact' element={<ContactPage/>} />
							</Routes>
						</CSSTransition>
					</SwitchTransition>
				</Suspense>
			<AppFooter/>
		</>
	)
}

export default App
