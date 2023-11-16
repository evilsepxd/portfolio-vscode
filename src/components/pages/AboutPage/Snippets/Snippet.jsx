
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from "react";
import { Highlighter } from "rc-highlight";

import avatarImgSrc from '../../../../assets/img/aboutPage/avatar.jpeg';
import detailsIconSrc from '../../../../assets/icons/aboutPage/comments-icon.svg';
import starIconSrc from '../../../../assets/icons/aboutPage/star.svg';
import starFilledIconSrc from '../../../../assets/icons/aboutPage/star-filled.svg';

import './snippets.scss';

function Snippet({ time, text, details, id }) {
	const isMobile = useMediaQuery({
		query: '(max-width: 1200px)'
	});

	const [starred, setStarred] = useState(false);
	const detailsRef = useRef(null);

	const toggleStar = () => {
		setStarred(old => !old);
	}

	const toggleDetails = () => {
		const detailsHeight = detailsRef.current.scrollHeight;
		const currentHeight = +detailsRef.current.style.height.slice(0, -2);
		if (currentHeight) {
			detailsRef.current.style.height = 0;
		} else {
			detailsRef.current.style.height = detailsHeight + 'px';
		}
	}

	useEffect(() => {
		const starredLocal = JSON.parse(localStorage.getItem(`starred${id}`));
		if (starredLocal === null) {
			localStorage.setItem(`starred${id}`, false);
		} else if (starredLocal === true) {
			setStarred(true);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(`starred${id}`, starred);
	}), [starred]

	return(
		<div className="snippets__item">
			<div className="snippets__header">
				<div className="snippets__bio">
					<a href='https://github.com/evilsepxd' className="snippets__img-wrapper">
						<img src={avatarImgSrc} alt="avatar" className="snippets__img" />
					</a>
					<div className="snippets__bio-inner">
						<a href='https://github.com/evilsepxd' className="snippets__name">@evilsepxd</a>
						<div className="snippets__time">{ isMobile? '' : 'Created ' }{ time } ago</div>
					</div>
				</div>
				<div className="snippets__btns">
					<button className="snippets__details-btn" onClick={toggleDetails}>
						<img src={detailsIconSrc} alt="" className="snippets__btns-icon" />
						<div className="snippets__btns-text">details</div>
					</button>
					{
						!isMobile &&
						<button className="snippets__stars" onClick={toggleStar}>
							<img src={starred ? starFilledIconSrc : starIconSrc} alt="" className="snippets__btns-icon" />
							<div className="snippets__btns-text">{starred ? 'starred' : 'unstarred'}</div>
						</button>
					}
				</div>
			</div>
			<div className="snippets__text">
				<Highlighter copyToClipBoard={false}>
					{ text }
				</Highlighter>
			</div>
			<div className="snippets__details" ref={detailsRef}>
				<div className="snippets__details-text">
					{ details }
				</div>
				<button className="snippets__details-close" onClick={toggleDetails}>
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
		</div>
	);
}

export default Snippet;