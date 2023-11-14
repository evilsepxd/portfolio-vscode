

import { useState, useEffect } from 'react';

import { Highlighter } from 'rc-highlight';

import './code.scss';

function Code() {

	const [lineNums, setLineNums] = useState([
		<li className="code__number" key={0}>
			1
		</li>
	]);

	useEffect(() => {
		const lines = document.querySelectorAll('.code .rc-hl-code-line');
		const lineNums = [];

		lines.forEach((line, i) => {
			lineNums.push(
				<li className="code__number" key={i}>
					{ i + 1 }
				</li>
			);
		});

		setLineNums(lineNums);
	}, []);
	
	return (
		<div className="code">
			<div className="code__wrapper">
				<ul className="code__nums">
					{ lineNums }
				</ul>
				<div className="code__text">
					<Highlighter copyToClipBoard={false}>
{`const button = document.querySelector('#sendBtn');

const message = {
  name: "Jonathan Davis",
  email: "",
  message: "",
  date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
  form.send(message);
});`}
					</Highlighter>
				</div>
			</div>
		</div>
	);
}

export default Code;