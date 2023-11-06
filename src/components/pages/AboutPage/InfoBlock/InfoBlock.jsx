

import './infoBlock.scss';

import { useRef, useState, useEffect } from "react";

function InfoBlock() {

	const textRef = useRef(null);
	const [lineNums, setLineNums] = useState([]);

	const text = `
		/**
		 * About me
		 * I have 5 years of еxperience in web
		 * development lorem ipsum dolor sit amet, 
		 * consectetur adipiscing elit, sed do eiusmod
		 * tempor incididunt ut labore et dolore
		 * magna aliqua. Ut enim ad minim veniam,
		 * quis nostrud exercitation ullamco laboris
		 * nisi ut aliquip ex ea commodo consequat.
		 * Duis aute irure dolor in reprehenderit in
		 *
		 * Duis aute irure dolor in reprehenderit in
		 * voluptate velit esse cillum dolore eu fugiat 
		 * nulla pariatur. Excepteur sint occaecat 
		 * officia deserunt mollit anim id est laborum.
		 */
	`;

	const makeNumbers = () => {
		const lineNums = [];
		const lineHeight = 16;
		const lines = Math.floor(textRef.current.scrollHeight / lineHeight);
		
		for (let i = 0; i < lines; i++) {
			lineNums.push(
				<li className="info__line-num">
					{ i + 1 }
				</li>
			);
		}

		setLineNums(lineNums);
	}

	useEffect(makeNumbers, []);

	return (
		<div className="info">
			<ul className="info__nums">
				{ lineNums }
			</ul>
			<div className="info__text" ref={textRef}>
				{ text }
			</div>
		</div>
	);
}

export default InfoBlock;