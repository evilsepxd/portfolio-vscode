import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import menuArrowIconSrc from '../../assets/icons/aboutPage/menu-arrow.svg';
import mailIconSrc from '../../assets/icons/aboutPage/mail-icon.svg';
import phoneIconSrc from '../../assets/icons/aboutPage/phone-icon.svg';

import './contacts.scss';

function Contacts() {
	const isMobile = useMediaQuery({
		query: '(max-width: 1200px)'
	});

	const containerRef = useRef(null);
	const btnRef = useRef(null);
	
	const [contState, setContState] = useState(isMobile ? false : true);

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
						<a href="mailto:petrkoval.work@gmail.com" className='contacts__item-link'>
							petrkoval.work@gmail
							<img src={mailIconSrc} alt="mail" className="contacts__item-icon" />
						</a>
					</li>
					<li className="contacts__item">
						<a href="https://wa.me/79002225868" className='contacts__item-link'>
							+7900222****
							<img src={phoneIconSrc} alt="mail" className="contacts__item-icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Contacts;