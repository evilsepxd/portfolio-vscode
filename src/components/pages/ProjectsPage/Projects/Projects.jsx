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
			<div className="tabs tabs_projects">
				<button className="tabs__item" onClick={handleClick}>
					<div className="tabs__name">{ activeFilters[0] ? activeFilters.join(', ') : 'No filters' }</div>
					<svg
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="tabs__icon"
					>
						<g clipPath="url(#clip0_64_1646)">
							<path d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z" fill="#607B96"/>
						</g>
						<defs>
							<clipPath id="clip0_64_1646">
								<rect width="18" height="18" fill="white" transform="translate(0.347656 0.779297)"/>
							</clipPath>
						</defs>
					</svg>
				</button>
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