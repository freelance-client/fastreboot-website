function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Navbar-CCduJ4Lb.js","assets/index-RIrVx-1g.js","assets/index-DDyemkoO.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e,r as A,_ as O}from"./index-RIrVx-1g.js";import{G as H,F as V,a as z}from"./index-CMWE7FvL.js";import{m as F}from"./meditation-BhxSfgeD.js";var _={},P;Object.defineProperty(_,"__esModule",{value:!0});var S=e,l=A,n=function(){return n=Object.assign||function(t){for(var s,r=1,a=arguments.length;r<a;r++)for(var i in s=arguments[r])Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);return t},n.apply(this,arguments)};function G(t,s){var r,a;switch(s.type){case"TYPE":return n(n({},t),{speed:s.speed,text:(r=s.payload)===null||r===void 0?void 0:r.substring(0,t.text.length+1)});case"DELAY":return n(n({},t),{speed:s.payload});case"DELETE":return n(n({},t),{speed:s.speed,text:(a=s.payload)===null||a===void 0?void 0:a.substring(0,t.text.length-1)});case"COUNT":return n(n({},t),{count:t.count+1});default:return t}}var R=function(t){var s=t.words,r=s===void 0?["Hello World!","This is","a simple Typewriter"]:s,a=t.loop,i=a===void 0?1:a,o=t.typeSpeed,c=o===void 0?80:o,g=t.deleteSpeed,T=g===void 0?50:g,f=t.delaySpeed,y=f===void 0?1500:f,x=t.onLoopDone,v=t.onType,u=t.onDelete,j=t.onDelay,b=l.useReducer(G,{speed:c,text:"",count:0}),w=b[0],N=w.speed,h=w.text,M=w.count,m=b[1],C=l.useRef(0),p=l.useRef(!1),d=l.useRef(!1),E=l.useRef(!1),k=l.useRef(!1),B=l.useCallback(function(){var L=M%r.length,D=r[L];d.current?(m({type:"DELETE",payload:D,speed:T}),h===""&&(d.current=!1,m({type:"COUNT"}))):(m({type:"TYPE",payload:D,speed:c}),E.current=!0,h===D&&(m({type:"DELAY",payload:y}),E.current=!1,k.current=!0,setTimeout(function(){k.current=!1,d.current=!0},y),i>0&&(C.current+=1,C.current/r.length===i&&(k.current=!1,p.current=!0)))),E.current&&v&&v(C.current),d.current&&u&&u(),k.current&&j&&j()},[M,y,T,i,c,r,h,v,u,j]);return l.useEffect(function(){var L=setTimeout(B,N);return p.current&&clearTimeout(L),function(){return clearTimeout(L)}},[B,N]),l.useEffect(function(){x&&p.current&&x()},[x]),[h,{isType:E.current,isDelay:k.current,isDelete:d.current,isDone:p.current}]},W="styles-module_blinkingCursor__yugAC",Y="styles-module_blinking__9VXRT";(function(t,s){s===void 0&&(s={});var r=s.insertAt;if(t&&typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",r==="top"&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var I=l.memo(function(t){var s=t.cursorBlinking,r=s===void 0||s,a=t.cursorStyle,i=a===void 0?"|":a,o=t.cursorColor,c=o===void 0?"inherit":o;return S.jsx("span",n({style:{color:c},className:"".concat(W," ").concat(r?Y:"")},{children:i}))});_.Cursor=I,P=_.Typewriter=function(t){var s=t.words,r=s===void 0?["Hello World!","This is","a simple Typewriter"]:s,a=t.loop,i=a===void 0?1:a,o=t.typeSpeed,c=o===void 0?80:o,g=t.deleteSpeed,T=g===void 0?50:g,f=t.delaySpeed,y=f===void 0?1500:f,x=t.cursor,v=x!==void 0&&x,u=t.cursorStyle,j=u===void 0?"|":u,b=t.cursorColor,w=b===void 0?"inherit":b,N=t.cursorBlinking,h=N===void 0||N,M=t.onLoopDone,m=t.onType,C=t.onDelay,p=t.onDelete,d=R({words:r,loop:i,typeSpeed:c,deleteSpeed:T,delaySpeed:y,onLoopDone:M,onType:m,onDelay:C,onDelete:p})[0];return S.jsxs(S.Fragment,{children:[S.jsx("span",{children:d}),v&&S.jsx(I,{cursorStyle:j,cursorColor:w,cursorBlinking:h})]})},_.useTypewriter=R;function q(t){return H({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M241.063 54.406c-2.31.008-4.61.032-6.907.094-1.805.05-3.61.106-5.406.188-8.814 1.567-12.884 5.426-15.094 9.843-2.435 4.87-2.34 11.423.375 17.25 2.717 5.83 7.7 10.596 14.657 12.376 6.958 1.78 16.536.86 29.125-7.187l10.063 15.75c-15.818 10.11-31.124 12.777-43.813 9.53-12.688-3.247-22.103-12.123-26.968-22.563-4.584-9.836-5.426-21.376-1.03-31.624-42.917 6.94-81.777 23.398-111.626 46.562-9.81 10.688-10.77 23.11-6.47 31.594 4.83 9.526 16.21 16.48 38.97 9.28l5.656 17.813c-28.58 9.04-52.137-.588-61.28-18.625-2.23-4.397-3.592-9.156-4.127-14.063-4.814 5.712-9.16 11.658-13 17.844l.126.06c-8.614 19.616-8.81 33.203-5.376 42.032 3.436 8.83 10.635 14.44 21.72 17.532 22.168 6.18 58.065-1.277 83.343-20.156 10.82-8.08 21.077-27.677 21.97-42.875.445-7.6-1.165-13.604-4.345-17.438-3.18-3.834-8.272-6.703-18.813-6.594l-.187-18.686c14.487-.15 26.25 4.754 33.375 13.344 7.124 8.59 9.26 19.652 8.625 30.468-1.27 21.633-12.595 44.172-29.438 56.75-29.876 22.314-69.336 31.606-99.53 23.188-13.988-3.9-26.37-12.386-32.75-25.53-9.546 45.446 4.323 87.66 30.718 116.874 3.45 3.82 7.122 7.43 10.97 10.78-2.754-7.887-4.016-16.1-3.72-24.093.53-14.325 6.082-28.346 17.22-38.03 9.134-7.946 21.752-12.53 36.843-12.5 1.006 0 2.034.018 3.062.06 2.35.1 4.763.304 7.22.626l-2.44 18.532c-15.588-2.048-25.705 1.522-32.436 7.375-6.73 5.854-10.443 14.614-10.813 24.625-.74 20.024 12.07 43.406 39.69 50.188l-.032.188c27.192 5.19 57.536.372 88-18.22.018-.012.043-.017.062-.03 6.34-4.45 9.755-8.808 11.438-12.563 1.985-4.432 1.943-8.292.53-12.438-2.824-8.29-12.94-16.812-22.218-19.187-15.002-3.84-24.532 1.436-29 7.72-4.468 6.28-4.74 12.45 2.156 17.81l-11.47 14.75c-14.187-11.033-15.092-30.487-5.905-43.405 6.892-9.688 18.985-16.326 33.564-16.75.607-.018 1.228-.036 1.844-.03 4.306.03 8.79.622 13.437 1.81 15.505 3.97 29.84 15.277 35.28 31.25 1.416 4.155 2.09 8.69 1.876 13.314 16.71-8.538 34.332-16.12 52.282-21.814 30.156-13.78 43.23-37.938 42.72-58.28-.515-20.493-13.187-37.74-42.376-40.626l1.844-18.594c36.666 3.626 58.462 29.848 59.188 58.75.422 16.84-5.754 34.363-18.188 49.28 16.072-1.8 32.044-1.495 47.53 1.627-3.152-6.472-4.68-13.478-4.467-20.438.677-22.036 19.42-42.593 48.875-42.906 1.963-.022 3.974.053 6.03.218l-1.5 18.625c-24.927-1.998-34.3 11.086-34.718 24.656-.412 13.42 8.545 28.442 34.22 30.436 28.3.25 48.588-15.098 58.53-37.906 13.31-30.536 6.997-76.317-34.844-118.188-.792-.793-1.578-1.593-2.375-2.375-.444 3.792-1.424 7.443-2.842 10.844-7.25 17.39-24.233 29.128-41.875 32.407-24.335 4.522-44.29-5.347-53.5-20.406-9.21-15.057-6.792-36.35 9.78-47.56l10.47 15.5c-8.913 6.028-9.28 14.19-4.313 22.31 4.967 8.122 16.17 15.156 34.156 11.814 11.306-2.102 23.896-11.33 28.03-21.25 2.07-4.96 2.47-9.862.408-15.47-1.675-4.555-5.187-9.764-11.72-15.25l-.187-.155c-27.316-20.587-56.338-35.393-85.75-45.157.018.032.045.06.063.093 6.684 12.22 7.18 26.082 3.063 38.344-8.233 24.525-34.07 43.848-66.032 42.78-6.948-.23-13.56 3.12-19.186 9.657-5.627 6.537-9.735 16.113-10.688 26.313-1.905 20.4 6.923 42.886 41.344 54L277 258.28c-41.083-13.264-56.83-45.546-54.22-73.5 1.307-13.975 6.706-26.962 15.157-36.78 8.452-9.818 20.475-16.603 33.97-16.156 24.04.802 42.323-14.084 47.687-30.063 2.682-7.988 2.335-15.937-1.75-23.405-3.968-7.252-11.83-14.423-25.906-19.656-17.114-2.967-34.16-4.367-50.875-4.314zM342.28 306.344c-41.915 3.41-87.366 23.4-125.28 46.562-55.98 34.198-114.89 26.733-156.688-4.28 16.444 58.844 74.712 70.788 135.5 55.905 6.083-2.285 12.06-6.538 17.157-12.03 7.057-7.607 12.17-17.47 13.78-25.625l18.344 3.625c-2.445 12.383-9.078 24.666-18.406 34.72-8.95 9.645-20.61 17.35-34.094 19.374-6.766 15.07-12.334 29.68-14.594 39.906-3.55 16.06 14.206 22.225 22.156 6.03 19.022-38.743 45.87-73.23 79.406-102.967 26.064-17.153 48.406-38.303 62.72-61.22z"},child:[]}]})(t)}function U(t){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"6",r:"2"},child:[]},{tag:"path",attr:{d:"M21 16v-2c-2.24 0-4.16-.96-5.6-2.68l-1.34-1.6A1.98 1.98 0 0 0 12.53 9h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-.67.27-1.12.93-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-.5a2.5 2.5 0 0 1 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.21c.99 0 1.79-.8 1.79-1.79 0-.73-.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25z"},child:[]}]})(t)}const Z="/fastreboot-website/assets/evaluation-Qum4rqib.jpg",K="/fastreboot-website/assets/rules-BknDjfq5.jpg",Q="/fastreboot-website/assets/coaching-C8c3TB9w.jpg",X=[{id:1,image:{evaluationImg:Z},heading:"PRIME PROGRESSIVE EVALUATION SESSIONS",para:"ഓരോ 20 ദിവസം കൂടുമ്പോഴും നിങ്ങൾക്ക് ഞങ്ങളുടെ Head Coach ഉമായി sitting ഉണ്ടായിരിക്കുന്നതാണ്. നിങ്ങളിൽ ഇത് വരെയുള്ള progression analyzse  ചെയ്യുന്നതിനും മുന്നോട്ടുള്ള യാത്രക്ക് വേണ്ട Personalized curriculum ഉൾപ്പെടെ ഇവർ നൽകുന്നു.നിങ്ങളിൽ Betterment സൃഷ്ടിക്കുവാൻ Fastreboot നൽകുന്ന ഉറപ്പാണ്, സുരക്ഷയാണ് ഈ സെഷൻസ്"},{id:2,image:{rulesImg:K},heading:"The Life Codes",para:"പല proven techniques ഇലൂടെയും methods ഇലൂടെയും Build ചെയ്തിട്ടുള്ള ഒരു Checklist (An Easy and impactful Life rules ) നിങ്ങളിൽ follow up ചെയ്യിക്കുന്നു. വളരെ കുറഞ്ഞ സമയം മാത്രേ ഇത് കമ്പ്ലീറ്റ് ആക്കാൻ എടുക്കുന്നുള്ളൂ. പക്ഷേ, ഇതിൻ്റെ continuous result എന്നുള്ളത് നിങ്ങളെ high levels ഇൽ എത്തിക്കുന്നു"},{id:3,image:{coachingImg:Q},heading:"Live Coaching",para:"എല്ലാ ഞായർ ബുധൻ ദിവസങ്ങളിൽ രാത്രി 8 മണിക്ക് നിങ്ങൾക്ക് ഒരു Live Coaching Session ഉണ്ടായിരിക്കുന്നതാണ് നിങ്ങളുടെ Life rebuild ചെയ്യുന്നതിനായി എല്ലാ വെള്ളി ഞായർ ബുധൻ ദിവസങ്ങളിലും രാത്രി 8 മണിക്ക് ആയിരിക്കും ഈ സെഷൻ conduct ചെയ്യുന്നുണ്ടാവുക. Mind Tuning practitioner ഉം Life Coach & Councellor ഉമായിട്ടുള്ള Anil Kumar PC യുടെ നേതൃത്വത്തിലും Josh Talk Fame ഉം Life Coach ഉം ആയിട്ടുള്ള Nizam Moonniyoor നേതൃത്വത്തിലും ആയിരിക്കും Live sessions conduct ചെയ്യുന്നുണ്ടാവുക ഇതിലൂടെ നിങ്ങൾക്ക് ഒരു കരുത്തുറ്റ ഒരു സപ്പോർട്ട് കിട്ടുകയും അത് നിങ്ങളെ കൂടുതൽ മുന്നോട്ടു നയിക്കുകയും ചെയ്യുന്നു. നിങ്ങളുടെ identity തികച്ചും privacy യിൽ ആയിരിക്കും. നിങ്ങളുടെ ഇഷട്ടാനുസരണം join ചെയ്യാവുന്നതാണ്z"},{id:4,image:{meditationImg:F},heading:"Live Meditation",para:"എല്ലാ ദിവസവും രാവിലെ 5.30 മണിക്ക് നിങ്ങൾക്ക് ഒരു ലൈവ് മെഡിറ്റേഷൻ ഉണ്ടായിരിക്കുന്നതാണ്. ഇതിലൂടെ നിങ്ങൾക്ക് നല്ലൊരു ക്ലിയർ മൈൻഡ്സെറ്റ് ക്രിയേറ്റ് ചെയ്യാൻ സാധിക്കുന്നു. Meditation Types : 5 ഇലധികം Different Meditations ഞങ്ങൾ നിങ്ങൾക്കായി ദിവസവും നൽകുന്നു"}],J={WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",display:"-webkit-box"},$=()=>{const[t,s]=A.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto bg-gray-300 py-8 ",children:[e.jsx("h1",{className:"text-3xl font-extrabold text-center text-gray-600",children:"Step a Milestone"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-5 mt-8",children:X.map((r,a)=>e.jsxs("div",{className:"py-2 w-52 h-full flex flex-wrap bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:r.image,alt:"",className:"rounded-lg"})}),e.jsxs("div",{className:"py-2",children:[e.jsx("h5",{className:"mb-2 text-base text-center md:text-sm font-bold tracking-tight text-gray-900 dark:text-white",children:r.heading}),e.jsx("p",{className:"px-1 items-start text-base text-center font-normal text-gray-700 dark:text-gray-400",style:t?null:J,children:r.para})]}),e.jsx("button",{className:"px-2 text-green-300",onClick:()=>s(!t),children:t?"read less":"read more..."})]},a))})]})})},ee=()=>e.jsxs(e.Fragment,{children:[e.jsxs("figure",{className:" container  mx-auto text-center py-5 px-5",children:[e.jsx("svg",{className:"w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 14",children:e.jsx("path",{d:"M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"})}),e.jsx("blockquote",{children:e.jsx("p",{className:"text-2xl italic  text-gray-900 font-extrabold dark:text-gray-600",children:"Every Great Achiever is Inspired By A Great Mentor"})})]}),e.jsx("div",{className:" flex justify-center px-8 text-wrap font-semibold py-8 container mx-auto",children:e.jsx("p",{children:"തുടർച്ചയായി ഒന്നിടവിട്ട ദിവസങ്ങളിൽ നിങ്ങളുടെ Personal Mentor -മായി നിങ്ങൾക്ക്ഒരു sitting ഉണ്ടായിരിക്കുന്നതാണ്. നിങ്ങളെ ഓരോ alternative days ഇലും call ചെയ്ത് ഒരു Independent & Strong Mindset Build ചെയ്തെടുക്കാനും സഹായിക്കുന്നു. ഈപ്രോഗ്രാമിൻ്റെ ഏറ്റവും വലിയവിശേഷണവും ഇത് തന്നെയാണ്. നിങ്ങളുടെ പ്രശ്നങ്ങളുടെ root cause കണ്ടെത്താൻ അവർ നിങ്ങളെ സഹായിക്കുകയും നിങ്ങൾക്ക് അവർ ഒരു കരുത്താവുകയും ചെയ്യുന്നു ."})})]});function te(t){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"},child:[]},{tag:"path",attr:{d:"m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"},child:[]}]})(t)}function se(t){return H({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"},child:[]}]})(t)}const re=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto pt-5  bg-gray-200",children:[e.jsx("h1",{className:"text-3xl font-extrabold text-center text-gray-600",children:"Personal Mentor"}),e.jsxs("p",{className:" font-bold mt-5 text-center text-base sm:text-xl ",children:["നിങ്ങളുടെ വളർച്ചക്കായി, നിങ്ങളുടെകൂടെ ഒരു",e.jsx("br",{}),"MENTOR... താങ്ങായ്, വഴികാട്ടിയായ്"]}),e.jsxs("div",{className:"grid grid-cols-1  py-8 pr-5 sm:pr-24  gap-8 justify-items-start ",children:[e.jsxs("div",{className:"grid grid-cols-2 items-center justify-items-center ",children:[e.jsx("div",{className:" w-24 h-24 flex justify-center items-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-200",children:e.jsx("span",{children:e.jsx(se,{className:" h-16 w-16"})})}),e.jsxs("h1",{className:" text-xs sm:text-base font-semibold ",children:["നിങ്ങളുടെ കൂടെ നിന്ന് നിങ്ങളെ സപ്പോർട്ട് ചെയ്യാൻ നിങ്ങൾക്ക് ഒരു ",e.jsx("b",{children:' "പേഴ്സണൽ മെന്റർ"'})," ഉണ്ടാകുന്നതാണ്"]})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center justify-items-center ",children:[e.jsx("div",{className:" w-24 h-24 flex justify-center items-center rounded-3xl bg-gradient-to-br from-purple-500 to-teal-500",children:e.jsx("span",{children:e.jsx(V,{className:" h-16 w-16"})})}),e.jsxs("h1",{className:" text-xs sm:text-base font-semibold ",children:["ദിവസവും രാവിലെ 8 മുതൽ രാത്രി 8 വരെയുള്ള ഏതൊരു സമയത്തും നിങ്ങൾക്ക് മെന്ററെ ആവശ്യാനുസരണം ",e.jsx("b",{children:"Whatsapp"})," through കോൺടാക്ട് ചെയ്യാവുന്നതാണ്."]})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center justify-items-center  ",children:[e.jsx("div",{className:" w-24 h-24 flex justify-center items-center rounded-3xl bg-gradient-to-br from-purple-700 to-cyan-300",children:e.jsx("span",{children:e.jsx(te,{className:" h-16 w-16"})})}),e.jsxs("h1",{className:" text-xs sm:text-base font-semibold ",children:["ദിവസവും അവർ നിങ്ങളെ WhatsApp through connect ചെയ്ത് നിങ്ങളിൽ ഒരു ",e.jsx("b",{children:"Routine"})," Set ചെയ്തെടുക്കുകയും അവ Daily യഥാക്രമം നിങ്ങൾ ചെയ്യുന്നുണ്ടെന്ന് ഉറപ്പ് വരുത്തുകയും ചെയ്യുന്നു."]})]})]})]})}),ae=()=>e.jsxs("div",{children:[e.jsxs("div",{className:"container mx-auto pt-8 py-0",style:{WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",display:"-webkit-box"},children:[e.jsxs("h1",{className:" text-center font-extrabold text-3xl text-gray-800 mb-4",children:["Hundred Day's of "," "]}),e.jsx("span",{className:"flex justify-center text-gray-600 font-extrabold text-4xl",children:e.jsx(P,{words:["Personal Mentoring","Mind Mastery","Self Mastery","Life Mastery"],loop:0,cursor:!0,cursorStyle:"|",typeSpeed:120,deleteSpeed:90,delaySpeed:1e3})}),e.jsxs("div",{className:" flex flex-col justify-center  gap-5",children:[e.jsxs("div",{className:"px-14",children:[e.jsxs("h1",{className:" text-xl sm:text-2xl md:text-3xl font-extrabold pt-5 text-center text-gray-900 ",children:["UNLOCKING YOUR GREATNESS ",e.jsx("br",{})," THROUGH SELF MASTERY!"]}),e.jsx("p",{className:" font-semibold pt-5 text-left ",children:"നൂതനമായ വിദ്യകളിലൂടെയും തന്ത്രങ്ങളിലൂടെയും പരിശീലനങ്ങളിലൂടെയും നിങ്ങളിൽ LIFE-MASTERY SKILLS വളർത്തിയെടുക്കുന്നു. ഇതിലൂടെ നിങ്ങളുടെ പ്രശ്നങ്ങൾ ലഘൂകരിക്കപ്പെടുകയും നിങ്ങളുടെ ജീവിതത്തിൽ വളർച്ച സൃഷ്ടിക്കപ്പെടുകയും ചെയ്യുന്നു..."})]}),e.jsxs("div",{className:"flex flex-wrap w-full justify-center gap-8 mt-5 px-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:" flex items-center justify-center w-12 h-12 -start-6 bg-green-200 rounded-full ring-4 ring-white dark:ring-red-500 dark:bg-red-400 ",children:e.jsx(q,{className:"w-8 h-8"})}),e.jsx("h1",{className:" font-bold",children:"Mind Mastery"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"flex items-center justify-center w-12 h-12 -start-6  bg-gray-100 rounded-full  ring-4 ring-white dark:ring-blue-600 dark:bg-blue-500",children:e.jsx(U,{className:"w-8 h-8"})}),e.jsx("h3",{className:" font-bold",children:"Self Mastery"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"flex items-center justify-center w-12 h-12 -start-6 bg-gray-100 rounded-full  ring-4 ring-white dark:ring-green-700 dark:bg-green-600",children:e.jsx(z,{className:"w-8 h-8"})}),e.jsx("h3",{className:" font-bold",children:"Life Mastery"})]})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.dev/svgjs",width:"auto",height:"200px",preserveAspectRatio:"none",viewBox:"0 0 1440 560",children:[e.jsxs("g",{mask:'url("#SvgjsMask1065")',fill:"none",children:[e.jsx("path",{d:"M 0,0 C 72,55 216,255.8 360,275 C 504,294.2 576,108 720,96 C 864,84 936,219.4 1080,215 C 1224,210.6 1368,102.2 1440,74L1440 560L0 560z",fill:"#184a7e"}),e.jsx("path",{d:"M 0,466 C 72,450.4 216,395 360,388 C 504,381 576,446.4 720,431 C 864,415.6 936,299.4 1080,311 C 1224,322.6 1368,453.4 1440,489L1440 560L0 560z",fill:"#2264ab"})]}),e.jsx("defs",{children:e.jsx("mask",{id:"SvgjsMask1065",children:e.jsx("rect",{width:"1440",height:"560",fill:"#ffffff"})})})]})]})]}),e.jsx(re,{}),e.jsx(ee,{}),e.jsx($,{})]}),ie=A.lazy(()=>O(()=>import("./Navbar-CCduJ4Lb.js"),__vite__mapDeps([0,1,2]))),ce=()=>e.jsxs("div",{children:[e.jsx(ie,{}),e.jsx(ae,{})]});export{ce as default};
