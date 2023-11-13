
import { useSelector } from 'react-redux';

import './projects.scss';

function Project({ name, id, filters, descr, link, imgSrc }) {
	
	const filtersState = useSelector(state => state.projects.filters);

	return (
		<div className="projects__item">
			<a href={link} className="projects__title">
				Project { id }
				<span className="projects__title-descr">
					// { name }
				</span>
			</a>
			<div className="projects__wrapper">
				<div className="projects-filters">
					{
						filters.map((filter, i) => {
							return (
								<div className={`projects-filters__item projects-filters__item_${filter}`} key={i}>
									<img
										src={filtersState.find(item => item.name === filter).darkIconSrc}
										alt="filter"
										className="projects-filters__icon"
									/>
								</div>
							);
						})
					}
				</div>
				<div className="projects__img">
					<img src={imgSrc} alt="project-img" />
				</div>
				<div className="projects__descr">
					<div className="projects__descr-text">
						{ descr }
					</div>
					<a href={link} className="projects__link">view-project</a>
				</div>
			</div>
		</div>
	);
}

export default Project;