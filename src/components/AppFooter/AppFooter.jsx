import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import vkIconSrc from '../../assets/icons/helloPage/vk.svg';
import tgIconSrc from '../../assets/icons/helloPage/telegram.svg';
import gitHubIconSrc from '../../assets/icons/helloPage/github.svg';

import './appFooter.scss';

const AppFooter = ({ visible }) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 1200px)'
	});

	const link = (
		<Link to='https://github.com/evilsepxd' className={`footer__${isMobile ? 'link' : 'user'}`}>
			{
				!isMobile &&
				<div className="footer__user-text">
					@evilsepxd
				</div>
			}
			<img src={gitHubIconSrc} alt="github" className="footer__user-icon"/>
		</Link>
	);
	
	return (
		
		<CSSTransition
			in={isMobile ? visible : true}
			timeout={300}
			classNames='footer'
			unmountOnExit
		>
			<footer className="footer">
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
					{
						isMobile && link
					}
				</div>
				{
					!isMobile && link
				}
			</footer>
		</CSSTransition>
	);
}

export default AppFooter;