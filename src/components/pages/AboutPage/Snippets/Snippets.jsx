

import Scroll from '../../../Scroll/Scroll';

import avatarImgSrc from '../../../../assets/img/aboutPage/avatar.jpeg';
import detailsIconSrc from '../../../../assets/icons/aboutPage/comments-icon.svg';
import starIconSrc from '../../../../assets/icons/aboutPage/star.svg';
import starFilledIconSrc from '../../../../assets/icons/aboutPage/star-filled.svg';

import './snippets.scss';

// добавить взаимодействие с localStorage
// чтобы при клике на star, у пользователя оставалось это в памяти

function Snippets() {
	const snippets = [
		{
			time: '2 weeks',
			text: `
				import avatarImgSrc from '../../../../assets/img/aboutPage/avatar.jpeg';
				import detailsIconSrc from '../../../../assets/icons/aboutPage/comments-icon.svg';
				import starIconSrc from '../../../../assets/icons/aboutPage/star.svg';
				import starFilledIconSrc from '../../../../assets/icons/aboutPage/star-filled.svg';
			`
		},
		{
			time: '3 months',
			text: `
				const handleClick = (e, dataType) => {
					const t = e.target;
			
					dispatch(changeInfoType(dataType));
			
					btnRefs.current.forEach(btn => {
						btn.parentNode.classList.remove('active');
			
						if (t === btn) {
							t.parentNode.classList.add('active');
						}
					});
				}
			`
		}
	]

	return (
		<div className="snippets">
			<div className="snippets__comment">
				// Code snippet showcase:
			</div>
			<div className="snippets__inner">
				{
					snippets.map((snippet, i) => {
						return (
							<Snippet
								time={snippet.time}
								text={snippet.text}
								id={i}
								key={i}
							/>
						);
					})
				}
			</div>
			<Scroll />
		</div>
	);
}

function Snippet({ time, text, id }) {
	return(
		<div className="snippets__item">
			<div className="snippets__header">
				<div className="snippets__bio">
					<img src={avatarImgSrc} alt="avatar" className="snippets__img" />
					<div className="snippets__bio-inner">
						<a href='https://github.com/evilsepxd' className="snippets__name">@evilsepxd</a>
						<div className="snippets__time">Created { time } ago</div>
					</div>
				</div>
				<div className="snippets__btns">
					<button className="snippets__details">
						<img src={detailsIconSrc} alt="" className="snippets__btns-icon" />
						<div className="snippets__btns-text">details</div>
					</button>
					<button className="snippets__stars">
						<img src={starIconSrc} alt="" className="snippets__btns-icon" />
						<div className="snippets__btns-text">stars</div>
					</button>
				</div>
			</div>
			<div className="snippets__text">
				{ text }
			</div>
		</div>
	);
}

export default Snippets;