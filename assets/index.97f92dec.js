var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;"undefined"!=typeof require&&require;import{F as s,A as c,D as i,P as m,L as d,a as u,b as p,S as E,T as g,c as h,d as f,e as y,f as b,g as k,C as w,V as v,h as x,i as L,j,k as C,l as I,m as N,n as T,I as z,o as S,R as A,p as M,q as B,r as D,s as P,G as O,t as q,u as R,v as U,w as $,x as H,y as V,z as W,B as _,M as X,E as Y,H as F,J as K,N as G,K as J,O as Q,Q as Z,U as ee,W as te,X as ae,Y as re,Z as ne,_ as le,$ as oe,a0 as se,a1 as ce,a2 as ie,a3 as me,a4 as de,a5 as ue,a6 as pe,a7 as Ee,a8 as ge,a9 as he,aa as fe,ab as ye,ac as be,ad as ke,ae as we,af as ve,ag as xe,ah as Le,ai as je,aj as Ce,ak as Ie,al as Ne,am as Te,an as ze,ao as Se,ap as Ae,aq as Me,ar as Be,as as De,at as Pe,au as Oe,av as qe}from"./vendor.1b1d9aae.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),s.use([c,i,m,d,u,p,E,g,h,f,y,b,k,w,v,x,L,j,C,I,N,T,z,S,A,M,B,D,P,O,q,R,U,$,H,V,W,_,X,Y,F,K,G,J,Q,Z,ee,te,ae,re,ne,le]);const Re=xe({getters:{products:({state:e})=>e.products},actions:{}}),Ue=e=>{e.f7route.params.id;const[t,a]=oe.exports.useState([]);return oe.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data-"+e.f7route.params.location+".json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),se.createElement(ce,{name:"catalog"},se.createElement(ie,{title:"Track Info",backLink:"Back"}),t.map((t=>t.id==e.id&&se.createElement("div",{style:{"margin-bottom":"100px"}},se.createElement(ge,{inset:!0,strong:!0},se.createElement("center",null,se.createElement("img",{class:"art lazy lazy-fade-in",onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"240px",height:"240px",src:t.art}))),"N/A"==t.title?"":se.createElement(ge,{inset:!0,strong:!0},"Title:",se.createElement("br",null),t.title.replace(/''/g,'"')),"N/A"==t.status?"":se.createElement(ge,{inset:!0,strong:!0},"Track status:",se.createElement("br",null),se.createElement("span",{style:{"text-transform":"capitalize"}},t.status.replace(/''/g,'"'))),"N/A"==t.description?"":se.createElement(ge,{inset:!0,strong:!0},"Description:",se.createElement("br",null),t.description.replace(/''/g,'"')),"N/A"==t.release?"":se.createElement(ge,{inset:!0,strong:!0},"Release Date:",se.createElement("br",null),se.createElement("span",{style:{"text-transform":"capitalize"}},t.release.replace(/''/g,'"'))),"N/A"==t.producer?"":se.createElement(ge,{inset:!0,strong:!0},"Producer:",se.createElement("br",null),se.createElement("span",{style:{"text-transform":"capitalize"}},t.producer.replace(/''/g,'"'))),"N/A"==t.project?"":se.createElement(ge,{inset:!0,strong:!0},"Project:",se.createElement("br",null),se.createElement("span",{style:{"text-transform":"capitalize"}},"questionmark"==t.project.replace(/''/g,'"')?"?":t.project)),"N/A"==t.link?"":se.createElement(ge,{inset:!0,strong:!0},"Listen to the song:",se.createElement("br",null),se.createElement("br",null),se.createElement("audio",{style:{width:"100%"},controls:!0},se.createElement("source",{src:t.link,type:"audio/mpeg"}))),"N/A"==t.instrumental?"":se.createElement(ge,{inset:!0,strong:!0},"Listen to the instrumental:",se.createElement("br",null),se.createElement("br",null),se.createElement("audio",{style:{width:"100%"},controls:!0},se.createElement("source",{src:t.instrumental,type:"audio/mpeg"}))),"N/A"==t.video?"":se.createElement(ge,{inset:!0,strong:!0},"Video:",se.createElement("br",null),se.createElement("br",null),se.createElement(ve,{color:"red",fill:"red",href:`/watch/${t.id}/${e.f7route.params.location}/`},"Watch Video")),se.createElement(ge,{inset:!0,strong:!0},"Download: ",se.createElement("br",null),se.createElement("br",null),"N/A"==t.instrumental?se.createElement(ve,{color:"gray",fill:"gray"},"Instrumental isn't available"):se.createElement(ve,{external:!0,color:"blue",fill:"blue",href:t.instrumental},"Download Instrumental"),"N/A"==t.link?se.createElement(ve,{style:{"margin-top":"20px"},color:"gray",fill:"gray"},"Song isn't available"):se.createElement(ve,{style:{"margin-top":"20px"},external:!0,color:"teal",fill:"teal",href:t.link},"Download Song"))))))},$e=e=>{e.f7route.params.id;const[t,a]=oe.exports.useState([]);return oe.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data-released.json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),setTimeout((function(){document.getElementById("available").innerHTML=document.getElementsByClassName("color-green").length,document.getElementById("lost").innerHTML=document.getElementsByClassName("color-red").length}),2e3),se.createElement(ce,{name:"catalog"},se.createElement(ie,{title:"Project Info",backLink:"Back"}),se.createElement(Ee,{searchContainer:".search-list",searchIn:".item-title"}),se.createElement(ge,null,se.createElement(he,null,se.createElement(fe,null,se.createElement("div",{class:"available"},se.createElement("span",{id:"available",class:"cardnum"},"Loading")," Tracks Available")),se.createElement(fe,null,se.createElement("div",{class:"lost"},se.createElement("span",{id:"available",class:"cardnum",id:"lost"},"Loading")," Tracks Lost")))),se.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},t.map((t=>t.project==e.id&&se.createElement(be,{link:`/track/released/${t.id}/`,key:Math.random(),title:t.title.replace(/''/g,'"'),subtitle:t.release.replace(/''/g,'"'),text:t.description.replace(/''/g,'"'),badge:t.status,badgeColor:"Lost"==t.status.replace(/''/g,'"')?"red":"green"},se.createElement("img",{slot:"media",src:t.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))},He=()=>{Le("products");const[e,t]=oe.exports.useState([]);return oe.exports.useEffect((()=>{(async()=>{await ke.get("https://coronux.github.io/tracker-data/data-projects.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),se.createElement(ce,{name:"catalog"},se.createElement(ie,{backLink:"Back"},se.createElement(ue,null,"Projects")),se.createElement(Ee,{searchContainer:".search-list",searchIn:".item-title"}),se.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>se.createElement(be,{link:`/proj/${e.title}/`,key:Math.random(),title:"questionmark"==e.title?"?":e.title,subtitle:e.release,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},se.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"45",height:"45",class:"art lazy lazy-fade-in"}))))))},Ve=e=>{Le("products");const[t,a]=oe.exports.useState([]);return oe.exports.useEffect((()=>{(async()=>{await ke.get("https://coronux.github.io/tracker-data/data-"+e.f7route.params.id+".json?"+Math.floor(1e16*Math.random()+1)).then((e=>{a(e.data)})).catch((e=>{console.log(e)}))})()}),[]),se.createElement(ce,{name:"catalog"},se.createElement(ie,{backLink:"Back"},se.createElement(ue,{style:{"text-transform":"capitalize"}},e.f7route.params.id)),se.createElement(Ee,{searchContainer:".search-list",searchIn:".item-title"}),se.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},t.map((t=>se.createElement(be,{link:`/track/${e.f7route.params.id}/${t.id}/`,key:Math.random(),title:t.title.replace(/''/g,'"'),subtitle:t.release.replace(/''/g,'"'),text:t.description.replace(/''/g,'"'),badge:t.status,badgeColor:"Unavailable"==t.status||"Lost"==t.status||"Unreleased"==t.status?"red":"green"},se.createElement("img",{slot:"media",src:t.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))},We=e=>{e.f7route.params.id;const[t,a]=oe.exports.useState([]);return oe.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data-"+e.category+".json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),se.createElement(ce,{name:"catalog"},se.createElement(ie,{title:"Watch",backLink:"Back"}),t.map((t=>t.id==e.id&&se.createElement("div",null,se.createElement(ge,{style:{textAlign:"center"},inset:!0,strong:!0},se.createElement("video",{style:{maxHeight:"300px"},poster:"https://nobodys.wiki/tracker.png",width:"100%",controls:!0},se.createElement("source",{src:t.video,type:"video/mp4"}))),se.createElement(ge,{inset:!0,strong:!0},se.createElement("h2",{style:{margin:"0","font-weight":"normal"}},t.title),se.createElement("h4",{style:{"margin-top":"2px","font-weight":"normal",color:"gray"}},t.release),se.createElement("hr",{style:{"border-top":"none",opacity:"0.2","margin-bottom":"10px"}}),se.createElement("h4",{style:{"margin-top":"2px","font-weight":"normal",color:"gray"}},t.description),se.createElement(ve,{external:!0,color:"teal",fill:"teal",href:t.video},"Download Video"))))))};var _e=[{path:"/",component:()=>{const[e,t]=oe.exports.useState([]);return setTimeout((function(){document.getElementById("available").innerHTML=document.getElementsByClassName("color-green").length,document.getElementById("lost").innerHTML=document.getElementsByClassName("color-red").length}),2e3),oe.exports.useEffect((()=>{(async()=>{await ke.get("https://coronux.github.io/tracker-data/data-released.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),se.createElement(ce,{name:"catalog"},se.createElement(ie,null,se.createElement(me,null,se.createElement(de,{iconIos:"f7:menu",iconAurora:"f7:menu",iconMd:"material:menu",panelOpen:"left"})),se.createElement(ue,null,"Nobodys Tracker"),se.createElement(pe,null,se.createElement(de,{onClick:function(){window.location.reload(!1)}},se.createElement("i",{class:"material-icons md-only"},"refresh")))),se.createElement(Ee,{searchContainer:".search-list",searchIn:".item-title"}),se.createElement(ge,null,se.createElement(he,null,se.createElement(fe,null,se.createElement("div",{class:"available"},se.createElement("span",{id:"available",class:"cardnum"},"Loading")," Tracks Available")),se.createElement(fe,null,se.createElement("div",{class:"lost"},se.createElement("span",{id:"available",class:"cardnum",id:"lost"},"Loading")," Tracks Lost")))),se.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>se.createElement(be,{link:`/track/released/${e.id}/`,key:Math.random(),title:e.title.replace(/''/g,'"'),subtitle:e.release.replace(/''/g,'"'),text:e.description.replace(/''/g,'"'),badge:e.status.replace(/''/g,'"'),badgeColor:"Unavailable"==e.status||"Lost"==e.status||"Unreleased"==e.status?"red":"green"},se.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/about/",component:()=>se.createElement(ce,null,se.createElement(ie,{title:"About",backLink:"Back"}),se.createElement(we,null,"About Nobodys Tracker"),se.createElement(ge,{inset:!0,strong:!0},se.createElement("p",null,'Welcome to "Nobody\'s Tracker", our goal is to preserve the tracks from the artist "XXXTENTACION" to prevent them from being lost. This project is non profit.')),se.createElement(we,null,"Contributors"),se.createElement(ye,{inset:!0,mediaList:!0},se.createElement(be,{external:!0,link:"https://twitter.com/coronux",title:"Coronux",subtitle:"Programming"},se.createElement("img",{slot:"media",src:"icons/coronux.jpg",width:"44",class:"licon lazy lazy-fade-in"})),se.createElement(be,{external:!0,link:"https://twitter.com/ryansnobodys",title:"Rydude",subtitle:"Data & Information"},se.createElement("img",{slot:"media",src:"icons/rydude.jpg",width:"44",class:"licon lazy lazy-fade-in"})),se.createElement(be,{external:!0,link:"#",title:"Vlone",subtitle:"Data & Information"},se.createElement("img",{slot:"media",src:"icons/vlone.gif",width:"44",class:"licon lazy lazy-fade-in"})),se.createElement(be,{external:!0,link:"https://twitter.com/bvxxdrxtmvet",title:"Pixxi",subtitle:"Data & Information"},se.createElement("img",{slot:"media",src:"icons/pixxi.gif",width:"44",class:"licon lazy lazy-fade-in"})),se.createElement(be,{external:!0,link:"https://twitter.com/3bfiong5szwt1qp/",title:"Vise",subtitle:"Data & Information"},se.createElement("img",{slot:"media",src:"icons/vise.jpeg",width:"44",class:"licon lazy lazy-fade-in"}))),se.createElement(ve,{large:!0,style:{opacity:"0"},color:"teal",fill:"teal",href:"/chat/"},"Chat"))},{path:"/chat/",component:()=>{Le("products");const[e,t]=oe.exports.useState([]);return oe.exports.useEffect((()=>{(async()=>{await ke.get("https://coronux.github.io/tracker-data/data-unreleased.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),se.createElement(ce,{style:{background:"#202225 !important"},name:"catalog"},se.createElement(ie,{backLink:"Back"},se.createElement(ue,null,"Chat")),se.createElement("iframe",{style:{width:"100%",height:"100%",border:"none",margin:"0",padding:"0"},src:"https://coronux.github.io/tracker-data/it_had_to_be_done/"}))}},{path:"/todo/",component:()=>se.createElement(ce,null,se.createElement(ie,{title:"ToDo",backLink:"Back"}),se.createElement(we,null,"Info"),se.createElement(ge,{inset:!0,strong:!0},se.createElement("p",null,"List of features that will be soon implemented.")),se.createElement(we,null,"ToDo List"),se.createElement(ye,{accordionList:!0,accordionOpposite:!0,inset:!0},se.createElement(be,{accordionItem:!0,title:"Audio Player"},se.createElement(je,null,se.createElement(ge,null,se.createElement("p",null,'We want to create a "Spotify-Like" audio player for ground up with shuffle, queue, etc... to give a way better listening experience.')))),se.createElement(be,{accordionItem:!0,title:"Sorting"},se.createElement(je,null,se.createElement(ge,null,se.createElement("p",null,"We wanna create a sorting system where you can sort tracks by genre, release date, etc.. to make it easier for you to listen/find songs from a certain era."))))))},{path:"/projects/",async:function({router:e,to:t,resolve:a}){var r=e.app;r.preloader.show(),setTimeout((function(){r.preloader.hide(),a({component:He})}),1e3)}},{path:"/track/:location/:id/",async:function({router:e,to:t,resolve:a}){var r=e.app;r.preloader.show(),setTimeout((function(){r.preloader.hide(),a({component:Ue})}),1e3)}},{path:"/proj/:id/",async:function({router:e,to:t,resolve:a}){var r=e.app;r.preloader.show(),setTimeout((function(){r.preloader.hide(),a({component:$e})}),1e3)}},{path:"/watch/:id/:category/",async:function({router:e,to:t,resolve:a}){var r=e.app;r.preloader.show(),setTimeout((function(){r.preloader.hide(),a({component:We})}),1e3)}},{path:"/sections/:id/",async:function({router:e,to:t,resolve:a}){var r=e.app;r.preloader.show(),setTimeout((function(){r.preloader.hide(),a({component:Ve})}),1e3)}},{path:"(.*)",component:()=>se.createElement(ce,null,se.createElement(ie,{title:"Not found",backLink:"Back"}),se.createElement(ge,{strong:!0},se.createElement("p",null,"Sorry"),se.createElement("p",null,"Requested content not found.")))}];s.use(Oe),qe.render(se.createElement((()=>{const[e,s]=oe.exports.useState(""),[c,i]=oe.exports.useState(""),m={name:"nobodys tracker",theme:"md",store:Re,routes:_e};return Ce((()=>{})),se.createElement(Ie,(d=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&o(e,a,t[a]);return e})({},m),t(d,a({themeDark:!0}))),se.createElement(Ne,{left:!0,cover:!0,themeDark:!0,visibleBreakpoint:960},se.createElement(Te,null,se.createElement(ce,null,se.createElement(ie,{title:"More"}),se.createElement(we,null,"Socials"),se.createElement(ye,{inset:!0,media:!0},se.createElement(be,{link:"https://discord.gg/xxxtentacion",external:!0,title:"Discord"},se.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://i.pinimg.com/originals/66/1e/cf/661ecf66bda49150b44d25e4440e2bb8.jpg"})),se.createElement(be,{link:"https://reddit.com/r/daggerleaks",external:!0,title:"Reddit"},se.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://www.vectorico.com/download/social_media/Reddit-Icon.png"}))),se.createElement(we,null,"Other Pages"),se.createElement(ye,{inset:!0,media:!0},se.createElement(be,{link:"/about/",view:".view-main",panelClose:!0,title:"About"}),se.createElement(be,{link:"/todo/",view:".view-main",panelClose:!0,title:"ToDo"})),se.createElement(we,null,"Sections"),se.createElement(ye,{inset:!0,media:!0},se.createElement(be,{link:"/sections/released/",view:".view-main",panelClose:!0,title:"Released"}),se.createElement(be,{link:"/sections/unreleased/",view:".view-main",panelClose:!0,title:"Unreleased"}),se.createElement(be,{link:"/sections/demos/",view:".view-main",panelClose:!0,title:"Demos"}),se.createElement(be,{link:"/sections/freestyles/",view:".view-main",panelClose:!0,title:"Freestyles"}),se.createElement(be,{link:"/sections/memos/",view:".view-main",panelClose:!0,title:"Memos"}),se.createElement(be,{link:"/sections/unknown/",view:".view-main",panelClose:!0,title:"Unknown"}),se.createElement(be,{link:"/sections/alternative/",view:".view-main",panelClose:!0,title:"Alternative"}),se.createElement(be,{link:"/projects/",view:".view-main",panelClose:!0,title:"Projects"}))))),se.createElement(Ne,{right:!0,reveal:!0,themeDark:!0},se.createElement(Te,null,se.createElement(ce,null,se.createElement(ie,{title:"Right Panel"}),se.createElement(ge,null,"Right panel content goes here")))),se.createElement(Te,{main:!0,className:"safe-areas",url:"/"}),se.createElement(ze,{id:"my-popup"},se.createElement(Te,null,se.createElement(ce,null,se.createElement(ie,{title:"Popup"},se.createElement(pe,null,se.createElement(de,{popupClose:!0},"Close"))),se.createElement(ge,null,se.createElement("p",null,"Popup content goes here."))))),se.createElement(Se,{id:"my-login-screen"},se.createElement(Te,null,se.createElement(ce,{loginScreen:!0},se.createElement(Ae,null,"Login"),se.createElement(ye,{form:!0},se.createElement(Me,{type:"text",name:"username",placeholder:"Your username",value:e,onInput:e=>s(e.target.value)}),se.createElement(Me,{type:"password",name:"password",placeholder:"Your password",value:c,onInput:e=>i(e.target.value)})),se.createElement(ye,null,se.createElement(Be,{title:"Sign In",onClick:()=>{Pe.dialog.alert("Username: "+e+"<br>Password: "+c,(()=>{Pe.loginScreen.close()}))}}),se.createElement(De,null,"Some text about login information.",se.createElement("br",null),'Click "Sign In" to close Login Screen'))))));var d})),document.getElementById("app"));
