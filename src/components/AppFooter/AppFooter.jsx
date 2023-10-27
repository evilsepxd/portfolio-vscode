import { Link } from "react-router-dom";

import vkIconSrc from '../../assets/icons/Frame-1.svg';
import tgIconSrc from '../../assets/icons/Frame.svg';
import gitHubIconSrc from '../../assets/icons/github.svg';

const AppFooter = () => {
	return (
		<header className="footer">
			<div className="footer__text">
				find me in:
			</div>
			<div className="footer__links">
				<Link className="footer__link">
					<img src={vkIconSrc} alt="vk" className="footer__icon" />
				</Link>
				<Link className="footer__link">
					<img src={tgIconSrc} alt="telegram" className="footer__icon" />
				</Link>
			</div>
			<Link className="footer__user">
				<div className="footer__user-text">
					@evilsepxd
				</div>
				<img src={gitHubIconSrc} alt="github" className="footer__user-icon"/>
			</Link>
		</header>
	);
}

export default AppFooter;