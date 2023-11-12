

import Filters from './Filters/Filters';
import Projects from './Projects/Projects';

import './projectsPage.scss';

function ProjectsPage() {


	return (
		<section className="projects page">
			<Filters />
			<Projects />
		</section>
	);
}

export default ProjectsPage;