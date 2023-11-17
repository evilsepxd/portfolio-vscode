import{r as o,u,j as e,s as m,n as x,a as g}from"./index-db048b75.js";import{u as j}from"./menu-arrow-184dcede.js";import{z as A}from"./index.es-7ecaab28.js";const S="/portfolio-vscode/assets/folder-arrow-cac3ab80.svg",_="/portfolio-vscode/assets/folder-1-d1f3cf5d.svg",I="/portfolio-vscode/assets/folder-2-75c1864f.svg",N="/portfolio-vscode/assets/folder-3-23cd5d00.svg",v="/portfolio-vscode/assets/folder-file-bdd873b4.svg";function k({folders:i}){const l=[_,I,N],t=o.useRef([]),a=o.useRef([]),d=j(),p=u(r=>r.about.openedFiles),f=r=>{a.current.forEach((n,s)=>{if(r.currentTarget===n)if(t.current[s].classList.contains("active"))t.current[s].classList.remove("active"),t.current[s].style.maxHeight="22.2px";else{const c=t.current[s].scrollHeight;t.current[s].classList.add("active"),t.current[s].style.maxHeight=c+"px"}})};return e.jsx(e.Fragment,{children:i.map((r,n)=>e.jsxs("li",{ref:s=>t.current[n]=s,className:"folders__item",children:[e.jsxs("button",{ref:s=>a.current[n]=s,onClick:f,className:"folders__btn",children:[e.jsx("img",{src:S,alt:"arrow",className:"folders__btn-arrow"}),e.jsxs("div",{className:"folders__btn-name",children:[e.jsx("img",{src:l[n],alt:"folder",className:"folders__btn-icon"}),e.jsx("div",{className:"folders__btn-text",children:r.name})]})]}),e.jsx("ul",{className:"folders__folder",children:r.files.map((s,c)=>e.jsx("li",{className:"folders__file",children:e.jsxs("button",{className:"folders__file-btn",onClick:()=>{d(m(s)),p.indexOf(s)<0&&d(x(s))},children:[e.jsx("img",{src:v,alt:"file",className:"folders__file-icon"}),e.jsx("div",{className:"folders__file-text",children:s})]})},c))})]},n))})}const h={aboutMe:'Обо мне. Я - начинающий front-end разработчик. Сейчас учусь на 1 курсе магистратуры в НИУ "МЭИ" по профилю проектировщика электросетей, ранее окончил бакалавриат по тому же направлению. Программированием начал увлекаться еще со школы, но не всерьёз, делая длительные перерывы и не зная, в какую сторону развиваться. Изучал python, C++, также и front-end разработку, программировал для себя arduino. Не так давно одногруппник вновь напомнил мне о мире программирования, предложив пройти курс по веб-разработке. Теперь я погрузился в нее с головой',contacts:'ФИО и контактная информация. Полное ФИО: Коваль Пётр Алексеевич. Мне 22 года. Мои контакты размещены в разделе "contacts" и в футере сайта. Также со мной можно связаться со страницы "_contact-me"',residence:"Родился в городе Владивосток, позже переехал в Москву для учебы в университете. На бакалавриате жил на съёмных квартирах, при поступлении в магистратуру получил место в общежитии в районе Лефортово. В данный момент проживаю в нем",languages:"Еще в дошкольном возрасте я начал изучать английский язык. Сейчас изучаю профильный технический в институте. Оцениваю уровень владения на B2. Также в школе с 5 по 11 класс изучал китайский, но особо не был вовлечен в процесс, поэтому могу сказать только 你好",familyStatus:"В браке не состою, детей не имею",education:"Во Владивостоке окончил Гимназию №1. Позже, в Москве, отучился в НИУ МЭИ по профилю проектировщика электрических сетей. Сейчас продолжаю учиться в магистратуре по этому же направлению.",courses:' Прошел курсы по повышению квалификации по направлению "Цифровизация и разработка информационных систем". Также прошел курсы по Web-разработке (HTML + CSS, JS + React + Redux)',experience:"Нет опыта работы в сфере IT. Имею месяц опыта работы помощником электромонтажника и месяц работы судовым электромонтажником. В данный момент работаю в компании СП-Инновация на должности инженера-проектироващика 3 категории.",projects:"Примеры проектов моих работ по верстке сайтов и созданию веб-приложений можно найти на вкладке _projects",stack:`Что я использую в работе:
HTML5, CSS3;
препроцессоры SASS/SCSS;
БЭМ;
JS (ES6+);
React;
Redux, RTK;
извлечение необходимых данных из графических редакторов (Photoshop, Figma);
Git, Gulp, Webpack, Vite;`,hobbies:"В свободное время увлекаюсь игрой на гитаре, написанием музыки в Fl Studio, просмотром сериалов или играми с друзьями. Также пишу pet-проекты, изучаю новые для себя технологии в программировании",moviesAndGames:'Люблю сериал "Рик и Морти". В данный момент смотрю "Лучше позвоните Солу". Раньше много времени играл в Dota 2, сейчас иногда играю с друзьями',sports:"Долгое время в детстве занимался плаванием. В возрасте 9-10 лет начал заниматься большим теннисом. Позднее завоевал много титулов в Приморском крае и на Дальнем Востоке. На 1-2 курсе играл за команду института, позже прекратил, чтобы больше времени посвящать учебе"};function F(i){return h[i]?h[i]:"Здесь пока нет информации"}const b="data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIADAAMAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APdpD/Ks64k+bFWJJOT7VnXD5JNckmbLQrXEgSN3YgKoJJPavBNZv4r3VJ7mYsXmcssaDLY7fpXrPjfVP7M8MXDjl5f3agd89f0Brxy2UC7VmjaQ5BkIxyeuPwoi7alW5juvD+j6LY2UOs6qD5cbq8cQ6sQQcEGvQ4fENh4osJrdrdXcjJinjKnb6r/iDXiuta5LLcxRC1kitI1ARSdw9zXYaXqsMfhxbiK7Nx5Tb0Eh/excjchOeVPY1pzNLQlwT0aPSoNStryLfFKD6g8EVFK248V4JqHjSRbgrbH5CDkn1/yKx4fGmsW0rPFfSqT6NW9bD07+5IhSfU9D+JV/597Dp0cyJ5Mefm6GR+APyH61h6PZJFEFMivIB8/GCD9KoWt7D4iuvttzN/pwdWcOflcgcYx0OAa2obfzLrzF4f7vtXLVpuCSZ04fVtjrm2jZDlQcetcqskltdXKISd4EYUfUE/5966iKC/a88md2ZCdu1AMke2auW2iaVa3m+wEs8jHaGmAJDZ/hI9z19hV4ek5MWKqpLY8fdiTmmeg9TXW+O7W1s9Vhs7eyS3ljT94UIw4PIOB079ea5MDLMew+UfWt4S54qS6nPJWdh8M8kT7o3K87uDXoVpfSzLFMjAhlDdcV56I8EcV1Xhl7i1uVDIZY858l1JX9CMUToupZLc0pVOR6nqGi6ZJPpM92Z1F0FPkJIQMgDk5NbPgrQnnvzf3KERW/3Q3d/wD63+FcxJqUlwkDSRKiAhEWNQAoJ5x6+td54b1jZbpES7J/tDke5rrhhJ06T7mNaXtJXP/Z",y="/portfolio-vscode/assets/comments-icon-51d858a1.svg",E="/portfolio-vscode/assets/star-bbd099ea.svg",C="/portfolio-vscode/assets/star-filled-8e71d765.svg";function Q({time:i,text:l,details:t,id:a}){const d=g.useMediaQuery({query:"(max-width: 1200px)"}),[p,f]=o.useState(!1),r=o.useRef(null),n=()=>{f(c=>!c)},s=()=>{const c=r.current.scrollHeight;+r.current.style.height.slice(0,-2)?r.current.style.height=0:r.current.style.height=c+"px"};return o.useEffect(()=>{const c=JSON.parse(localStorage.getItem(`starred${a}`));c===null?localStorage.setItem(`starred${a}`,!1):c===!0&&f(!0)},[]),o.useEffect(()=>{localStorage.setItem(`starred${a}`,p)}),e.jsxs("div",{className:"snippets__item",children:[e.jsxs("div",{className:"snippets__header",children:[e.jsxs("div",{className:"snippets__bio",children:[e.jsx("a",{href:"https://github.com/evilsepxd",className:"snippets__img-wrapper",children:e.jsx("img",{src:b,alt:"avatar",className:"snippets__img"})}),e.jsxs("div",{className:"snippets__bio-inner",children:[e.jsx("a",{href:"https://github.com/evilsepxd",className:"snippets__name",children:"@evilsepxd"}),e.jsxs("div",{className:"snippets__time",children:[d?"":"Created ",i," ago"]})]})]}),e.jsxs("div",{className:"snippets__btns",children:[e.jsxs("button",{className:"snippets__details-btn",onClick:s,children:[e.jsx("img",{src:y,alt:"",className:"snippets__btns-icon"}),e.jsx("div",{className:"snippets__btns-text",children:"details"})]}),!d&&e.jsxs("button",{className:"snippets__stars",onClick:n,children:[e.jsx("img",{src:p?C:E,alt:"",className:"snippets__btns-icon"}),e.jsx("div",{className:"snippets__btns-text",children:p?"starred":"unstarred"})]})]})]}),e.jsx("div",{className:"snippets__text",children:e.jsx(A,{copyToClipBoard:!1,children:l})}),e.jsxs("div",{className:"snippets__details",ref:r,children:[e.jsx("div",{className:"snippets__details-text",children:t}),e.jsx("button",{className:"snippets__details-close",onClick:s,children:e.jsxs("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_64_1646)",children:e.jsx("path",{d:"M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z",fill:"#607B96"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_64_1646",children:e.jsx("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.347656 0.779297)"})})})]})})]})]})}function L(){const i=o.useRef(null),l=[{time:"2 weeks",text:`export const apiSlice = createApi({
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
});`,details:'Это пример создания фрагмента sliceApi из моего проекта "rick-and-morty", где используется redux. В примере ипсользуется RTK Query для создания запросов на сервер, используя Rick-And-Morty API. Когда в store диспетчится action, он принимает несколько необязательных аргументов, которые в итоге влияют на результат ответа сервера. Этими аргументами являются фильтры, с которыми взаимодействует пользователь.'},{time:"3 months",text:`const [process, setProcess] = useState('waiting');

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

}, []);`,details:'Фрагмент кастомного хука useHTTP, используемого для отправки запросов для сервер, и обновляющим state в зависимости от состояния запроса. Использовался в моем проекте "Marvel".'}];return e.jsxs("div",{className:"snippets",ref:i,children:[e.jsx("div",{className:"snippets__comment",children:"// Code snippet showcase:"}),e.jsx("div",{className:"snippets__inner",children:l.map((t,a)=>e.jsx(Q,{time:t.time,text:t.text,details:t.details,id:a},a))})]})}export{k as F,L as S,F as g};