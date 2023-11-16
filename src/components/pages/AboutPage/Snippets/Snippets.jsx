
import { useRef } from "react";

import Snippet from './Snippet';

import './snippets.scss';

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

export default Snippets;