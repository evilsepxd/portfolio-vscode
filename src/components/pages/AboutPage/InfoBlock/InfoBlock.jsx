

import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import getText from './infos';

import './infoBlock.scss';

function InfoBlock() {

	const textRef = useRef(null);
	const currentFile = useSelector(state => state.about.currentFile);

	const [lineNums, setLineNums] = useState([
		<li className="info__line-num" key={0}>
			1
		</li>
	]);
	const [comments, setComments] = useState([
		<li className="info__line-num" key={0}>
			*
		</li>
	]);

	const text = getText(currentFile);

	useEffect(() => {
		const lines = textRef.current.getClientRects().length;
		const lineNums = [];
		const comments = [];
		let text = '*';
		
		for (let i = 0; i <= lines; i++) {
			lineNums.push(
				<li className="info__line-num" key={i}>
					{ i + 1 }
				</li>
			);
			if (i === 0) text = '/*';
			else if (i === lines) text = '*/';
			else text = '*';
			comments.push(
				<li className="info__line-comment" key={i}>
					{ text }
				</li>
			);
		}

		setComments(comments);
		setLineNums(lineNums);
	}, [currentFile]);

	return (
		<div className="info">
			<ul className="info__nums">
				{ lineNums }
			</ul>
			<ul className="info__comments">
				{ comments }
			</ul>
			<div className="info__text">
				
				<span ref={textRef}>{ text }</span>
			</div>
		</div>
	);
}

export default InfoBlock;