
import { useSelector } from "react-redux";
import { getActiveFilters } from "../projectsSlice";

import { addActiveFilter, removeActiveFilter } from "../projectsSlice";

import { useRef } from "react";
import { useDispatch } from "react-redux";

function Filter({ name, iconSrc, darkIconSrc }) {

	const activeFilters = useSelector(getActiveFilters);
	const checked = activeFilters.includes(name);

	const inputRef = useRef(null);
	const dispatch = useDispatch();


	const handleFocus = () => {
		if (checked) {
			dispatch(removeActiveFilter(name));
		} else {
			dispatch(addActiveFilter({ name, iconSrc, darkIconSrc }));
		}
	}

	return (
		<label
			htmlFor={name}
			className="filters__item"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === ' ' || e.key === 'Enter') {
					handleFocus();
				}
			}}
			onClick={(e) => {
				if (e.target === inputRef.current) return;
				handleFocus();
			}}
		>
			<input
				type="checkbox"
				name={name}
				className="filters__input"
				id={name}
				checked={checked}
				ref={inputRef}
			/>
			<div className="filters__input-custom"></div>
			<div className="filters__item-inner">
				<img src={iconSrc} alt="icon" className="filters__icon" />
				<div className="filters__name">{ name }</div>
			</div>
		</label>
	);
}


export default Filter;