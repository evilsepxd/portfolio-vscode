

import { useEffect, useRef } from 'react';

import menuArrowIconSrc from '../../assets/icons/aboutPage/menu-arrow.svg';

import './contacts.scss';

function Contacts() {
	const containerRef = useRef(null);
	const btnRef = useRef(null);
	
	useEffect(() => {
		const containerHeight = containerRef.current.scrollHeight;

		btnRef.current.addEventListener('click', () => {
			if (containerRef.current.classList.contains('active')) {
				containerRef.current.classList.remove('active');
				containerRef.current.style.maxHeight = '41.6px';
			} else {
				containerRef.current.classList.add('active');
				containerRef.current.style.maxHeight = containerHeight + 'px';
			}
		});
	}, []);

	return (
		<div className="contacts active" ref={containerRef}>
			<button className="contacts__btn" ref={btnRef}>
				<img src={menuArrowIconSrc} alt="arrow" className="contacts__btn-icon" />
				<div className="contacts__btn-text">contacts</div>
			</button>
			<ul className="contacts__list">
				<li className="contacts__item">
					<a href="mailto:petrkoval.work@gmail.com">petrkoval.work@gmail</a>
				</li>
				<li className="contacts__item">
					<a href="https://wa.me/79002225868">+7900222****</a>
				</li>
			</ul>
		</div>
	);
}

export default Contacts;