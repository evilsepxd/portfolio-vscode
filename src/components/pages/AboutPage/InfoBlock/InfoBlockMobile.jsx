

import { useSelector } from 'react-redux';

import { getInfoType, getCurrentFile } from '../aboutSlice';

import getText from './infos';

import './infoBlock.scss';

function InfoBlockMobile() {
	
	const infoType = useSelector(getInfoType);
	const currentFile = useSelector(getCurrentFile);
	
	const text = getText(currentFile);

	return (
		<div className="info">
			<h2 className="info__title">
				// { infoType }-info
				<span> / { currentFile }</span>
			</h2>
			<div className="info__text">
				{ text }
			</div>
		</div>
	);
}

export default InfoBlockMobile;