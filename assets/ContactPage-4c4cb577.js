import{j as s,m as x,u as c,o as j,p as g,q as p,r as o,t as _,S as f,C as L}from"./index-210abfee.js";import{C as N}from"./Contacts-ba7bc1a9.js";import{A as v,F as w,a as b}from"./contactPage-129457db.js";import{u as S}from"./menu-arrow-80e1d21e.js";import{z as C}from"./index.es-a16d4bd4.js";function E(){const e=S();return s.jsx("div",{className:"tabs tabs_contact",children:s.jsxs("div",{className:"tabs__item",children:[s.jsx("div",{className:"tabs__text",children:"contacts"}),s.jsx("button",{className:"tabs__icon",onClick:()=>e(x()),children:s.jsxs("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("g",{clipPath:"url(#clip0_64_1646)",children:s.jsx("path",{d:"M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z",fill:"#607B96"})}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_64_1646",children:s.jsx("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.347656 0.779297)"})})})]})})]})})}function y(){const e=c(j),t=c(g),a=c(p),r=new Date().toLocaleString("en-US",{month:"long",weekday:"short",day:"numeric"}),[l,d]=o.useState([s.jsx("li",{className:"code__number",children:"1"},0)]);return o.useEffect(()=>{const m=document.querySelector(".code .main-highlighter-relative"),h=20.8,u=Math.round(m.scrollHeight/h),i=[];for(let n=0;n<u;n++)i.push(s.jsx("li",{className:"code__number",children:n+1},n));d(i)},[e,t,a]),s.jsx("div",{className:"code",children:s.jsxs("div",{className:"code__wrapper",children:[s.jsx("ul",{className:"code__nums",children:l}),s.jsx("div",{className:"code__text",children:s.jsx(C,{copyToClipBoard:!1,children:`const button = document.querySelector('#sendBtn');

const message = {
  name: "${e}",
  email: "${t}",
  message: "${a}",
  date: "${r}"
}

button.addEventListener('click', () => {
  form.send(message);
});`})})]})})}function D(){const e=c(_);return s.jsxs("section",{className:"contact page",children:[s.jsxs("div",{className:"contact__side-bar",children:[s.jsx(N,{}),s.jsx(v,{})]}),s.jsx(E,{}),s.jsx(f,{children:s.jsx(L,{classNames:"forms",addEndListener:(t,a)=>t.addEventListener("transitionend",a,!1),children:e==="waiting"?s.jsx(w,{}):s.jsx(b,{})},e)}),s.jsx(y,{})]})}export{D as default};
