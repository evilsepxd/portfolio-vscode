


import reactIconSrc from '../../../../assets/icons/projectsPage/react.svg';

import './projects.scss';

function Project({ name, id, filters, descr, link, imgSrc }) {
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
						filters.map((item, i) => {
							return (
								<div className="projects-filters__item" key={i}>
									<img src={reactIconSrc} alt="filter" className="projects-filters__icon"/>
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