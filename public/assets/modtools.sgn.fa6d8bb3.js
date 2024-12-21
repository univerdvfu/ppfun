"use strict";(self.webpackChunkpixelplanet=self.webpackChunkpixelplanet||[]).push([[189],{89:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});var a,n,i,l,r,d,s,c,p,u=o(7294),v=o(743),m=o(389),h=o(259),f=o(631);function y(e,t,o,a){p||(p="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:p,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const b={coords:"",tlcoords:"",brcoords:"",tlrcoords:"",brrcoords:"",tlccoords:"",brccoords:""};function g(){const e=(0,h.x2)(),[t,o]=(0,u.useState)(0),[p,g]=(0,u.useState)("build"),[x,w]=(0,u.useState)("spare"),[k,S]=(0,u.useState)("protect"),[C,I]=(0,u.useState)(e),[$,_]=(0,u.useState)(null),[F,N]=(0,u.useState)({}),[D,P]=(0,u.useState)(!1),[O,W]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);let T,U;switch((0,u.useEffect)((()=>{o(O)}),[O]),p){case"build":T="Build image on canvas.";break;case"protect":T="Build image and set it to protected.";break;case"wipe":T="Build image, but reset cooldown to unset-pixel cd."}switch(x){case"spare":U="Clean spare pixels that are surrounded by unset pixels";break;case"spareext":U="Clean spare pixels that are surrounded by unset pixels and up to 1 other set pixels";break;case"spareextu":U="🤘👍🤙✌️👇 🖖👎✌️☝️🤙 👎🤞👉🤙👍🖖 👋🖐✌️👋 ✌️☝️🤙 🖖🙌☝️☝️👌🙌👇🤚🤙🤚 👈👏 ✌️ 🖖🤞👇🤛👍🤙 👌👋🖐🤙☝️ 🤘👌👍👌☝️ 👌☝️ 🙌👇🖖🤙👋 👎🤞👉🤙👍🖖 (🤜🤙☝️👏 ✌️🤛🤛☝️🤙🖖🖖🤞🤜🤙 👌👇 🤘✌️👇🤜✌️🖖🤙🖖 👋🖐✌️👋 ✌️👍👍👌👐 🙌👇🖖🤙👋 👎🤞👉🤙👍🖖 (👐🖐🤙☝️🤙 👋🖐🤙☝️🤙 ✌️☝️🤙 👋👐👌 🤘👌👌👍🤚👌👐👇🖖)!)";break;case"makenull":U="👋🙌☝️👇 🤙🤜🤙☝️👏 👎🤞👉🤙👍 🤞👇 ✌️☝️🤙✌️ 👋👌 0️⃣ (👏👌🙌 ☝️🤙✌️👍👍👏 🖖🖐👌🙌👍🤚👇'👋 🤚👌 👋🖐✌️👋 👌👇 ✌️👇👏 ✌️☝️🤙✌️ 👋🖐✌️👋 🤞🖖👇'👋 ✌️👍☝️🤙✌️🤚👏 👆👌🖖👋👍👏 0️⃣)"}(0,m.Z)((()=>{!async function(e){const t=new FormData;t.append("cleanerstat",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e({})}((e=>N(e)))}),1e4);const j=F.running?`Status: ${F.method} from ${F.tl} to ${F.br} on canvas ${W[F.canvasId].ident} to ${F.percent} done`:"Status: Not running";return y("div",{className:"content"},void 0,$&&y("div",{className:"respbox"},void 0,$.split("\n").map((e=>y("p",{},e.slice(0,3),e))),y("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>_(null)},void 0,"🤘👍👌🖖🤙")),y("p",{},void 0,"🤘🖐👌👌🖖🤙 🤘✌️👇🤜✌️🖖",": ",y("select",{value:t,onChange:e=>{const t=e.target;o(t.options[t.selectedIndex].value)}},void 0,Object.keys(W).filter((e=>!W[e].v)).map((e=>y("option",{value:e},e,W[e].title))))),a||(a=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Image Upload"),y("p",{},void 0,"Upload images to canvas"),y("p",{},void 0,"File",": ",n||(n=y("input",{type:"file",name:"image",id:"imgfile"}))),y("select",{value:p,onChange:e=>{const t=e.target;g(t.options[t.selectedIndex].value)}},void 0,["build","protect","wipe"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,T),y("p",{},void 0,"Coordinates:"," ",y("input",{defaultValue:b.coords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.coords=t}})),y("button",{type:"button",onClick:()=>{D||(P(!0),async function(e,t,o,a){const n=new FormData,i=document.getElementById("imgfile"),l=i.files&&i.files[0]?i.files[0]:null;n.append("imageaction",e),n.append("image",l),n.append("canvasid",t),n.append("coords",o);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:n});var d;d=await r.text(),P(!1),_(d)}(p,t,b.coords))}},void 0,D?"...":"🖖🙌👈👆🤞👋"),i||(i=y("br",{})),l||(l=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Pixel Protection"),y("p",{},void 0,"Set protection of areas (if you need finer grained control, use protect with image upload and alpha layers)"),y("select",{value:k,onChange:e=>{const t=e.target;S(t.options[t.selectedIndex].value)}},void 0,["protect","unprotect"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,"Top-left corner",": ",y("input",{defaultValue:b.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.tlcoords=t}})),y("p",{},void 0,"Bottom-right corner",": ",y("input",{defaultValue:b.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.brcoords=t}})),y("button",{type:"button",onClick:()=>{D||(P(!0),async function(e,t,o,a,n){const i=new FormData;i.append("protaction",e),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const l=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var r;r=await l.text(),P(!1),_(r)}(k,t,b.tlcoords,b.brcoords))}},void 0,D?"...":"🖖🙌👈👆🤞👋"),window.ssv&&window.ssv.backupurl&&y("div",{},void 0,r||(r=y("br",{})),d||(d=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Rollback to Date"),y("p",{},void 0,"Rollback an area of the canvas to a set date (00:00 UTC)"),y("input",{type:"date",value:C,pattern:"\\d{4}-\\d{2}-\\d{2}",min:W[t].sd,max:e,onChange:e=>{I(e.target.value)}}),y("p",{},void 0,"Top-left corner",": ",y("input",{defaultValue:b.tlrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.tlrcoords=t}})),y("p",{},void 0,"Bottom-right corner",": ",y("input",{defaultValue:b.brrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.brrcoords=t}})),y("button",{type:"button",onClick:()=>{D||(P(!0),async function(e,t,o,a,n){const i=new FormData,l=(0,h.UW)(e);i.append("rollback",l),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var d;d=await r.text(),P(!1),_(d)}(C,t,b.tlrcoords,b.brrcoords))}},void 0,D?"...":"🖖🙌👈👆🤞👋")),s||(s=y("br",{})),c||(c=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Canvas Cleaner"),y("p",{},void 0,"Apply a filter to clean trash in large canvas areas."),y("select",{value:x,onChange:e=>{const t=e.target;w(t.options[t.selectedIndex].value)}},void 0,["spare","spareext","spareextu","makenull"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,U),y("p",{style:{fontWeight:"bold"}},void 0,j),y("p",{},void 0,"Top-left corner",": ",y("input",{defaultValue:b.tlccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.tlccoords=t}})),y("p",{},void 0,"Bottom-right corner",": ",y("input",{defaultValue:b.brccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),b.brccoords=t}})),y("button",{type:"button",onClick:()=>{D||(P(!0),async function(e,o,a,n,i){const l=new FormData;l.append("cleaneraction",e),l.append("canvasid",o),l.append("ulcoor",a),l.append("brcoor",n);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});var d;d=await r.text(),N({running:!0,percent:"N/A",method:x,tl:b.tlccoords,br:b.brccoords,canvasId:t}),P(!1),_(d)}(x,t,b.tlccoords,b.brccoords))}},void 0,D?"...":"🖖🙌👈👆🤞👋"),y("button",{type:"button",onClick:()=>{D||(P(!0),async function(e){const t=new FormData;t.append("cleanercancel",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.text()):e("")}((e=>{N({}),P(!1),_(e)})))}},void 0,D?"...":"Stop Cleaner"))}const x=u.memo(g);var w,k,S,C,I,$,_,F,N,D;function P(e,t,o,a){D||(D="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:D,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function O(){const[e,t]=(0,u.useState)("iidtoip"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)(null),[d,s]=(0,u.useState)([]),[c,p]=(0,u.useState)(!1);return(0,u.useEffect)((()=>{!async function(e){const t=new FormData;t.append("modlist",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e([])}((e=>s(e)))}),[]),P("div",{className:"content"},void 0,l&&P("div",{className:"respbox"},void 0,l.split("\n").map((e=>P("p",{},e.slice(0,3),e))),P("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>r(null)},void 0,"🤘👍👌🖖🤙")),P("div",{},void 0,w||(w=P("br",{})),P("h3",{},void 0,"IP Actions"),P("p",{},void 0,"Do stuff with IPs (one IP per line)"),P("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["iidtoip","iptoiid"].map((e=>P("option",{value:e},e,e)))),k||(k=P("br",{})),P("textarea",{rows:"10",cols:"17",value:n,onChange:e=>i(e.target.value)}),S||(S=P("br",{})),P("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o){const a=new FormData;a.append("ipaction",e),a.append("ip",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var l;l=await n.text(),p(!1),i(l)}(e,n))}},void 0,c?"...":"🖖🙌👈👆🤞👋"),C||(C=P("br",{})),I||(I=P("div",{className:"modaldivider"})),P("h3",{},void 0,"Manage Moderators"),P("p",{},void 0,"Remove Moderator"),d.length?P("span",{className:"unblocklist"},void 0,d.map((e=>P("div",{role:"button",tabIndex:0,onClick:()=>{c||(p(!0),async function(t,o){const a=new FormData;a.append("remmod",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var i,l;i=n.ok,l=await n.text(),i&&s(d.filter((t=>t[0]!==e[0]))),p(!1),r(l)}(e[0]))}},e[0],`⦸ ${e[0]} ${e[1]}`)))):P("p",{},void 0,"There are no mods"),$||($=P("br",{})),P("p",{},void 0,"Assign new Mod"),P("p",{},void 0,"Enter UserName of new Mod",": ",P("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"20em"},type:"text",placeholder:"User Name",onChange:e=>{const t=e.target.value.trim();a(t)}})),P("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t){const o=new FormData;o.append("makemod",e);const a=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:o});a.ok?t(await a.json()):t(await a.text())}(o,(e=>{"string"==typeof e?r(e):(r(`Made ${e[1]} mod successfully.`),s([...d,e])),p(!1)})))}},void 0,c?"...":"🖖🙌👈👆🤞👋"),_||(_=P("br",{})),F||(F=P("div",{className:"modaldivider"})),N||(N=P("br",{}))))}const W=u.memo(O);var T,U,j,A=o(917);function R(e,t,o,a){j||(j="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:j,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const L={tlcoords:"",brcoords:"",interval:"15m",iid:""};async function V(e,t,o,a,n,i,l){let r=(0,h.bG)(n);if(!r)return void l({info:"Interval is invalid"});r=Date.now()-r;const d=new FormData;d.append("watchaction",e),d.append("canvasid",t),d.append("ulcoor",o),d.append("brcoor",a),d.append("time",r),d.append("iid",i);try{const e=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:d});let t;try{t=await e.json()}catch{throw new Error(await e.text())}l(await t)}catch(e){l({info:`Error: ${e.message}`})}}function Y(){const[e,t]=(0,u.useState)(0),[o,a]=(0,u.useState)(!0),[n,i]=(0,u.useState)(0),[l,r]=(0,u.useState)({}),[d,s]=(0,u.useState)(null),[c,p]=(0,u.useState)(!1),[m,f]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);(0,u.useEffect)((()=>{t(m)}),[m]);const{columns:y,types:b,rows:g,ts:x}=l,w=b?b.indexOf("cid"):-1;return u.createElement(u.Fragment,null,R("div",{className:"content"},void 0,d&&R("div",{className:"respbox"},void 0,d.split("\n").map((e=>R("p",{},e.slice(0,3),e))),R("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>s(null)},void 0,"🤘👍👌🖖🤙")),R("p",{},void 0,"Check who placed in an area"),R("p",{},void 0,"Canvas",": ",R("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,Object.keys(f).filter((e=>!f[e].v)).map((e=>R("option",{value:e},e,f[e].title))))," Interval: ",R("input",{defaultValue:L.interval,style:{display:"inline-block",width:"100%",maxWidth:"5em"},type:"text",placeholder:"15m",onChange:e=>{const t=e.target.value.trim();L.interval=t}})," IID (optional): ",R("input",{defaultValue:L.iid,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{const t=e.target.value.trim();L.iid=t}})),R("p",{},void 0,"Top-left corner",": ",R("input",{defaultValue:L.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),L.tlcoords=t}})),R("p",{},void 0,"Bottom-right corner",": ",R("input",{defaultValue:L.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y or URL",onChange:e=>{let t=e.target.value.trim();t=(0,h._I)(t),t&&(t=t.join("_"),e.target.value=t),L.brcoords=t}})),R("button",{type:"button",onClick:()=>{c||(p(!0),V("all",e,L.tlcoords,L.brcoords,L.interval,L.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Get Pixels"),R("button",{type:"button",onClick:()=>{c||(p(!0),V("summary",e,L.tlcoords,L.brcoords,L.interval,L.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Get Users")),T||(T=R("br",{})),g&&y&&b&&R(u.Fragment,{},x,U||(U=R("div",{className:"modaldivider"})),R("table",{style:{fontSize:11}},void 0,R("thead",{},void 0,R("tr",{},void 0,y.slice(1).map(((e,t)=>R("th",{style:n-1===t?{cursor:"pointer",fontWeight:"normal"}:{cursor:"pointer"},onClick:()=>{n-1===t?a(!o):i(t+1)}},e,e))))),R("tbody",{style:{userSelect:"text"}},void 0,g.sort(((e,t)=>function(e,t,o){if("string"==typeof e&&"string"==typeof t){let a=e.localeCompare(t);return o&&(a*=-1),a}return e&&"N/A"!==e||(e=0),t&&"N/A"!==t||(t=0),e<t?o?-1:1:e>t?o?1:-1:0}(e[n],t[n],o))).map((t=>R("tr",{},t[0],t.slice(1).map(((o,a)=>{const n=b[a+1];if(null===o)return R("td",{},n,"N/A");switch(n){case"ts":{const e=new Date(o),t=e.getHours(),a=`0${e.getMinutes()}`.slice(-2),i=`0${e.getSeconds()}`.slice(-2),l=`00${e.getMilliseconds()}`.slice(-3);return R("td",{title:e.toLocaleDateString()},n,`${t}:${a}:${i}.${l}`)}case"clr":{const a=w>0?t[w]:e,i=f[a]&&f[a].colors&&f[a].colors[o];return R("td",i?{style:{backgroundColor:`rgb(${i[0]},${i[1]},${i[2]})`}}:{},n,o)}case"coord":{const a=w>0?t[w]:e;return R("td",{},n,R("a",{href:`./#${f[a]&&f[a].ident},${o},47`},void 0,o))}case"flag":{const e=o.toLowerCase();return R("td",{title:o},n,R("img",{style:{height:"1em",imageRendering:"crisp-edges"},alt:o,src:`/cf/${e}.gif`}))}case"cid":{const e=f?.ident;return R("td",{},n,e)}case"cidr":return R("td",{},n,R("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"🤘👌👎👏 👋👌 🤘👍🤞👎👈👌✌️☝️🤚",onClick:()=>(0,A.Z)(o.slice(0,o.indexOf("/")))},void 0,o));case"uuid":return R("td",{},n,R("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"🤘👌👎👏 👋👌 🤘👍🤞👎👈👌✌️☝️🤚",onClick:()=>(0,A.Z)(o)},void 0,o));case"user":{const e=o.lastIndexOf(",");return-1===e?R("td",{},n,R("span",{},void 0,o)):R("td",{title:o.slice(e+1)},n,R("span",{},void 0,o.slice(0,e)))}default:return R("td",{},n,o)}})))))))))}var E,X,B,M;function G(e,t,o,a){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:E,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function Z(){const[e,t]=(0,u.useState)("givecaptcha"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)("1d"),[d,s]=(0,u.useState)(""),[c,p]=(0,u.useState)(!1);return G("div",{style:{textAlign:"center",paddingLeft:"5%",paddingRight:"5%"}},void 0,G("h3",{},void 0,"IID Actions"),G("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["status","givecaptcha","ban","unban","whitelist","unwhitelist"].map((e=>G("option",{value:e},e,e)))),"ban"===e&&G(u.Fragment,{},"ban",G("p",{},void 0,"☝️🤙✌️🖖👌👇"),G("input",{maxLength:"200",style:{width:"100%"},value:n,placeholder:"Enter Reason",onChange:e=>i(e.target.value)}),G("p",{},void 0,"🤚🙌☝️✌️👋🤞👌👇: ",G("input",{style:{display:"inline-block",width:"100%",maxWidth:"7em"},value:l,placeholder:"1d",onChange:e=>{r(e.target.value.trim())}}),"(0 = infinite)")),G("p",{},void 0," IID: ",G("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{a(e.target.value.trim())}}),G("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o,a,n){let i=(0,h.bG)(a);if(0===i&&"0"!==a)return void n("You must enter a duration");if(!t)return void n("You must enter an IID");i>0&&(i+=Date.now());const l=new FormData;l.append("iidaction",e),l.append("reason",o),l.append("time",i),l.append("iid",t);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});n(await r.text())}(e,o,n,l,(e=>{p(!1),s(e)})))}},void 0,c?"...":"🖖🙌👈👆🤞👋")),G("textarea",{style:{width:"100%"},rows:d?d.split("\n").length:10,value:d,readOnly:!0}))}function z(e,t,o,a){M||(M="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:M,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const H={Canvas:x,Admin:W,Watch:u.memo(Y),IID:u.memo(Z)};function q(){const[e,t]=(0,u.useState)("Canvas"),o=(0,v.v9)((e=>e.user.userlvl)),a=H[e],n=Object.keys(H).filter((e=>"Admin"!==e||1===o));return u.createElement(u.Fragment,null,z("div",{className:"content",style:{overflowWrap:"anywhere"}},void 0,n.map(((o,a)=>z(u.Fragment,{},o,z("span",{role:"button",tabIndex:-1,className:e===o?"modallink selected":"modallink",onClick:()=>t(o)},void 0,o),a!==n.length-1&&(X||(X=z("span",{className:"hdivider"})))))),B||(B=z("div",{className:"modaldivider"}))),a&&z(a,{}))}const J=u.memo(q)}}]);