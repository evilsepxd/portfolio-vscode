import{u as c,g as d,j as s,b as j,e as _,r as m,c as b}from"./index-db048b75.js";import{u as h}from"./useHeaderFooterCollapse-4ff953b8.js";import{F as g,g as N,S as v}from"./aboutPage-5abcb2f6.js";import{C as k}from"./Contacts-55773bcb.js";import{u as C,m as i}from"./menu-arrow-184dcede.js";import"./index.es-7ecaab28.js";function l({infoType:n}){const o=c(d);return s.jsx("div",{className:"folders",children:s.jsx("ul",{className:"folders__list",children:s.jsx(g,{folders:o[n]})})})}function F(){const n=c(j),o=c(_),t=N(o);return s.jsxs("div",{className:"info",children:[s.jsxs("h2",{className:"info__title",children:["// ",n,"-info",s.jsxs("span",{children:[" / ",o]})]}),s.jsx("div",{className:"info__text",children:t})]})}function E({setHeader:n,setFooter:o}){const t=C(),a=m.useRef([]),u=m.useRef(null);h(u,n,o);const r=(e,p)=>{const x=e.target;t(b(p)),a.current.forEach(f=>{x===f&&f.classList.toggle("active")})};return s.jsxs("section",{className:"about page",ref:u,children:[s.jsx("h1",{className:"page__title",children:"_about-me"}),s.jsxs("nav",{className:"about__nav",children:[s.jsxs("button",{className:"about__navlink",onClick:e=>r(e,"professional"),ref:e=>a.current[0]=e,children:[s.jsx("img",{src:i,alt:"menu-arrow",className:"about__navlink-icon"}),"professional-info"]}),s.jsx(l,{infoType:"professional"}),s.jsxs("button",{className:"about__navlink active",onClick:e=>r(e,"personal"),ref:e=>a.current[1]=e,children:[s.jsx("img",{src:i,alt:"menu-arrow",className:"about__navlink-icon"}),"personal-info"]}),s.jsx(l,{infoType:"personal"}),s.jsxs("button",{className:"about__navlink",onClick:e=>r(e,"hobbies"),ref:e=>a.current[2]=e,children:[s.jsx("img",{src:i,alt:"menu-arrow",className:"about__navlink-icon"}),"hobbies-info"]}),s.jsx(l,{infoType:"hobbies"}),s.jsx(k,{})]}),s.jsx(F,{}),s.jsx(v,{})]})}export{E as default};
