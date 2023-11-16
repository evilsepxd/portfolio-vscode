

import Folder from './Folder';

import { useSelector } from 'react-redux';

import { getFolders } from '../aboutSlice';

import './folders.scss';

function FoldersMobile({ infoType }) {

	const folders = useSelector(getFolders);

	return (
		<div className='folders'>
			<ul className='folders__list'>
				<Folder
					folders={folders[infoType]}
				/>
			</ul>
		</div>
	);
}

export default FoldersMobile;