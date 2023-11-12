

import { useState, useRef } from "react";

function Filter({ name, iconSrc }) {

	const [checked, setChecked] = useState(false);
	const inputRef = useRef(null);

	const handleFocus = () => {
		setChecked(old => !old);
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