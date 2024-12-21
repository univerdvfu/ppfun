"use strict";(self.webpackChunkpixelplanet=self.webpackChunkpixelplanet||[]).push([[189],{89:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var o,n,i,l,r,d,s,c,p,u=a(7294),v=a(743),m=a(389),y=a(259),b=a(631);function h(e,t,a,o){p||(p="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:p,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}const f={coords:"",tlcoords:"",brcoords:"",tlrcoords:"",brrcoords:"",tlccoords:"",brccoords:""};function w(){const e=(0,y.x2)(),[t,a]=(0,u.useState)(0),[p,w]=(0,u.useState)("build"),[g,x]=(0,u.useState)("spare"),[k,S]=(0,u.useState)("protect"),[z,C]=(0,u.useState)(e),[I,$]=(0,u.useState)(null),[P,j]=(0,u.useState)({}),[N,_]=(0,u.useState)(!1),[W,D]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);let F,O;switch((0,u.useEffect)((()=>{a(W)}),[W]),p){case"build":F="Bùduj céchùnk na płótnié.";break;case"protect":F="Zbùduj òbrôzk i nastawi gò na barniony.";break;case"wipe":F="Zbùduj òbrôzk, ale zresetuj cząd òpòzdzeniégò na cząd nieùstôwionégò piksela."}switch(g){case"spare":O="Wëczëscë wòlné pikselë òbtoczoné pikselama nieùstôwionyma";break;case"spareext":O="WWëczëscë wòlné pikselë òbtoczoné pikselama nieùstôwionyma i nôwëżi jednym jinym ùstôwionym";break;case"spareextu":O="Wëczëscë wòlné pikselë òbtoczoné pòjedińczną jiną farwą abò nieùstôwionyma pikselama (TRËCHELNÉ NA PŁÓTNACH DOPÙSZCZIWAJĄCËCH NIEÙSTÔWIONÉ PIKSELE (tam, gdze są dwa cządë òpòzdzeniégò)!)";break;case"makenull":O="Turn every pixel in area to 0 (YOU REALLY SHOULDN'T DO THAT ON ANY AREA THAT ISN'T ALREADY MOSTLY 0)"}(0,m.Z)((()=>{!async function(e){const t=new FormData;t.append("cleanerstat",!0);const a=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});a.ok?e(await a.json()):e({})}((e=>j(e)))}),1e4);const T=P.running?`Status: ${P.method} from ${P.tl} to ${P.br} on canvas ${D[P.canvasId].ident} to ${P.percent} done`:"Stón: Nie chòdzy";return h("div",{className:"content"},void 0,I&&h("div",{className:"respbox"},void 0,I.split("\n").map((e=>h("p",{},e.slice(0,3),e))),h("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>$(null)},void 0,"Zamkni")),h("p",{},void 0,"Wëbierzë płótna",": ",h("select",{value:t,onChange:e=>{const t=e.target;a(t.options[t.selectedIndex].value)}},void 0,Object.keys(D).filter((e=>!D[e].v)).map((e=>h("option",{value:e},e,D[e].title))))),o||(o=h("div",{className:"modaldivider"})),h("h3",{},void 0,"Wcygniãcé òbrazu"),h("p",{},void 0,"Wcygôj òbrazë na płótna"),h("p",{},void 0,"Lópk",": ",n||(n=h("input",{type:"file",name:"image",id:"imgfile"}))),h("select",{value:p,onChange:e=>{const t=e.target;w(t.options[t.selectedIndex].value)}},void 0,["build","protect","wipe"].map((e=>h("option",{value:e},e,e)))),h("p",{},void 0,F),h("p",{},void 0,"Wespółrzãdné:"," ",h("input",{defaultValue:f.coords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),f.coords=t}})),h("button",{type:"button",onClick:()=>{N||(_(!0),async function(e,t,a,o){const n=new FormData,i=document.getElementById("imgfile"),l=i.files&&i.files[0]?i.files[0]:null;n.append("imageaction",e),n.append("image",l),n.append("canvasid",t),n.append("coords",a);const r=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:n});var d;d=await r.text(),_(!1),$(d)}(p,t,f.coords))}},void 0,N?"...":"Przeslë"),i||(i=h("br",{})),l||(l=h("div",{className:"modaldivider"})),h("h3",{},void 0,"Òbarna pikselów"),h("p",{},void 0,"Nastôwi òbarnã dlô òbéńdów (żelë brëkùjesz barżi szczegółowi kòntrolë, ùżij òbarnë w grëpie ze wcygniãcym òbrazu i wiôrztama alfa)"),h("select",{value:k,onChange:e=>{const t=e.target;S(t.options[t.selectedIndex].value)}},void 0,["protect","unprotect"].map((e=>h("option",{value:e},e,e)))),h("p",{},void 0,"Lewi górny nórt",": ",h("input",{defaultValue:f.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),f.tlcoords=t}})),h("p",{},void 0,"Prawy dolny nórt",": ",h("input",{defaultValue:f.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),f.brcoords=t}})),h("button",{type:"button",onClick:()=>{N||(_(!0),async function(e,t,a,o,n){const i=new FormData;i.append("protaction",e),i.append("canvasid",t),i.append("ulcoor",a),i.append("brcoor",o);const l=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var r;r=await l.text(),_(!1),$(r)}(k,t,f.tlcoords,f.brcoords))}},void 0,N?"...":"Przeslë"),window.ssv&&window.ssv.backupurl&&h("div",{},void 0,r||(r=h("br",{})),d||(d=h("div",{className:"modaldivider"})),h("h3",{},void 0,"Przëwócë céchùnk dlô datë"),h("p",{},void 0,"Rollback an area of the canvas to a set date (00:00 UTC)"),h("input",{type:"date",value:z,pattern:"\\d{4}-\\d{2}-\\d{2}",min:D[t].sd,max:e,onChange:e=>{C(e.target.value)}}),h("p",{},void 0,"Lewi górny nórt",": ",h("input",{defaultValue:f.tlrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),f.tlrcoords=t}})),h("p",{},void 0,"Prawy dolny nórt",": ",h("input",{defaultValue:f.brrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),f.brrcoords=t}})),h("button",{type:"button",onClick:()=>{N||(_(!0),async function(e,t,a,o,n){const i=new FormData,l=(0,y.UW)(e);i.append("rollback",l),i.append("canvasid",t),i.append("ulcoor",a),i.append("brcoor",o);const r=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var d;d=await r.text(),_(!1),$(d)}(z,t,f.tlrcoords,f.brrcoords))}},void 0,N?"...":"Przeslë")),s||(s=h("br",{})),c||(c=h("div",{className:"modaldivider"})),h("h3",{},void 0,"Czëszczenié płótna"),h("p",{},void 0,"Ùżij filtra bë òczëscëc kòsz we wiôldżich òbéńdach płótna."),h("select",{value:g,onChange:e=>{const t=e.target;x(t.options[t.selectedIndex].value)}},void 0,["spare","spareext","spareextu","makenull"].map((e=>h("option",{value:e},e,e)))),h("p",{},void 0,O),h("p",{style:{fontWeight:"bold"}},void 0,T),h("p",{},void 0,"Lewi górny nórt",": ",h("input",{defaultValue:f.tlccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),f.tlccoords=t}})),h("p",{},void 0,"Prawy dolny nórt",": ",h("input",{defaultValue:f.brccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),f.brccoords=t}})),h("button",{type:"button",onClick:()=>{N||(_(!0),async function(e,a,o,n,i){const l=new FormData;l.append("cleaneraction",e),l.append("canvasid",a),l.append("ulcoor",o),l.append("brcoor",n);const r=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});var d;d=await r.text(),j({running:!0,percent:"N/A",method:g,tl:f.tlccoords,br:f.brccoords,canvasId:t}),_(!1),$(d)}(g,t,f.tlccoords,f.brccoords))}},void 0,N?"...":"Przeslë"),h("button",{type:"button",onClick:()=>{N||(_(!0),async function(e){const t=new FormData;t.append("cleanercancel",!0);const a=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});a.ok?e(await a.text()):e("")}((e=>{j({}),_(!1),$(e)})))}},void 0,N?"...":"Zatrzëmôj czëszczenié"))}const g=u.memo(w);var x,k,S,z,C,I,$,P,j,N;function _(e,t,a,o){N||(N="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:N,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function W(){const[e,t]=(0,u.useState)("iidtoip"),[a,o]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)(null),[d,s]=(0,u.useState)([]),[c,p]=(0,u.useState)(!1);return(0,u.useEffect)((()=>{!async function(e){const t=new FormData;t.append("modlist",!0);const a=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});a.ok?e(await a.json()):e([])}((e=>s(e)))}),[]),_("div",{className:"content"},void 0,l&&_("div",{className:"respbox"},void 0,l.split("\n").map((e=>_("p",{},e.slice(0,3),e))),_("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>r(null)},void 0,"Zamkni")),_("div",{},void 0,x||(x=_("br",{})),_("h3",{},void 0,"Dzejania na IP"),_("p",{},void 0,"Dzejôj na IP (jedno IP na lënią)"),_("select",{value:e,onChange:e=>{const a=e.target;t(a.options[a.selectedIndex].value)}},void 0,["iidtoip","iptoiid"].map((e=>_("option",{value:e},e,e)))),k||(k=_("br",{})),_("textarea",{rows:"10",cols:"17",value:n,onChange:e=>i(e.target.value)}),S||(S=_("br",{})),_("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,a){const o=new FormData;o.append("ipaction",e),o.append("ip",t);const n=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:o});var l;l=await n.text(),p(!1),i(l)}(e,n))}},void 0,c?"...":"Przeslë"),z||(z=_("br",{})),C||(C=_("div",{className:"modaldivider"})),_("h3",{},void 0,"Zarządzôj szandarama"),_("p",{},void 0,"Rëmni szandarã"),d.length?_("span",{className:"unblocklist"},void 0,d.map((e=>_("div",{role:"button",tabIndex:0,onClick:()=>{c||(p(!0),async function(t,a){const o=new FormData;o.append("remmod",t);const n=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:o});var i,l;i=n.ok,l=await n.text(),i&&s(d.filter((t=>t[0]!==e[0]))),p(!1),r(l)}(e[0]))}},e[0],`⦸ ${e[0]} ${e[1]}`)))):_("p",{},void 0,"Ni ma niżôdnégò Szandarë"),I||(I=_("br",{})),_("p",{},void 0,"Przëpiszë nową Szandarã"),_("p",{},void 0,"Wpiszë pòzwã nowi Szandarë",": ",_("input",{value:a,style:{display:"inline-block",width:"100%",maxWidth:"20em"},type:"text",placeholder:"Pòzwa brëkòwnika",onChange:e=>{const t=e.target.value.trim();o(t)}})),_("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t){const a=new FormData;a.append("makemod",e);const o=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});o.ok?t(await o.json()):t(await o.text())}(a,(e=>{"string"==typeof e?r(e):(r(`Made ${e[1]} mod successfully.`),s([...d,e])),p(!1)})))}},void 0,c?"...":"Przeslë"),$||($=_("br",{})),P||(P=_("div",{className:"modaldivider"})),j||(j=_("br",{}))))}const D=u.memo(W);var F,O,T,L=a(917);function A(e,t,a,o){T||(T="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:T,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}const R={tlcoords:"",brcoords:"",interval:"15m",iid:""};async function E(e,t,a,o,n,i,l){let r=(0,y.bG)(n);if(!r)return void l({info:"Interwala je lëchô"});r=Date.now()-r;const d=new FormData;d.append("watchaction",e),d.append("canvasid",t),d.append("ulcoor",a),d.append("brcoor",o),d.append("time",r),d.append("iid",i);try{const e=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:d});let t;try{t=await e.json()}catch{throw new Error(await e.text())}l(await t)}catch(e){l({info:`Error: ${e.message}`})}}function U(){const[e,t]=(0,u.useState)(0),[a,o]=(0,u.useState)(!0),[n,i]=(0,u.useState)(0),[l,r]=(0,u.useState)({}),[d,s]=(0,u.useState)(null),[c,p]=(0,u.useState)(!1),[m,b]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);(0,u.useEffect)((()=>{t(m)}),[m]);const{columns:h,types:f,rows:w,ts:g}=l,x=f?f.indexOf("cid"):-1;return u.createElement(u.Fragment,null,A("div",{className:"content"},void 0,d&&A("div",{className:"respbox"},void 0,d.split("\n").map((e=>A("p",{},e.slice(0,3),e))),A("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>s(null)},void 0,"Zamkni")),A("p",{},void 0,"Sprôwdzë chto pòstawił wew dónym môlu"),A("p",{},void 0,"Płótna",": ",A("select",{value:e,onChange:e=>{const a=e.target;t(a.options[a.selectedIndex].value)}},void 0,Object.keys(b).filter((e=>!b[e].v)).map((e=>A("option",{value:e},e,b[e].title))))," Interwala: ",A("input",{defaultValue:R.interval,style:{display:"inline-block",width:"100%",maxWidth:"5em"},type:"text",placeholder:"15m",onChange:e=>{const t=e.target.value.trim();R.interval=t}})," IID (òptacëjno): ",A("input",{defaultValue:R.iid,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{const t=e.target.value.trim();R.iid=t}})),A("p",{},void 0,"Lewi górny nórt",": ",A("input",{defaultValue:R.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),R.tlcoords=t}})),A("p",{},void 0,"Prawy dolny nórt",": ",A("input",{defaultValue:R.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,y._I)(t),t&&(t=t.join("_"),e.target.value=t),R.brcoords=t}})),A("button",{type:"button",onClick:()=>{c||(p(!0),E("all",e,R.tlcoords,R.brcoords,R.interval,R.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Krëgni piksele"),A("button",{type:"button",onClick:()=>{c||(p(!0),E("summary",e,R.tlcoords,R.brcoords,R.interval,R.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Krëgni brëkòwników")),F||(F=A("br",{})),w&&h&&f&&A(u.Fragment,{},g,O||(O=A("div",{className:"modaldivider"})),A("table",{style:{fontSize:11}},void 0,A("thead",{},void 0,A("tr",{},void 0,h.slice(1).map(((e,t)=>A("th",{style:n-1===t?{cursor:"pointer",fontWeight:"normal"}:{cursor:"pointer"},onClick:()=>{n-1===t?o(!a):i(t+1)}},e,e))))),A("tbody",{style:{userSelect:"text"}},void 0,w.sort(((e,t)=>function(e,t,a){if("string"==typeof e&&"string"==typeof t){let o=e.localeCompare(t);return a&&(o*=-1),o}return e&&"N/A"!==e||(e=0),t&&"N/A"!==t||(t=0),e<t?a?-1:1:e>t?a?1:-1:0}(e[n],t[n],a))).map((t=>A("tr",{},t[0],t.slice(1).map(((a,o)=>{const n=f[o+1];if(null===a)return A("td",{},n,"N/A");switch(n){case"ts":{const e=new Date(a),t=e.getHours(),o=`0${e.getMinutes()}`.slice(-2),i=`0${e.getSeconds()}`.slice(-2),l=`00${e.getMilliseconds()}`.slice(-3);return A("td",{title:e.toLocaleDateString()},n,`${t}:${o}:${i}.${l}`)}case"clr":{const o=x>0?t[x]:e,i=b[o]&&b[o].colors&&b[o].colors[a];return A("td",i?{style:{backgroundColor:`rgb(${i[0]},${i[1]},${i[2]})`}}:{},n,a)}case"coord":{const o=x>0?t[x]:e;return A("td",{},n,A("a",{href:`./#${b[o]&&b[o].ident},${a},47`},void 0,a))}case"flag":{const e=a.toLowerCase();return A("td",{title:a},n,A("img",{style:{height:"1em",imageRendering:"crisp-edges"},alt:a,src:`/cf/${e}.gif`}))}case"cid":{const e=b?.ident;return A("td",{},n,e)}case"cidr":return A("td",{},n,A("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"Skòpieruj do Tacnika",onClick:()=>(0,L.Z)(a.slice(0,a.indexOf("/")))},void 0,a));case"uuid":return A("td",{},n,A("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"Skòpieruj do Tacnika",onClick:()=>(0,L.Z)(a)},void 0,a));case"user":{const e=a.lastIndexOf(",");return-1===e?A("td",{},n,A("span",{},void 0,a)):A("td",{title:a.slice(e+1)},n,A("span",{},void 0,a.slice(0,e)))}default:return A("td",{},n,a)}})))))))))}var Y,Z,V,X;function H(e,t,a,o){Y||(Y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:Y,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function M(){const[e,t]=(0,u.useState)("givecaptcha"),[a,o]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)("1d"),[d,s]=(0,u.useState)(""),[c,p]=(0,u.useState)(!1);return H("div",{style:{textAlign:"center",paddingLeft:"5%",paddingRight:"5%"}},void 0,H("h3",{},void 0,"Dzejônia IID"),H("select",{value:e,onChange:e=>{const a=e.target;t(a.options[a.selectedIndex].value)}},void 0,["status","givecaptcha","ban","unban","whitelist","unwhitelist"].map((e=>H("option",{value:e},e,e)))),"ban"===e&&H(u.Fragment,{},"ban",H("p",{},void 0,"Pòwód"),H("input",{maxLength:"200",style:{width:"100%"},value:n,placeholder:"Wpiszë Pòwód",onChange:e=>i(e.target.value)}),H("p",{},void 0,"Na cząd: ",H("input",{style:{display:"inline-block",width:"100%",maxWidth:"7em"},value:l,placeholder:"1d",onChange:e=>{r(e.target.value.trim())}}),"(0 = nieskùńczoné)")),H("p",{},void 0," IID: ",H("input",{value:a,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{o(e.target.value.trim())}}),H("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,a,o,n){let i=(0,y.bG)(o);if(0===i&&"0"!==o)return void n("Mùszisz wprowadzëc czas derowaniô");if(!t)return void n("Mùszisz wprowadzëc IID");i>0&&(i+=Date.now());const l=new FormData;l.append("iidaction",e),l.append("reason",a),l.append("time",i),l.append("iid",t);const r=await fetch(`${b.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});n(await r.text())}(e,a,n,l,(e=>{p(!1),s(e)})))}},void 0,c?"...":"Przeslë")),H("textarea",{style:{width:"100%"},rows:d?d.split("\n").length:10,value:d,readOnly:!0}))}function K(e,t,a,o){X||(X="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:X,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}const B={Canvas:g,Admin:D,Watch:u.memo(U),IID:u.memo(M)};function G(){const[e,t]=(0,u.useState)("Canvas"),a=(0,v.v9)((e=>e.user.userlvl)),o=B[e],n=Object.keys(B).filter((e=>"Admin"!==e||1===a));return u.createElement(u.Fragment,null,K("div",{className:"content",style:{overflowWrap:"anywhere"}},void 0,n.map(((a,o)=>K(u.Fragment,{},a,K("span",{role:"button",tabIndex:-1,className:e===a?"modallink selected":"modallink",onClick:()=>t(a)},void 0,a),o!==n.length-1&&(Z||(Z=K("span",{className:"hdivider"})))))),V||(V=K("div",{className:"modaldivider"}))),o&&K(o,{}))}const J=u.memo(G)}}]);