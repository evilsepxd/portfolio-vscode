import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import Filter from './Filter';

import menuArrowIconSrc from '../../../../assets/icons/aboutPage/menu-arrow.svg';

import './filters.scss';

function Filters() {
	const filters = useSelector(state => state.projects.filters);
	const btnRef = useRef(null);
	const containerRef = useRef(null);
	const [containerState, setContainerState] = useState(true);

	const handleClick = () => {
		setContainerState(old => !old)
	}

	return (
		<>
			<button className="filters-title" ref={btnRef} onClick={handleClick}>
				<img
					src={menuArrowIconSrc}
					alt="arrow"
					className={`filters-title__arrow${containerState ? ' active' : ''}`}
				/>
				<div className="filters-title__text">projects</div>
			</button>
			<form className={`filters${containerState ? ' active' : ''}`} ref={containerRef}>
				<div className="filters__inner">
					{
						filters.map((filter, i) => <Filter name={filter.name} iconSrc={filter.iconSrc} key={i} />)
					}
				</div>
			</form>
		</>
	);
}

export default Filters;