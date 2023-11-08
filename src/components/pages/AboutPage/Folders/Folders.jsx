

import Folder from './Folder';

import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import menuArrowIconSrc from '../../../../assets/icons/aboutPage/menu-arrow.svg';

import './folders.scss';

function Folders() {
	const containerRef = useRef(null);
	const btnRef = useRef(null);
	
	const infoType = useSelector(state => state.about.infoType);

	useEffect(() => {
		btnRef.current.addEventListener('click', () => {
			if (containerRef.current.classList.contains('active')) {
				containerRef.current.classList.remove('active');
				containerRef.current.style.maxHeight = '41.6px';
			} else {
				containerRef.current.classList.add('active');
				containerRef.current.style.maxHeight = '100%';
			}
		});
	}, []);

	return (
		<>
			<div className="folders active" ref={containerRef}>
				<button className="folders__current" ref={btnRef}>
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