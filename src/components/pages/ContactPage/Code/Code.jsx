

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Highlighter } from 'rc-highlight';

import { getName, getEmail, getMessage } from '../contactSlice';

import './code.scss';

function Code() {
	const name = useSelector(getName);
	const email = useSelector(getEmail);
	const message = useSelector(getMessage);

	const date = new Date();
	const currentDate = date.toLocaleString('en-US', { month: 'long', weekday: 'short', day: 'numeric' });

	const [lineNums, setLineNums] = useState([
		<li className="code__number" key={0}>
			1
		</li>
	]);

	useEffect(() => {
		const container = document.querySelector('.code .main-highlighter-relative');
		const lineHeight = 20.8;
		const lines = Math.round(container.scrollHeight / lineHeight);
		console.log(container.scrollHeight);
		const lineNums = [];

		for (let i = 0; i < lines; i++) {
			lineNums.push(
				<li className="code__number" key={i}>
					{ i + 1 }
				</li>
			);
		}

		setLineNums(lineNums);
	}, [name, email, message]);
	
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
  name: "${name}",
  email: "${email}",
  message: "${message}",
  date: "${currentDate}"
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