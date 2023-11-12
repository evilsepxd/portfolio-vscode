

import Folder from './Folder';

import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

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

	const folders = {
		professional: [
			{
				name: 'skills',
				files: [
					'projects',
					'stack',
				]
			},
			{
				name: 'education',
				files: [
					'languages',
					'education',
					'courses'
				]
			},
			{
				name: 'experience',
				files: [
					'experience'
				]
			}
		],
		personal: [
			{
				name: 'bio',
				files: [
					'aboutMe',
					'residence'
				]
			},
			{
				name: 'contacts',
				files: [
					'contacts'
				]
			}
		],
		hobbies: [
			{
				name: 'hobbies',
				files: [
					'hobbies'
				]
			},
			{
				name: 'interests',
				files: [
					'moviesAndGames',
					'sports'
				]
			}
		]
	}

	return (
		<>
			<div className={`folders${contState ? ' active' : ''}`} ref={containerRef}>
				<button className="folders__current" ref={btnRef} onClick={handleClick}>
					<img src={menuArrowIconSrc} alt="arrow" className="folders__current-icon" />
					<div className="folders__current-text">{ infoType }</div>
				</button>
				<div className="folders__inner">
					<ul className='folders__list'>
						<Folder
							folders={folders[infoType]}
						/>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Folders;