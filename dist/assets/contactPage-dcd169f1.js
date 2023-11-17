import{r as n,j as s,u as r,o as h,p as x,q as f,w as j,x as N,y as k,z as u,m as p}from"./index-db048b75.js";import{m as b,u as _}from"./menu-arrow-184dcede.js";const m="/portfolio-vscode/assets/link-9b58b2b7.svg";function y(){const e=n.useRef(null),a=n.useRef(null),[i,l]=n.useState(!0),o=()=>{l(t=>!t)};return s.jsxs("div",{className:`account-links${i?" active":""}`,ref:e,children:[s.jsxs("button",{className:"account-links__btn",ref:a,onClick:o,children:[s.jsx("img",{src:b,alt:"arrow",className:"account-links__btn-icon"}),s.jsx("div",{className:"account-links__btn-text",children:"find-me-also-in"})]}),s.jsx("div",{className:"account-links__inner",children:s.jsxs("ul",{className:"account-links__list",children:[s.jsx("li",{className:"account-links__item",children:s.jsxs("a",{href:"https://www.instagram.com/evilsephy1/",className:"account-links__item-link",children:["Instagram account",s.jsx("img",{src:m,alt:"link",className:"account-links__item-icon"})]})}),s.jsx("li",{className:"account-links__item",children:s.jsxs("a",{href:"https://steamcommunity.com/id/ev1lseph2/",className:"account-links__item-link",children:["Steam account",s.jsx("img",{src:m,alt:"link",className:"account-links__item-icon"})]})}),s.jsx("li",{className:"account-links__item",children:s.jsxs("a",{href:"https://www.youtube.com/channel/UCq_rFm3RP_L0z1rS_dpbdNg",className:"account-links__item-link",children:["YouTube channel",s.jsx("img",{src:m,alt:"link",className:"account-links__item-icon"})]})})]})})]})}function w(){const[e,a]=n.useState(!1),i=r(h),l=r(x),o=r(f),t=_(),d=()=>{a(!0),setTimeout(()=>{t(u("success")),a(!1)},1e3)};return s.jsxs("form",{className:"contact__form",name:"form",id:"form",action:"https://docs.google.com/forms/d/e/1FAIpQLSfFmvLJe2rJBPfYJtRAUxAG_jqmBL3QUqjkjAihOlWLGAPd5w/formResponse?",target:"hidden-iframe",onSubmit:d,children:[s.jsx("iframe",{name:"hidden-iframe",id:"hidden-iframe"}),s.jsxs("div",{className:"contact__form-wrapper",children:[s.jsxs("div",{className:"contact__form-item",children:[s.jsx("label",{htmlFor:"entry.1106056267",className:"contact__label",children:"_name:"}),s.jsx("input",{type:"text",name:"entry.1106056267",className:"contact__input",value:i,id:"entry.1106056267",onChange:c=>t(j(c.target.value)),required:!0})]}),s.jsxs("div",{className:"contact__form-item",children:[s.jsx("label",{htmlFor:"entry.1525080091",className:"contact__label",children:"_email:"}),s.jsx("input",{type:"email",name:"entry.1525080091",className:"contact__input",value:l,id:"entry.1525080091",onChange:c=>t(N(c.target.value)),required:!0})]}),s.jsxs("div",{className:"contact__form-item",children:[s.jsx("label",{htmlFor:"entry.1747520779",className:"contact__label",children:"_message:"}),s.jsx("textarea",{name:"entry.1747520779",id:"entry.1747520779",className:"contact__input contact__input_textarea",value:o,onChange:c=>t(k(c.target.value)),required:!0})]}),s.jsx("button",{type:"submit",className:"contact__btn",disabled:e,children:"submit-message"})]})]})}function S(){const e=_(),a=()=>{e(u("waiting")),e(p())};return s.jsxs("div",{className:"form-success",children:[s.jsx("h2",{className:"form-success__title",children:"Thank you! 🤘"}),s.jsx("div",{className:"form-success__descr",children:"Your message has been accepted. You will recieve answer really soon!"}),s.jsx("button",{className:"contact__btn form-success__btn",onClick:a,children:"send-new-message"})]})}export{y as A,w as F,S as a};
