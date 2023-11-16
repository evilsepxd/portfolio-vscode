

import Folder from './Folder';

import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { getFolders } from '../aboutSlice';

import menuArrowIconSrc from '../../../../assets/icons/aboutPage/menu-arrow.svg';

import './folders.scss';

function Folders() {

	const containerRef = useRef(null);
	const btnRef = useRef(null);
	const [contState, setContState] = useState(true);
	
	const infoType = useSelector(state => state.about.infoType);

	const handleClick = () => {
		setContState(old => !old);
	}

	const folders = useSelector(getFolders);

	return (
		<div className={`folders${contState ? ' active' : ''}`} ref={containerRef}>
			<button className="folders__current" ref={btnRef} onClick={handleClick}>
				<img src={menuArrowIconSrc} alt="arrow" className="folders__current-icon" />
				<div className="folders__current-text">{ infoType }-info</div>
			</button>
			<div className="folders__inner">
				<ul className='folders__list'>
					<Folder
						folders={folders[infoType]}
					/>
				</ul>
			</div>
		</div>
	);
}

export default Folders;