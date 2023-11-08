

import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';

import { setCurrentFile } from '../aboutSlice';

import arrowIconSrc from '../../../../assets/icons/aboutPage/folder-arrow.svg';

import firstFolderIconSrc from '../../../../assets/icons/aboutPage/folder-1.svg';
import secondFolderIconSrc from '../../../../assets/icons/aboutPage/folder-2.svg';
import thirdFolderIconSrc from '../../../../assets/icons/aboutPage/folder-3.svg';

import fileIconSrc from '../../../../assets/icons/aboutPage/folder-file.svg';

function Folder({ folders }) {
	const folderIcons = [ firstFolderIconSrc, secondFolderIconSrc, thirdFolderIconSrc ];
	const foldersItemRefs = useRef([]);
	const foldersBtnRefs = useRef([]);
	const foldersRefs = useRef([]);

	const dispatch = useDispatch();

	useEffect(() => {
		foldersBtnRefs.current.forEach((btn, i) => {
			btn.addEventListener('click', (e) => {
				if (e.currentTarget === btn) {
					if (foldersItemRefs.current[i].classList.contains('active')) {
						foldersItemRefs.current[i].classList.remove('active');
						foldersItemRefs.current[i].style.maxHeight = '22.2px';
					} else {
						const itemHeight = foldersItemRefs.current[i].scrollHeight;

						foldersItemRefs.current[i].classList.add('active');
						foldersItemRefs.current[i].style.maxHeight = itemHeight + 'px';
					}
				}
			});
		});
	}, []);

	return (
		<>
			{
				folders.map((folder, i) => {
					return (
						<li ref={elem => foldersItemRefs.current[i] = elem} key={i} className="folders__item">
							<button ref={elem => foldersBtnRefs.current[i] = elem} className='folders__btn'>
								<img src={arrowIconSrc} alt="arrow" className="folders__btn-arrow" />
								<div className="folders__btn-name">
									<img src={folderIcons[i]} alt="folder" className="folders__btn-icon" />
									<div className="folders__btn-text">{folder.name}</div>
								</div>
							</button>
							<ul ref={elem => foldersRefs.current[i] = elem} className="folders__folder">
								{
									folder.files.map((file, i) => {
										return (
											<li
												key={i}
												className='folders__file'
												onClick={() => dispatch(setCurrentFile(file))}
											>
												<button className="folders__file-btn">
													<img src={fileIconSrc} alt="file" className="folders__file-icon" />
													<div className="folders__file-text">{file}</div>
												</button>
											</li>
										);
									})
								}
							</ul>
						</li>
					);
				})
			}
		</>
	);
}

export default Folder;