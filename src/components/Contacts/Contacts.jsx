import { useRef, useState } from 'react';

import menuArrowIconSrc from '../../assets/icons/aboutPage/menu-arrow.svg';

import './contacts.scss';

function Contacts() {
	const containerRef = useRef(null);
	const btnRef = useRef(null);
	
	const [contState, setContState] = useState(true);

	const handleClick = () => {
		setContState(old => !old);
	}

	return (
		<div className={`contacts${contState ? ' active' : ''}`} ref={containerRef}>
			<button className="contacts__btn" ref={btnRef} onClick={handleClick}>
				<img src={menuArrowIconSrc} alt="arrow" className="contacts__btn-icon" />
				<div className="contacts__btn-text">contacts</div>
			</button>
			<div className="contacts__inner">
				<ul className="contacts__list">
					<li className="contacts__item">
						<a href="mailto:petrkoval.work@gmail.com">petrkoval.work@gmail</a>
					</li>
					<li className="contacts__item">
						<a href="https://wa.me/79002225868">+7900222****</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Contacts;