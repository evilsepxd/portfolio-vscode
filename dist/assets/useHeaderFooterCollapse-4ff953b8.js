import{r as o}from"./index-db048b75.js";function i(r,t,l){o.useEffect(()=>{l(!1),r.current.addEventListener("scroll",()=>{const e=r.current.scrollTop,c=r.current.scrollHeight,s=r.current.clientHeight;e+s+5>c?l(!0):l(!1),e>=10?t(!1):t(!0)})},[])}export{i as u};