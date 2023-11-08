

import Folder from './Folder';

import { useSelector } from 'react-redux';

import menuArrowIconSrc from '../../../../assets/icons/aboutPage/menu-arrow.svg';

import './folders.scss';

function Folders() {
	
	const infoType = useSelector(state => state.about.infoType);

	return (
		<>
			<div className="folders">
				<button className="folders__current active">
					<img src={menuArrowIconSrc} alt="arrow" className="folders__current-icon" />
					<div className="folders__current-text">{ infoType }</div>
				</button>
				<ul className='folders__list'>
					<Folder
						folders={[
							{
								name: 'bio',
								files: [
									'high-school',
									'university'
								]
							},
							{
								name: 'interests',
								files: [
									'high-school',
									'university'
								]
							},
							{
								name: 'education',
								files: [
									'high-school',
									'high-school',
									'high-school',
									'high-school',
									'university'
								]
							}
						]}
					/>
				</ul>
			</div>
		</>
	);
}

export default Folders;