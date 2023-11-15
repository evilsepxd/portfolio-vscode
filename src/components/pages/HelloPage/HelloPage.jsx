import { useMediaQuery } from 'react-responsive';

import SnakeGame from '../../SnakeGame/SnakeGame';

import bgGreenBlurSrc from '../../../assets/img/helloPage/bg-green-blur.svg';
import bgBlueBlurSrc from '../../../assets/img/helloPage/bg-blue-blur.svg';

import './helloPage.scss';

const HelloPage = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 1200px)'
	});

	return (
		<section className="hello page">
			<div className="hello__titles">
				<h2 className="hello__subtitle">
					Hi all. I am
				</h2>
				<h1 className="hello__title">
					Peter Koval
				</h1>
				<div className="hello__title-descr">
					&gt; Front-end developer
				</div>
			</div>
			<div className="hello__descrs">
				<div className="hello__descr">
					{
						isMobile ?
							<>
								&#47;&#47; find my profile on Github:
							</> :
							<>
								&#47;&#47; complete the game to continue <br/>
								&#47;&#47; you can also see it on my Github page
							</>
					}
				</div>
				<div className="hello__link">
					<span className="const">const</span>
					<span className="const-name"> githubLink </span>
					<span>= </span>
					<a href='https://evilsepxd.github.io/snake/' className="const-value">
						&quot;https://{ isMobile && <br/> }evilsepxd.github.io/snake/&quot;
					</a>
				</div>
			</div>
			{ !isMobile && <SnakeGame/> }
			{
				isMobile &&
				<>
					<img src={bgGreenBlurSrc} alt="bg-blur" className="hello__bg hello__bg_green" />
					<img src={bgBlueBlurSrc} alt="bg-blur" className="hello__bg hello__bg_blue" />
				</>
			}
		</section>
	);
}

export default HelloPage;