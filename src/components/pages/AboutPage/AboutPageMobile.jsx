

import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeInfoType } from './aboutSlice';

import FoldersMobile from './Folders/FoldersMobile';
import Contacts from '../../Contacts/Contacts';
import InfoBlockMobile from './InfoBlock/InfoBlockMobile';
import Snippets from './Snippets/Snippets';

import menuIconSrc from '../../../assets/icons/aboutPage/menu-arrow.svg';

import './aboutPage.scss';


function AboutPage({ setHeader, setFooter }) {

	const dispatch = useDispatch();
	const btnRefs = useRef([]);
	const pageRef = useRef(null);

	const handleClick = (e, dataType) => {
		const t = e.target;

		dispatch(changeInfoType(dataType));

		btnRefs.current.forEach(btn => {
			if (t === btn) {
				btn.classList.toggle('active');
			}
		});
	}

	useEffect(() => {
		setFooter(false);
		pageRef.current.addEventListener('scroll', (e) => {
			const scrollTop = pageRef.current.scrollTop;
			const scrollHeight = pageRef.current.scrollHeight;
			const clientHeight = pageRef.current.clientHeight;

			if (scrollTop + clientHeight + 5 > scrollHeight) {
				setFooter(true);
			} else {
				setFooter(false);
			}

			if (scrollTop >= 10) {
				setHeader(false);
			} else {
				setHeader(true);
			}
		});
	}, []);

	return (
		<section className="about page" ref={pageRef}>
			<h1 className="about__title">_about-me</h1>
			<nav className="about__nav">
				<button 
					className='about__navlink'
					onClick={(e) => handleClick(e, 'professional')}
					ref={el => btnRefs.current[0] = el}
				>
					<img src={menuIconSrc} alt="menu-arrow" className="about__navlink-icon" />
					professional-info
				</button>
				<FoldersMobile infoType={'professional'} />
				<button
					className='about__navlink active'
					onClick={(e) => handleClick(e, 'personal')}
					ref={el => btnRefs.current[1] = el}
				>
					<img src={menuIconSrc} alt="menu-arrow" className="about__navlink-icon" />
					personal-info
				</button>
				<FoldersMobile infoType={'personal'} />
				<button
					className='about__navlink'
					onClick={(e) => handleClick(e, 'hobbies')}
					ref={el => btnRefs.current[2] = el}
				>
					<img src={menuIconSrc} alt="menu-arrow" className="about__navlink-icon" />
					hobbies-info
				</button>
				<FoldersMobile infoType={'hobbies'} />
				<Contacts />
			</nav>

			<InfoBlockMobile />

			<Snippets />
		</section>
	)
}

export default AboutPage;