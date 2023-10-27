import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
	return (
		<header className="header">
			<div className="header__name">
				peter-koval
			</div>
			<nav className="header__nav">
				<NavLink className='header__link'>
					_hello
				</NavLink>
				<NavLink className='header__link'>
					_about-me
				</NavLink>
				<NavLink className='header__link'>
					_projects
				</NavLink>
			</nav>
			<Link className="header__contact">
				_contact-me
			</Link>
		</header>
	);
}

export default AppHeader;