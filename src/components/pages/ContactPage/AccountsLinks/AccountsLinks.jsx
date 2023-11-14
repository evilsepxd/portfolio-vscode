

import { useRef, useState } from 'react';

import menuArrowIconSrc from '../../../../assets/icons/aboutPage/menu-arrow.svg';
import linkIconSrc from '../../../../assets/icons/contactPage/link.svg';

import './accountsLinks.scss';

function AccountsLinks() {
	const containerRef = useRef(null);
	const btnRef = useRef(null);
	
	const [contState, setContState] = useState(true);

	const handleClick = () => {
		setContState(old => !old);
	}

	return (
		<div className={`account-links${contState ? ' active' : ''}`} ref={containerRef}>
			<button className="account-links__btn" ref={btnRef} onClick={handleClick}>
				<img src={menuArrowIconSrc} alt="arrow" className="account-links__btn-icon" />
				<div className="account-links__btn-text">find-me-also-in</div>
			</button>
			<div className="account-links__inner">
				<ul className="account-links__list">
					<li className="account-links__item">
						<a href="mailto:petrkoval.work@gmail.com" className='account-links__item-link'>
							petrkoval.work@gmail
							<img src={linkIconSrc} alt="link" className="account-links__item-icon" />
						</a>
					</li>
					<li className="account-links__item">
						<a href="https://wa.me/79002225868" className='account-links__item-link'>
							+7900222****
							<img src={linkIconSrc} alt="link" className="account-links__item-icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default AccountsLinks;