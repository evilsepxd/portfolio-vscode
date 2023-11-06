

import './contacts.scss';

function Contacts() {
	return (
		<div className="contacts">
			<div className="contacts__title">contacts</div>
			<ul className="contacts__list">
				<li className="contacts__item">
					<a href="mailto:petrkoval.work@gmail.com">petrkoval.work</a>
				</li>
				<li className="contacts__item">
					<a href="https://wa.me/79002225868">+7900222****</a>
				</li>
			</ul>
		</div>
	);
}

export default Contacts;