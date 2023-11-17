import useHeaderFooterCollapse from '../../../hooks/useHeaderFooterCollapse';

import { useRef } from 'react';

import Filters from './Filters/Filters';
import ProjectsMobile from './Projects/ProjectsMobile';

import './projectsPage.scss';

function ProjectsPage({ setHeader, setFooter }) {
	
	const pageRef = useRef(null);

	useHeaderFooterCollapse(pageRef, setHeader, setFooter);

	return (
		<section className="projects page" ref={pageRef}>
			<h1 className="page__title">_about-me</h1>
			<Filters />
			<ProjectsMobile />
		</section>
	);
}

export default ProjectsPage;