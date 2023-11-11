
import { setCurrentFile, deleteOpenedFile } from '../pages/AboutPage/aboutSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './tabs.scss';

function Tabs({ files, className }) {
	const dispatch = useDispatch();
	const openedFiles = useSelector(state => state.about.openedFiles);
	const currentFile = useSelector(state => state.about.currentFile);

	useEffect(() => {
		if (openedFiles.indexOf(currentFile) < 0) {
			dispatch(setCurrentFile(files[0]));
		}
	}, [files]);

	return (
			<div className={`tabs ${className}`}>
				{
					files.map((file, i) => <Tab text={file} key={i} />)
				}
			</div>
	);
}

function Tab({ text }) {
	const dispatch = useDispatch();
	const currentFile = useSelector(state => state.about.currentFile);

	const deleteFile = (file) => {
		dispatch(deleteOpenedFile(file));
	}

	const setFile = (file, e) => {
		const t = e.target;
		if (t.classList.contains('tabs__item') || t.classList.contains('tabs__text')) {
			dispatch(setCurrentFile(file));
		}
	}

	return (
		<div
			className={`tabs__item ${currentFile === text ? 'active' : ''}`}
			onClick={(e) => setFile(text, e)}
		>
			<div className="tabs__text">{ text }</div>
			<button className="tabs__icon" onClick={() => deleteFile(text)}>
				<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_64_1646)">
						<path d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z" fill="#607B96"/>
					</g>
					<defs>
						<clipPath id="clip0_64_1646">
							<rect width="18" height="18" fill="white" transform="translate(0.347656 0.779297)"/>
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	);
}

export default Tabs;