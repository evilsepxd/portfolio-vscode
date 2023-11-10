
import { useEffect, useRef, useState } from "react";
import { Highlighter } from "rc-highlight";

import avatarImgSrc from '../../../../assets/img/aboutPage/avatar.jpeg';
import detailsIconSrc from '../../../../assets/icons/aboutPage/comments-icon.svg';
import starIconSrc from '../../../../assets/icons/aboutPage/star.svg';
import starFilledIconSrc from '../../../../assets/icons/aboutPage/star-filled.svg';

import './snippets.scss';

// добавить взаимодействие с localStorage
// чтобы при клике на star, у пользователя оставалось это в памяти

function Snippets() {
	const containerRef = useRef(null);

	const snippets = [
		{
			time: '2 weeks',
			text:
`export const apiSlice = createApi({
  reducerPath: '/api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Characters', 'Episodes'],
  endpoints: builder => ({
    getCharacters: builder.query({
      query: ({
        page,
        name,
        status,
        species,
        gender
      }) => {
        if (name) request += \`&name=\${name}\`;
        if (status) request += \`&status=\${status}\`;
        if (species) request += \`&species=\${species}\`;
        if (gender) request += \`&gender=\${gender}\`;
        console.log(request);
        return request;
      },
      providesTags: ['Characters']
    })
  })
});`
		},
		{
			time: '3 months',
			text:
`const handleClick = (e, dataType) => {
  const t = e.target;

  dispatch(changeInfoType(dataType));

  btnRefs.current.forEach(btn => {
    btn.parentNode.classList.remove('active');

    if (t === btn) {
      t.parentNode.classList.add('active');
    }
  });
}`
		}
	]

	return (
		<div className="snippets" ref={containerRef}>
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
		</div>
	);
}

function Snippet({ time, text, id }) {
	const [starred, setStarred] = useState(false);

	const toggleStar = () => {
		setStarred(old => !old);
	}

	return(
		<div className="snippets__item">
			<div className="snippets__header">
				<div className="snippets__bio">
					<a href='https://github.com/evilsepxd' className="snippets__img-wrapper">
						<img src={avatarImgSrc} alt="avatar" className="snippets__img" />
					</a>
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
					<button className="snippets__stars" onClick={toggleStar}>
						<img src={starred ? starFilledIconSrc : starIconSrc} alt="" className="snippets__btns-icon" />
						<div className="snippets__btns-text">{starred ? 'starred' : 'unstarred'}</div>
					</button>
				</div>
			</div>
			<div className="snippets__text">
				<Highlighter copyToClipBoard={false}>
					{ text }
				</Highlighter>
			</div>
		</div>
	);
}

export default Snippets;