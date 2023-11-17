import { useSelector, useDispatch } from 'react-redux';

import Project from './Project';
import { getActiveFilters } from '../projectsSlice';
import { clearFilters } from '../projectsSlice';
import { getFilteredProjects } from '../projectsSlice';

import './projects.scss';

function Projects() {
	
	const dispatch = useDispatch();

	const activeFilters = useSelector(getActiveFilters);
	const projects = useSelector(getFilteredProjects);

	const handleClick = () => {
		dispatch(clearFilters());
	}

	return (
		<>
			<div className="projects__name">
				// projects
				<span> / { activeFilters[0] ? activeFilters.join('; ') : 'all' }</span>
			</div>
			<div className="projects__inner">
				{
					projects?.map((project, i) => <Project
										name={project.name}
										id={i + 1}
										descr={project.descr}
										link={project.link}
										imgSrc={project.imgSrc}
										filters={project.filters}
										key={i}
									/>)
				}
			</div>
		</>
	);
}

export default Projects;