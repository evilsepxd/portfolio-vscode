
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
        return request;
      },
      providesTags: ['Characters']
    })
  })
});`,
			details: 'Это пример создания фрагмента sliceApi из моего проекта "rick-and-morty", где используется redux. В примере ипсользуется RTK Query для создания запросов на сервер, используя Rick-And-Morty API. Когда в store диспетчится action, он принимает несколько необязательных аргументов, которые в итоге влияют на результат ответа сервера. Этими аргументами являются фильтры, с которыми взаимодействует пользователь.'
		},
		{
			time: '3 months',
			text:
`const [process, setProcess] = useState('waiting');

const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

  setProcess('loading');

  try {
    const response = await fetch(url, {method, body, headers});

    if (!response.ok) {
      throw new Error(\`Couldn't fetch \${url}, status: \${response.status}\`);
    }

    const data = await response.json();

    setProcess('confirmed');
    return data;
  } catch(e) {
    setProcess('error');
    throw e;
  }

}, []);`,
			details: 'Фрагмент кастомного хука useHTTP, используемого для отправки запросов для сервер, и обновляющим state в зависимости от состояния запроса. Использовался в моем проекте "Marvel".'
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
								details={snippet.details}
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

function Snippet({ time, text, details, id }) {
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
						<div className="snippets__time">Created { time } ago</div>
					</div>
				</div>
				<div className="snippets__btns">
					<button className="snippets__details-btn" onClick={toggleDetails}>
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

export default Snippets;