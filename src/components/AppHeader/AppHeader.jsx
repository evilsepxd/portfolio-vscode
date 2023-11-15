import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { NavLink } from "react-router-dom";

import menuIconSrc from '../../assets/icons/helloPage/menu.svg'
import closeIconSrc from '../../assets/icons/helloPage/close.svg'

import './appHeader.scss';

const AppHeader = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 1200px)'
	});

	const [menuOpened, setMenuOpened] = useState(false);

	const handleClick = () => {
		setMenuOpened(old => !old);
	}

	return (
		<header className='header'>
			<div className="header__name">
				peter-koval
			</div>
			{
				isMobile ?
				<>
					<button className="header__btn" onClick={handleClick}>
						<img src={menuOpened ? closeIconSrc : menuIconSrc} alt="menu" className="header__btn-icon" />
					</button>
					<CSSTransition
						classNames='menu'
						in={menuOpened}
						timeout={300}
						unmountOnExit
					>
						<Portal>
							<nav className="header__menu">
								<NavLink to='/' className='header__menu-link' onClick={handleClick}>
									_hello
								</NavLink>
								<NavLink to='/about' className='header__menu-link' onClick={handleClick}>
									_about-me
								</NavLink>
								<NavLink to='/projects' className='header__menu-link' onClick={handleClick}>
									_projects
								</NavLink>
								<NavLink to='/contact' className="header__menu-link" onClick={handleClick}>
									_contact-me
								</NavLink>
							</nav>
						</Portal>
					</CSSTransition>
				</> :
				<>
					<nav className="header__nav">
						<NavLink to='/' className='header__link'>
							_hello
							<span></span>
						</NavLink>
						<NavLink to='/about' className='header__link'>
							_about-me
							<span></span>
						</NavLink>
						<NavLink to='/projects' className='header__link'>
							_projects
							<span></span>
						</NavLink>
					</nav>
					<NavLink to='/contact' className="header__contact">
						_contact-me
						<span></span>
					</NavLink>
				</>
			}
		</header>
	);
}

const Portal = ({children}) => {
	return createPortal(
		children,
		document.querySelector('#root')
	);
}

export default AppHeader;