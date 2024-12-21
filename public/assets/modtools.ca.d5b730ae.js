"use strict";(self.webpackChunkpixelplanet=self.webpackChunkpixelplanet||[]).push([[189],{89:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});var a,n,i,l,r,d,s,c,p,u=o(7294),v=o(743),m=o(389),h=o(259),f=o(631);function y(e,t,o,a){p||(p="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:p,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const b={coords:"",tlcoords:"",brcoords:"",tlrcoords:"",brrcoords:"",tlccoords:"",brccoords:""};function g(){const e=(0,h.x2)(),[t,o]=(0,u.useState)(0),[p,g]=(0,u.useState)("build"),[x,w]=(0,u.useState)("spare"),[S,k]=(0,u.useState)("protect"),[C,I]=(0,u.useState)(e),[$,N]=(0,u.useState)(null),[T,_]=(0,u.useState)({}),[A,F]=(0,u.useState)(!1),[D,E]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);let O,P;switch((0,u.useEffect)((()=>{o(D)}),[D]),p){case"build":O="Construir imatge sobre el llenç.";break;case"protect":O="Construir imatge i establir-la com a protegida.";break;case"wipe":O="Construir imatge, però reiniciar el temps de refredament com a píxels verges."}switch(x){case"spare":P="Clean spare pixels that are surrounded by unset pixels";break;case"spareext":P="Clean spare pixels that are surrounded by unset pixels and up to 1 other set pixels";break;case"spareextu":P="Clean spare pixels that are surrounded by a single other color or unset pixels (VERY AGGRESSIVE ON CANVASES THAT ALLOW UNSET PIXELS (where there are two cooldowns)!)";break;case"makenull":P="Turn every pixel in area to 0 (YOU REALLY SHOULDN'T DO THAT ON ANY AREA THAT ISN'T ALREADY MOSTLY 0)"}(0,m.Z)((()=>{!async function(e){const t=new FormData;t.append("cleanerstat",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e({})}((e=>_(e)))}),1e4);const L=T.running?`Status: ${T.method} from ${T.tl} to ${T.br} on canvas ${E[T.canvasId].ident} to ${T.percent} done`:"Status: Not running";return y("div",{className:"content"},void 0,$&&y("div",{className:"respbox"},void 0,$.split("\n").map((e=>y("p",{},e.slice(0,3),e))),y("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>N(null)},void 0,"Tanca")),y("p",{},void 0,"Triar llenç",": ",y("select",{value:t,onChange:e=>{const t=e.target;o(t.options[t.selectedIndex].value)}},void 0,Object.keys(E).filter((e=>!E[e].v)).map((e=>y("option",{value:e},e,E[e].title))))),a||(a=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Pujar imatge"),y("p",{},void 0,"Pujar imatges al llenç"),y("p",{},void 0,"Arxiu",": ",n||(n=y("input",{type:"file",name:"image",id:"imgfile"}))),y("select",{value:p,onChange:e=>{const t=e.target;g(t.options[t.selectedIndex].value)}},void 0,["build","protect","wipe"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,O),y("p",{},void 0,"Coordinates:"," ",y("input",{defaultValue:b.coords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.coords=t}})),y("button",{type:"button",onClick:()=>{A||(F(!0),async function(e,t,o,a){const n=new FormData,i=document.getElementById("imgfile"),l=i.files&&i.files[0]?i.files[0]:null;n.append("imageaction",e),n.append("image",l),n.append("canvasid",t),n.append("coords",o);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:n});var d;d=await r.text(),F(!1),N(d)}(p,t,b.coords))}},void 0,A?"...":"Enviar"),i||(i=y("br",{})),l||(l=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Protecció de píxels"),y("p",{},void 0,"Set protection of areas (if you need finer grained control, use protect with image upload and alpha layers)"),y("select",{value:S,onChange:e=>{const t=e.target;k(t.options[t.selectedIndex].value)}},void 0,["protect","unprotect"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,"Top-left corner",": ",y("input",{defaultValue:b.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.tlcoords=t}})),y("p",{},void 0,"Bottom-right corner",": ",y("input",{defaultValue:b.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.brcoords=t}})),y("button",{type:"button",onClick:()=>{A||(F(!0),async function(e,t,o,a,n){const i=new FormData;i.append("protaction",e),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const l=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var r;r=await l.text(),F(!1),N(r)}(S,t,b.tlcoords,b.brcoords))}},void 0,A?"...":"Enviar"),window.ssv&&window.ssv.backupurl&&y("div",{},void 0,r||(r=y("br",{})),d||(d=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Retrocedir fins a la data"),y("p",{},void 0,"Rollback an area of the canvas to a set date (00:00 UTC)"),y("input",{type:"date",value:C,pattern:"\\d{4}-\\d{2}-\\d{2}",min:E[t].sd,max:e,onChange:e=>{I(e.target.value)}}),y("p",{},void 0,"Top-left corner",": ",y("input",{defaultValue:b.tlrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.tlrcoords=t}})),y("p",{},void 0,"Bottom-right corner",": ",y("input",{defaultValue:b.brrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.brrcoords=t}})),y("button",{type:"button",onClick:()=>{A||(F(!0),async function(e,t,o,a,n){const i=new FormData,l=(0,h.UW)(e);i.append("rollback",l),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var d;d=await r.text(),F(!1),N(d)}(C,t,b.tlrcoords,b.brrcoords))}},void 0,A?"...":"Enviar")),s||(s=y("br",{})),c||(c=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Canvas Cleaner"),y("p",{},void 0,"Apply a filter to clean trash in large canvas areas."),y("select",{value:x,onChange:e=>{const t=e.target;w(t.options[t.selectedIndex].value)}},void 0,["spare","spareext","spareextu","makenull"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,P),y("p",{style:{fontWeight:"bold"}},void 0,L),y("p",{},void 0,"Top-left corner",": ",y("input",{defaultValue:b.tlccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.tlccoords=t}})),y("p",{},void 0,"Bottom-right corner",": ",y("input",{defaultValue:b.brccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.brccoords=t}})),y("button",{type:"button",onClick:()=>{A||(F(!0),async function(e,o,a,n,i){const l=new FormData;l.append("cleaneraction",e),l.append("canvasid",o),l.append("ulcoor",a),l.append("brcoor",n);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});var d;d=await r.text(),_({running:!0,percent:"N/A",method:x,tl:b.tlccoords,br:b.brccoords,canvasId:t}),F(!1),N(d)}(x,t,b.tlccoords,b.brccoords))}},void 0,A?"...":"Enviar"),y("button",{type:"button",onClick:()=>{A||(F(!0),async function(e){const t=new FormData;t.append("cleanercancel",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.text()):e("")}((e=>{_({}),F(!1),N(e)})))}},void 0,A?"...":"Stop Cleaner"))}const x=u.memo(g);var w,S,k,C,I,$,N,T,_,A;function F(e,t,o,a){A||(A="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:A,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function D(){const[e,t]=(0,u.useState)("iidtoip"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)(null),[d,s]=(0,u.useState)([]),[c,p]=(0,u.useState)(!1);return(0,u.useEffect)((()=>{!async function(e){const t=new FormData;t.append("modlist",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e([])}((e=>s(e)))}),[]),F("div",{className:"content"},void 0,l&&F("div",{className:"respbox"},void 0,l.split("\n").map((e=>F("p",{},e.slice(0,3),e))),F("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>r(null)},void 0,"Tanca")),F("div",{},void 0,w||(w=F("br",{})),F("h3",{},void 0,"Accions IP"),F("p",{},void 0,"Fes coses amb IPs (una per línia)"),F("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["iidtoip","iptoiid"].map((e=>F("option",{value:e},e,e)))),S||(S=F("br",{})),F("textarea",{rows:"10",cols:"17",value:n,onChange:e=>i(e.target.value)}),k||(k=F("br",{})),F("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o){const a=new FormData;a.append("ipaction",e),a.append("ip",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var l;l=await n.text(),p(!1),i(l)}(e,n))}},void 0,c?"...":"Enviar"),C||(C=F("br",{})),I||(I=F("div",{className:"modaldivider"})),F("h3",{},void 0,"Administrar moderadors"),F("p",{},void 0,"Eliminar moderador"),d.length?F("span",{className:"unblocklist"},void 0,d.map((e=>F("div",{role:"button",tabIndex:0,onClick:()=>{c||(p(!0),async function(t,o){const a=new FormData;a.append("remmod",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var i,l;i=n.ok,l=await n.text(),i&&s(d.filter((t=>t[0]!==e[0]))),p(!1),r(l)}(e[0]))}},e[0],`⦸ ${e[0]} ${e[1]}`)))):F("p",{},void 0,"No hi ha moderadors"),$||($=F("br",{})),F("p",{},void 0,"Assignar nou moderador"),F("p",{},void 0,"Introdueix el nom d'usuari del nou moderador",": ",F("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"20em"},type:"text",placeholder:"Nom d'usuari",onChange:e=>{const t=e.target.value.trim();a(t)}})),F("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t){const o=new FormData;o.append("makemod",e);const a=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:o});a.ok?t(await a.json()):t(await a.text())}(o,(e=>{"string"==typeof e?r(e):(r(`Made ${e[1]} mod successfully.`),s([...d,e])),p(!1)})))}},void 0,c?"...":"Enviar"),N||(N=F("br",{})),T||(T=F("div",{className:"modaldivider"})),_||(_=F("br",{}))))}const E=u.memo(D);var O,P,L,R=o(917);function W(e,t,o,a){L||(L="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:L,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const j={tlcoords:"",brcoords:"",interval:"15m",iid:""};async function U(e,t,o,a,n,i,l){let r=(0,h.bG)(n);if(!r)return void l({info:"Interval is invalid"});r=Date.now()-r;const d=new FormData;d.append("watchaction",e),d.append("canvasid",t),d.append("ulcoor",o),d.append("brcoor",a),d.append("time",r),d.append("iid",i);try{const e=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:d});let t;try{t=await e.json()}catch{throw new Error(await e.text())}l(await t)}catch(e){l({info:`Error: ${e.message}`})}}function Y(){const[e,t]=(0,u.useState)(0),[o,a]=(0,u.useState)(!0),[n,i]=(0,u.useState)(0),[l,r]=(0,u.useState)({}),[d,s]=(0,u.useState)(null),[c,p]=(0,u.useState)(!1),[m,f]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);(0,u.useEffect)((()=>{t(m)}),[m]);const{columns:y,types:b,rows:g,ts:x}=l,w=b?b.indexOf("cid"):-1;return u.createElement(u.Fragment,null,W("div",{className:"content"},void 0,d&&W("div",{className:"respbox"},void 0,d.split("\n").map((e=>W("p",{},e.slice(0,3),e))),W("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>s(null)},void 0,"Tanca")),W("p",{},void 0,"Check who placed in an area"),W("p",{},void 0,"Canvas",": ",W("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,Object.keys(f).filter((e=>!f[e].v)).map((e=>W("option",{value:e},e,f[e].title))))," Interval: ",W("input",{defaultValue:j.interval,style:{display:"inline-block",width:"100%",maxWidth:"5em"},type:"text",placeholder:"15m",onChange:e=>{const t=e.target.value.trim();j.interval=t}})," IID (optional): ",W("input",{defaultValue:j.iid,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{const t=e.target.value.trim();j.iid=t}})),W("p",{},void 0,"Top-left corner",": ",W("input",{defaultValue:j.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),j.tlcoords=t}})),W("p",{},void 0,"Bottom-right corner",": ",W("input",{defaultValue:j.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),j.brcoords=t}})),W("button",{type:"button",onClick:()=>{c||(p(!0),U("all",e,j.tlcoords,j.brcoords,j.interval,j.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Get Pixels"),W("button",{type:"button",onClick:()=>{c||(p(!0),U("summary",e,j.tlcoords,j.brcoords,j.interval,j.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Get Users")),O||(O=W("br",{})),g&&y&&b&&W(u.Fragment,{},x,P||(P=W("div",{className:"modaldivider"})),W("table",{style:{fontSize:11}},void 0,W("thead",{},void 0,W("tr",{},void 0,y.slice(1).map(((e,t)=>W("th",{style:n-1===t?{cursor:"pointer",fontWeight:"normal"}:{cursor:"pointer"},onClick:()=>{n-1===t?a(!o):i(t+1)}},e,e))))),W("tbody",{style:{userSelect:"text"}},void 0,g.sort(((e,t)=>function(e,t,o){if("string"==typeof e&&"string"==typeof t){let a=e.localeCompare(t);return o&&(a*=-1),a}return e&&"N/A"!==e||(e=0),t&&"N/A"!==t||(t=0),e<t?o?-1:1:e>t?o?1:-1:0}(e[n],t[n],o))).map((t=>W("tr",{},t[0],t.slice(1).map(((o,a)=>{const n=b[a+1];if(null===o)return W("td",{},n,"N/A");switch(n){case"ts":{const e=new Date(o),t=e.getHours(),a=`0${e.getMinutes()}`.slice(-2),i=`0${e.getSeconds()}`.slice(-2),l=`00${e.getMilliseconds()}`.slice(-3);return W("td",{title:e.toLocaleDateString()},n,`${t}:${a}:${i}.${l}`)}case"clr":{const a=w>0?t[w]:e,i=f[a]&&f[a].colors&&f[a].colors[o];return W("td",i?{style:{backgroundColor:`rgb(${i[0]},${i[1]},${i[2]})`}}:{},n,o)}case"coord":{const a=w>0?t[w]:e;return W("td",{},n,W("a",{href:`./#${f[a]&&f[a].ident},${o},47`},void 0,o))}case"flag":{const e=o.toLowerCase();return W("td",{title:o},n,W("img",{style:{height:"1em",imageRendering:"crisp-edges"},alt:o,src:`/cf/${e}.gif`}))}case"cid":{const e=f?.ident;return W("td",{},n,e)}case"cidr":return W("td",{},n,W("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"Copia al porta-retalls",onClick:()=>(0,R.Z)(o.slice(0,o.indexOf("/")))},void 0,o));case"uuid":return W("td",{},n,W("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"Copia al porta-retalls",onClick:()=>(0,R.Z)(o)},void 0,o));case"user":{const e=o.lastIndexOf(",");return-1===e?W("td",{},n,W("span",{},void 0,o)):W("td",{title:o.slice(e+1)},n,W("span",{},void 0,o.slice(0,e)))}default:return W("td",{},n,o)}})))))))))}var V,X,G,B;function H(e,t,o,a){V||(V="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:V,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function M(){const[e,t]=(0,u.useState)("givecaptcha"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)("1d"),[d,s]=(0,u.useState)(""),[c,p]=(0,u.useState)(!1);return H("div",{style:{textAlign:"center",paddingLeft:"5%",paddingRight:"5%"}},void 0,H("h3",{},void 0,"IID Actions"),H("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["status","givecaptcha","ban","unban","whitelist","unwhitelist"].map((e=>H("option",{value:e},e,e)))),"ban"===e&&H(u.Fragment,{},"ban",H("p",{},void 0,"Reason"),H("input",{maxLength:"200",style:{width:"100%"},value:n,placeholder:"Enter Reason",onChange:e=>i(e.target.value)}),H("p",{},void 0,"Duration: ",H("input",{style:{display:"inline-block",width:"100%",maxWidth:"7em"},value:l,placeholder:"1d",onChange:e=>{r(e.target.value.trim())}}),"(0 = infinite)")),H("p",{},void 0," IID: ",H("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{a(e.target.value.trim())}}),H("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o,a,n){let i=(0,h.bG)(a);if(0===i&&"0"!==a)return void n("You must enter a duration");if(!t)return void n("You must enter an IID");i>0&&(i+=Date.now());const l=new FormData;l.append("iidaction",e),l.append("reason",o),l.append("time",i),l.append("iid",t);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});n(await r.text())}(e,o,n,l,(e=>{p(!1),s(e)})))}},void 0,c?"...":"Enviar")),H("textarea",{style:{width:"100%"},rows:d?d.split("\n").length:10,value:d,readOnly:!0}))}function Z(e,t,o,a){B||(B="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:B,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const z={Canvas:x,Admin:E,Watch:u.memo(Y),IID:u.memo(M)};function q(){const[e,t]=(0,u.useState)("Canvas"),o=(0,v.v9)((e=>e.user.userlvl)),a=z[e],n=Object.keys(z).filter((e=>"Admin"!==e||1===o));return u.createElement(u.Fragment,null,Z("div",{className:"content",style:{overflowWrap:"anywhere"}},void 0,n.map(((o,a)=>Z(u.Fragment,{},o,Z("span",{role:"button",tabIndex:-1,className:e===o?"modallink selected":"modallink",onClick:()=>t(o)},void 0,o),a!==n.length-1&&(X||(X=Z("span",{className:"hdivider"})))))),G||(G=Z("div",{className:"modaldivider"}))),a&&Z(a,{}))}const J=u.memo(q)}}]);