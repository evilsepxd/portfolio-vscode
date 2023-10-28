import { NavLink } from "react-router-dom";

import './appHeader.scss';

const AppHeader = () => {
	return (
		<header className="header">
			<div className="header__name">
				peter-koval
			</div>
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
		</header>
	);
}

export default AppHeader;