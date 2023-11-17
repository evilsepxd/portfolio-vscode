import { lazy, Suspense } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import Spinner from '../Spinner/Spinner';

const HelloPage = lazy(() => import('../pages/HelloPage/HelloPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const AboutPageMobile = lazy(() => import('../pages/AboutPage/AboutPageMobile'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage/ProjectsPage'));
const ProjectsPageMobile = lazy(() => import('../pages/ProjectsPage/ProjectsPageMobile'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));

import './app.scss';	// CSSTransition styles

function App() {
	const location = useLocation();

	const isMobile = useMediaQuery({
		query: '(max-width: 1200px)'
	});

	const [headerVisible, setHeaderVisible] = useState(true);
	const [footerVisible, setFooterVisible] = useState(false);

	return (
		<>
			<AppHeader visible={headerVisible} />
				<Suspense fallback={<Spinner />}>
					<SwitchTransition>
						<CSSTransition
							classNames='page'
							key={location.key}
							timeout={300}
							in={true}
						>
							<Routes location={location}>
								<Route path='/' element={
									<HelloPage setHeader={setHeaderVisible} setFooter={setFooterVisible} />
								} />
								<Route path='/about' element={
									isMobile
									? <AboutPageMobile setHeader={setHeaderVisible} setFooter={setFooterVisible} />
									: <AboutPage/>
								} />
								<Route path='/projects' element={
									isMobile
									? <ProjectsPageMobile setHeader={setHeaderVisible} setFooter={setFooterVisible} />
									: <ProjectsPage/>
								} />
								<Route path='/contact' element={<ContactPage/>} />
							</Routes>
						</CSSTransition>
					</SwitchTransition>
				</Suspense>
			<AppFooter visible={footerVisible} />
		</>
	)
}

export default App
