import { Link } from "react-router-dom";

import vkIconSrc from '../../assets/icons/vk.svg';
import tgIconSrc from '../../assets/icons/telegram.svg';
import gitHubIconSrc from '../../assets/icons/github.svg';

import './appFooter.scss';

const AppFooter = () => {
	return (
		<header className="footer">
			<div className="footer__text">
				find me in:
			</div>
			<div className="footer__links">
				<Link to='https://vk.com/ssssenselessss' className="footer__link">
					<img src={vkIconSrc} alt="vk" className="footer__icon" />
				</Link>
				<Link to='https://t.me/sense_lesss' className="footer__link">
					<img src={tgIconSrc} alt="telegram" className="footer__icon" />
				</Link>
			</div>
			<Link to='https://github.com/evilsepxd' className="footer__user">
				<div className="footer__user-text">
					@evilsepxd
				</div>
				<img src={gitHubIconSrc} alt="github" className="footer__user-icon"/>
			</Link>
		</header>
	);
}

export default AppFooter;