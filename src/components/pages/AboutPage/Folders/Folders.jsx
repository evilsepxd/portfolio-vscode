

import './folders.scss';

function Folders() {
	return (
		<>
			<div className="folders">
				<div className="folders__current">
					personal-info
				</div>
				<ul className='folders__list'>
					<li className='folders__item active'>bio</li>
					<li className='folders__item'>interests</li>
					<li className='folders__item'>education</li>
					<li className='folders__item'>high-school</li>
					<li className='folders__item'>university</li>
				</ul>
			</div>
		</>
	);
}

export default Folders;