import './snake/js/main';

import bgBlurSrc from '../../../assets/img/bg-blurs.svg';
import boltUpLeftSrc from './snake/assets/img/bolt-up-left.svg';
import boltUpRighttSrc from './snake/assets/img/bolt-up-right.svg';
import boltDownLeftSrc from './snake/assets/img/bolt-down-left.svg';
import boltDownRightSrc from './snake/assets/img/bolt-down-right.svg';

import './helloPage.scss';

const HelloPage = () => {
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
					&#47;&#47; complete the game to continue <br/>
					&#47;&#47; you can also see it on my Github page
				</div>
				<div className="hello__link">
					<span className="const">const</span>
					<span className="const-name"> githubLink </span>
					<span>= </span>
					<a href='https://evilsepxd.github.io/snake/' className="const-value">&quot;https://evilsepxd.github.io/snake/&quot;</a>
				</div>
			</div>
			<div className="hello__game">
				<img src={bgBlurSrc} alt="bg-blur" className="hello__bg" />

				<div className="game__field">
					<canvas className="canvas" width="240" height="405"></canvas>
				</div>

				<img src={boltUpLeftSrc} alt="bolt" className="game__bolt game__bolt_up-left"/>
				<img src={boltUpRighttSrc} alt="bolt" className="game__bolt game__bolt_up-right"/>
				<img src={boltDownLeftSrc} alt="bolt" className="game__bolt game__bolt_down-left"/>
				<img src={boltDownRightSrc} alt="bolt" className="game__bolt game__bolt_down-right"/>

				<div className="arrows">
					
				</div>

				<div className="food">
					<div className="food__text text">
						&#47;&#47; food left
					</div>
					<div className="food__inner"></div>
				</div>
			</div>
		</section>
	);
}

export default HelloPage;