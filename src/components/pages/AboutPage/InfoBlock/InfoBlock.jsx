

import Scroll from '../../../Scroll/Scroll';

import './infoBlock.scss';

import { useRef, useState, useEffect } from "react";

function InfoBlock() {

	const textRef = useRef(null);

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

	const text = 'Обо мне. Я - начинающий front-end разработчик. Сейчас учусь на 1 курсе магистратуры в НИУ "МЭИ" по профилю проектировщика электросетей, ранее окончил бакалавриат по тому же направлению. Программированием начал увлекаться еще со школы, но не всерьёз, делая длительные перерывы и не зная, в какую сторону развиваться. Изучал python, C++, также и front-end разработку, программировал для себя arduino. Не так давно одногруппник вновь напомнил мне о мире программирования, предложив пройти курс по веб-разработке. Теперь я погрузился в нее с головой.';

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
	}, []);

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
			<Scroll />
		</div>
	);
}

export default InfoBlock;