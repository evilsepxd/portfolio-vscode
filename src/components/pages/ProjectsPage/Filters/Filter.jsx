

import { useRef, useEffect, useState } from "react";

function Filter({ name, iconSrc }) {

	const itemRef = useRef(null);
	const inputRef = useRef(null);
	const [checked, setChecked] = useState(false);

	const keyboardListener = (e) => {
		if (document.activeElement === itemRef.current && e.key === 'Enter') {
			setChecked(old => !old);
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', keyboardListener);

		return () => {
			document.removeEventListener('keydown', keyboardListener);
		}
	}, []);

	return (
		<label htmlFor={name} className="filters__item" tabIndex={0} ref={itemRef} >
			<input
				type="checkbox"
				name={name}
				className="filters__input"
				id={name}
				ref={inputRef}
				checked={checked}
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