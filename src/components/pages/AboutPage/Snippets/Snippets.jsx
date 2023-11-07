

import Scroll from '../../../Scroll/Scroll';

import './snippets.scss';

function Snippets() {
	return (
		<div className="snippets">
			<div className="snippets__comment">
				// Code snippet showcase:
			</div>
			<div className="snippets__inner">
				<Snippet />
				<Snippet />
			</div>
			<Scroll />
		</div>
	);
}

function Snippet() {
	return(
		<div className="snippets__item">
			<h1>Snippet</h1>
		</div>
	);
}

export default Snippets;