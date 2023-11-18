import{r as v,v as O}from"./index-0022d0d2.js";(function(n){if(!n||typeof window>"u")return;const s=document.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=n,document.head.appendChild(s)})(`.main-highlighter-relative {
  position: relative;
  width: 100%;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
}
.main-highlighter-relative .floating-copy-button {
  cursor: pointer;
  position: absolute;
  padding: 8px;
  right: 7px;
  top: 7px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.404);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.main-highlighter-relative .floating-copy-button:hover {
  background-color: rgba(255, 255, 255, 0.504);
  border: 1px solid white;
  padding: 7px;
}
.main-highlighter-relative .floating-copy-button.copied {
  border: 1px solid greenyellow;
  padding: 7px;
}
.main-highlighter-relative .floating-copy-button.copied:hover {
  border: 1px solid greenyellow;
  background-color: rgba(53, 116, 34, 0.753);
  padding: 7px;
}
.main-highlighter-relative .highlighter-container-vs-code {
  width: 100%;
  color: white;
  overflow: auto;
  line-height: 1.15;
  --banner-display: none;
  --banner-height-normal: 0px;
  --banner-height-small: 0px;
  margin: 0;
  min-width: 200px;
  width: 100%;
  overflow: auto;
  position: relative;
  box-sizing: border-box;
}
.main-highlighter-relative .highlighter-container-vs-code code {
  white-space: pre-wrap;
}

.highlighter-container::after {
  box-sizing: inherit;
}

.highlighter-container::before {
  box-sizing: inherit;
}

.rc-hl-code-line {
  line-height: 20px;
  letter-spacing: 0px;
  font-size: 17px;
  color: #9cdcfe;
}
.rc-hl-code-line span {
  width: 100%;
}
.rc-hl-code-line span .none {
  color: #9cdcfe;
}
.rc-hl-code-line span.punctuation {
  color: #d5d5d5;
}
.rc-hl-code-line span.number {
  color: #b5cea8;
}
.rc-hl-code-line span.high-keyword {
  color: #c586c0;
}
.rc-hl-code-line span.keyword {
  color: #569cd6;
}
.rc-hl-code-line span.var {
  color: #9cdcfe;
}
.rc-hl-code-line span.string {
  color: #ce9178;
}
.rc-hl-code-line span.function {
  color: #e2d487;
}
.rc-hl-code-line span.bracket-0 {
  color: #ffd700;
}
.rc-hl-code-line span.bracket-1 {
  color: #da70d6;
}
.rc-hl-code-line span.bracket-2 {
  color: #179fff;
}
.rc-hl-code-line span.bracket-3 {
  color: #ffd700;
}
.rc-hl-code-line span.const {
  color: #4fc1ff;
}
.rc-hl-code-line span.arrow {
  color: #4fc1ff;
}
.rc-hl-code-line span.type {
  color: #4ec9b0;
}
.rc-hl-code-line span.operator {
  color: #d4d4d4;
}
.rc-hl-code-line span.comment {
  color: #6a9955;
}
.rc-hl-code-line span.tag {
  color: #d5d5d5bd;
}`);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var L=function(){return L=Object.assign||function(n){for(var s,h=1,i=arguments.length;h<i;h++)for(var t in s=arguments[h])Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t]);return n},L.apply(this,arguments)};function K(n,s,h,i){return new(h||(h=Promise))(function(t,o){function u(e){try{m(i.next(e))}catch(c){o(c)}}function p(e){try{m(i.throw(e))}catch(c){o(c)}}function m(e){var c;e.done?t(e.value):(c=e.value,c instanceof h?c:new h(function(g){g(c)})).then(u,p)}m((i=i.apply(n,s||[])).next())})}function Q(n,s){var h,i,t,o,u={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function p(m){return function(e){return function(c){if(h)throw new TypeError("Generator is already executing.");for(;u;)try{if(h=1,i&&(t=2&c[0]?i.return:c[0]?i.throw||((t=i.return)&&t.call(i),0):i.next)&&!(t=t.call(i,c[1])).done)return t;switch(i=0,t&&(c=[2&c[0],t.value]),c[0]){case 0:case 1:t=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,i=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(t=u.trys,!((t=t.length>0&&t[t.length-1])||c[0]!==6&&c[0]!==2)){u=0;continue}if(c[0]===3&&(!t||c[1]>t[0]&&c[1]<t[3])){u.label=c[1];break}if(c[0]===6&&u.label<t[1]){u.label=t[1],t=c;break}if(t&&u.label<t[2]){u.label=t[2],u.ops.push(c);break}t[2]&&u.ops.pop(),u.trys.pop();continue}c=s.call(n,u)}catch(g){c=[6,g],i=0}finally{h=t=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([m,e])}}}function C(n,s,h){if(h||arguments.length===2)for(var i,t=0,o=s.length;t<o;t++)!i&&t in s||(i||(i=Array.prototype.slice.call(s,0,t)),i[t]=s[t]);return n.concat(i||Array.prototype.slice.call(s))}var Z=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],j=-1,R=["import","from","return","if","else","switch","default","export","as"],U=["class","extends","this","super","function","null","var","let","const","typeof","interface","type","false","true","in","private","public","undefined"],W=[".",",",";",":","<",">","=","!","<",">","/","!","+","*","|"],X=["=>"],Y=["(","{","["],_=[")","}","]"],$=["&&","||","==","!=","<=",">="],T=["===","!=="],z=function(n){return $.includes(n)},E=function(n){return T.includes(n)},ee=function(n){return W.includes(n)},ne=function(n){return Y.includes(n)},te=function(n){return _.includes(n)},oe=function(n,s,h,i){var t,o=[],u=!1,p=!1,m=void 0,e="",c=!1,g=0;if(s){u=!0;for(var l=0;l<n.length;l++)if(h===(d=n[l])){if(u=!1,e+=d,o.push({token:e,category:"string"}),e="",!(l<n.length))return[o,!1,void 0,!1];c=!0,g=l}else e+=d}else if(i)for(p=!0,l=0;l<n.length;l++){var y=n[l],x=n[l+1];if(y==="*"&&x==="/"){if(p=!1,e+=y+x,o.push({token:e,category:"comment"}),e="",!(++l<n.length))return[o,!1,void 0,!1];c=!0,g=l}else e+=y}for(p=!1,u=!1,e="",l=c?g:0;l<n.length;l++){var d=n[l];if(['"',"'","`"].includes(d)){e.length>0&&(o.push({token:e,category:"none"}),e="");var S=d;m=d,u=!0,e+=d;for(var f=l+1;;){if(f===n.length){o.push({token:e,category:"string"}),e="";break}var V=n[f];if(V===S){e+=V,u=!1,o.push({token:e,category:"string"}),e="";break}e+=V,f++}if(l=f,u)return[o,u,m,!1]}else if(d==="/"&&n[l+1]==="*"){for(e.length>0&&(o.push({token:e,category:"none"}),e=""),p=!0,e+=d+n[l+1],f=(l+=1)+1;;){if(f===n.length){o.push({token:e,category:"comment"}),e="";break}if(y=n[f],x=n[f+1],y==="*"&&x==="/"){e+=y+x,p=!1,o.push({token:e,category:"comment"}),e="",f++;break}e+=y,f++}if(l=f,p)return[o,!1,void 0,!0]}else{if(d==="/"&&n[l+1]==="/"){for(e.length>0&&(o.push({token:e,category:"none"}),e=""),f=l+1,e+=d;;){if(f===n.length-1){e+=n[f],o.push({token:e,category:"comment"}),e="";break}e+=n[f],f++}l=f;break}t=d+n[l+1],X.includes(t)?(e.length>0&&(o.push({token:e,category:"none"}),e=""),o.push({token:d+n[l+1],category:"arrow"}),e="",l++):z(d+n[l+1])?(e.length>0&&(o.push({token:e,category:"none"}),e=""),o.push({token:d+n[l+1],category:"punctuation"}),e="",l++):E(d+n[l+1]+n[l+2])?(e.length>0&&(o.push({token:e,category:"none"}),e=""),o.push({token:d+n[l+1]+n[l+2],category:"punctuation"}),e="",l++,l++):ee(d)?(e.length>0&&(o.push({token:e,category:"none"}),e=""),o.push({token:d,category:"punctuation"}),e=""):ne(d)?(e.length>0&&(o.push({token:e,category:"none"}),e=""),++j>2&&(j=0),o.push({token:d,category:"bracket-"+j}),e=""):te(d)?(e.length>0&&(o.push({token:e,category:"none"}),e=""),o.push({token:d,category:"bracket-"+j}),--j<0&&(j=2),e=""):e+=d}}return e.length>0&&o.push({token:e,category:"none"}),o=o.reduce(function(N,k){var A;if(k.category==="none"){if(k.token===" "||k.token==="")return C(C([],N,!0),[{token:"",category:"ws"}],!1);for(var F=k.token.split(" "),B=[],a=0;a<F.length;a++){var q=F[a];B.push(q),q.length>0&&q!==" "&&((A=F[a+1])===null||A===void 0?void 0:A.length)>0&&F[a+1]!==" "&&B.push("")}var H=B.map(function(w){return!isNaN(Number(w))&&w.length>0?{token:w,category:"number"}:function(r){return R.includes(r)}(w)?{token:w,category:"high-keyword"}:function(r){return U.includes(r)}(w)?{token:w,category:"keyword"}:function(r){return/[A-Z]/.test(r[0])}(w)?{token:w,category:"type"}:w.length===0||w===" "?{token:"",category:"ws"}:{token:w,category:"none"}});return C(C([],N,!0),H,!0)}return C(C([],N,!0),[k],!1)},[]),[o=o.map(function(N){return N.token.length===0?L(L({},N),{category:"ws"}):L({},N)}),u,m,p]},I=function(n){switch(n){case"micro":return 8;case"small":return 15;case"semi-medium":return 18;case"medium":return 25;case"large":return 28;default:return 24}},re=function(n){var s=n.size,h=n.color,i=n.colorFill,t=i===void 0?"none":i,o=n.onClick,u=n.style,p=u===void 0?{}:u,m=n.className,e=I(s);return O.createElement("svg",{style:o?L({},L({cursor:"pointer"},p)):p,onClick:function(){return o==null?void 0:o()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(e,"px"),viewBox:"0 0 24 24",width:"".concat(e,"px"),fill:h||"#000000",className:m||""},O.createElement("path",{d:"M0 0h24v24H0V0z",fill:t}),O.createElement("path",{d:"M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"}))},ae=function(n){var s=n.size,h=n.color,i=n.colorFill,t=i===void 0?"none":i,o=n.onClick,u=n.style,p=n.className,m=I(s),e=u||{};return O.createElement("svg",{style:o?L({},L({cursor:"pointer"},e)):e,onClick:function(){return o==null?void 0:o()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"".concat(m,"px"),viewBox:"0 0 24 24",width:"".concat(m,"px"),fill:h||"#000000",className:p||""},O.createElement("path",{d:"M0 0h24v24H0V0z",fill:t}),O.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}))},ce=function(n){var s=n.code,h=s===void 0?"no code":s,i=n.onCopyToClipboard,t=i===void 0?function(c){}:i,o=v.useState(!1),u=o[0],p=o[1],m=function(){p(!0),setTimeout(function(){p(!1)},2800)};function e(c){return K(this,void 0,void 0,function(){return Q(this,function(g){switch(g.label){case 0:if(!navigator.clipboard)return function(l){var y=document.createElement("textarea");y.value=l,y.style.top="0",y.style.left="0",y.style.position="fixed",document.body.appendChild(y),y.focus(),y.select();try{document.execCommand("copy")&&(m(),t==null||t(h))}catch{}document.body.removeChild(y)}(c),[2];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,navigator.clipboard.writeText(c)];case 2:return g.sent(),m(),t==null||t(h),[3,4];case 3:return g.sent(),[3,4];case 4:return[2]}})})}return v.createElement("div",{onClick:function(){return e(h)},className:u?"floating-copy-button copied":"floating-copy-button"},u?v.createElement(re,{color:"greenyellow"}):v.createElement(ae,{color:"white"}))},ie=function(n){var s=n.code,h=n.style,i=n.children,t=n.onCopyToClipboard,o=n.copyToClipBoard,u=o===void 0||o,p=s||i||"",m=function(e){var c=e.tokenList;return c.length===0?v.createElement("div",{className:"rc-hl-code-line"},v.createElement("span",{className:"none"}," ")):v.createElement("div",{className:"rc-hl-code-line"},c.map(function(g,l){return v.createElement("span",{key:l,className:g.category},g.category=="ws"?" ":g.token)}))};return v.createElement(v.Fragment,null,p&&p.length>0&&v.createElement("div",{"data-testid":"highlighter-container",style:h,className:"main-highlighter-relative"},v.createElement("div",{className:"highlighter-container-vs-code"},v.createElement("code",null,v.createElement(v.Fragment,null,function(e){var c=function(g){var l,y,x,d,S,f,V;if(g){for(var N=g.split(`
`),k=[],A=!1,F=void 0,B=!1,a=0;a<N.length;a++){var q=N[a],H=oe(q,A,F,B),w=H[0];A=H[1],F=H[2],B=H[3],k.push(w)}var r=k.reduce(function(P,J){return C(C(C([],P,!0),J,!0),[{token:`
`,category:"end-line"}],!1)},[]);for(a=0;a<r.length;a++)if((M=r[a]).token==="<")if(r[a+1].category==="type"){r[a].category="tag";for(var b=a+1;b<r.length;){if(r[b].token===">"){r[b].category;break}b++}}else if(r[a+1].token==">"||r[a+1].token=="/")r[a].category="tag",r[a+1].category="tag",r[a+1].token=="/"&&Z.includes(r[a+2].token)&&(r[a+2].category="keyword");else if(Z.includes(r[a+1].token))for(r[a+1].category="keyword",r[a].category="tag",b=a+1;b<r.length;){if(r[b].token===">"){r[b].category;break}b++}else r[a+1].token==="/"&&Z.includes(r[a+2].token)&&r[a+3].token===">"&&(r[a+2].category="keyword",r[a].category="tag",r[a+1].category="tag",r[a+3].category="tag");else if(M.token==="/"&&r[a+1].token===">")r[a].category="tag",r[a+1].category="tag";else if(M.token==="keyword")((l=r[a+1])===null||l===void 0?void 0:l.token)===":"&&(M.category="none");else if(M.token==="function")["none","type"].includes((y=r[a+1])===null||y===void 0?void 0:y.category)?r[a+1].category="function":["none","type"].includes((x=r[a+2])===null||x===void 0?void 0:x.category)&&(r[a+2].category="function");else if(M.token==="("){b=a-1;for(var D=0;b>=0&&D<=4&&(((d=r[b])===null||d===void 0?void 0:d.token)!=="/"||((S=r[b+1])===null||S===void 0?void 0:S.token)!==">");){if(((f=r[b])===null||f===void 0?void 0:f.category)==="none"){r[b].category="function";break}b--,D++}}for(a=0;a<r.length;a++){var M;(M=r[a]).token==="."&&["none","function"].includes((V=r[a-1])===null||V===void 0?void 0:V.category)&&(r[a-1].category="var")}var G=[];return k=[],r.forEach(function(P){P.category==="end-line"?(k.push(G),G=[]):G.push(P)}),k}}(e)||[];return v.createElement(v.Fragment,null,c.map(function(g,l){return v.createElement(m,{tokenList:g,key:l})}))}(p)))),u&&v.createElement(ce,{code:i||s||"",onCopyToClipboard:function(e){t==null||t(e)}})))};export{ie as z};
