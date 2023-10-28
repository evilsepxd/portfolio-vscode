

import bgBlurSrc from '../../../assets/img/bg-blurs.svg';

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
					=
					<span className="const-value"> &quot;https://evilsepxd.github.io/snake/&quot;</span>
				</div>
			</div>
			<div className="hello__game">
				<img src={bgBlurSrc} alt="bg-blur" className="hello__bg" />
			</div>
		</section>
	);
}

export default HelloPage;