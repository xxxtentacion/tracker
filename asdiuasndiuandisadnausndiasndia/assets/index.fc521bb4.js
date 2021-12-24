var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;"undefined"!=typeof require&&require;import{F as o,A as c,D as i,P as m,L as d,a as u,b as p,S as E,T as g,c as h,d as f,e as b,f as k,g as y,C as x,V as w,h as v,i as L,j,k as C,l as z,m as I,n as M,I as N,o as S,R as B,p as A,q as T,r as D,s as P,G as O,t as q,u as R,v as $,w as U,x as _,y as H,z as W,B as X,M as F,E as V,H as Y,J as K,N as G,K as J,O as Q,Q as Z,U as ee,W as te,X as ae,Y as ne,Z as re,_ as le,$ as se,a0 as oe,a1 as ce,a2 as ie,a3 as me,a4 as de,a5 as ue,a6 as pe,a7 as Ee,a8 as ge,a9 as he,aa as fe,ab as be,ac as ke,ad as ye,ae as xe,af as we,ag as ve,ah as Le,ai as je,aj as Ce,ak as ze,al as Ie,am as Me,an as Ne,ao as Se,ap as Be,aq as Ae,ar as Te,as as De,at as Pe,au as Oe,av as qe}from"./vendor.b70adc53.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),o.use([c,i,m,d,u,p,E,g,h,f,b,k,y,x,w,v,L,j,C,z,I,M,N,S,B,A,T,D,P,O,q,R,$,U,_,H,W,X,F,V,Y,K,G,J,Q,Z,ee,te,ae,ne,re,le]);const Re=se({getters:{products:({state:e})=>e.products},actions:{}});var $e=[{path:"/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return setTimeout((function(){document.getElementById("available").innerHTML=document.getElementsByClassName("color-green").length,document.getElementById("lost").innerHTML=document.getElementsByClassName("color-red").length}),2e3),ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-released.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,null,ie.createElement(ue,null,ie.createElement(pe,{iconIos:"f7:menu",iconAurora:"f7:menu",iconMd:"material:menu",panelOpen:"left"})),ie.createElement(Ee,null,"nobodys tracker"),ie.createElement(ge,null,ie.createElement(pe,{onClick:function(){window.location.reload(!1)}},ie.createElement("i",{class:"material-icons md-only"},"refresh")))),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(fe,null,ie.createElement(be,null,ie.createElement(ke,null,ie.createElement("div",{class:"available"},ie.createElement("span",{id:"available",class:"cardnum"},"Loading")," Tracks Available")),ie.createElement(ke,null,ie.createElement("div",{class:"lost"},ie.createElement("span",{id:"available",class:"cardnum",id:"lost"},"Loading")," Tracks Lost")))),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ie.createElement(xe,{link:`/track/released/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ie.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/about/",component:()=>ie.createElement(me,null,ie.createElement(de,{title:"About",backLink:"Back"}),ie.createElement(ve,null,"About Nobodys Tracker"),ie.createElement(fe,{inset:!0,strong:!0},ie.createElement("p",null,'Welcome to "Nobody\'s Tracker", our goal is to preserve the tracks from the artist "XXXTENTACION" to prevent them from being lost. This project is non profit.')),ie.createElement(ve,null,"Contributors"),ie.createElement(ye,{inset:!0,mediaList:!0},ie.createElement(xe,{external:!0,link:"https://twitter.com/coronux",title:"Coronux",subtitle:"Programming"},ie.createElement("img",{slot:"media",src:"icons/coronux.jpg",width:"44",class:"licon lazy lazy-fade-in"})),ie.createElement(xe,{external:!0,link:"https://twitter.com/ryansnobodys",title:"Rydude",subtitle:"Data & Information"},ie.createElement("img",{slot:"media",src:"icons/rydude.jpg",width:"44",class:"licon lazy lazy-fade-in"})),ie.createElement(xe,{external:!0,link:"#",title:"Vlone",subtitle:"Data & Information"},ie.createElement("img",{slot:"media",src:"icons/vlone.gif",width:"44",class:"licon lazy lazy-fade-in"})),ie.createElement(xe,{external:!0,link:"https://twitter.com/bvxxdrxtmvet",title:"Pixxi",subtitle:"Data & Information"},ie.createElement("img",{slot:"media",src:"icons/pixxi.gif",width:"44",class:"licon lazy lazy-fade-in"})),ie.createElement(xe,{external:!0,link:"https://twitter.com/3bfiong5szwt1qp/",title:"Vise",subtitle:"Data & Information"},ie.createElement("img",{slot:"media",src:"icons/vise.jpeg",width:"44",class:"licon lazy lazy-fade-in"}))),ie.createElement(Le,{large:!0,style:{opacity:"0"},color:"teal",fill:"teal",href:"/chat/"},"Chat"))},{path:"/chat/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-unreleased.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{backLink:"Back"},ie.createElement(Ee,null,"Chat")),ie.createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:"https://coronux.github.io/tracker-data/it_had_to_be_done/"}))}},{path:"/alternative/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-alternative.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{backLink:"Back"},ie.createElement(Ee,null,"Alternative Songs")),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(fe,{strong:!0,inset:!0},"Alternative / Remixed songs"),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ie.createElement(xe,{link:`/track/alternative/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ie.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/todo/",component:()=>ie.createElement(me,null,ie.createElement(de,{title:"ToDo",backLink:"Back"}),ie.createElement(ve,null,"Info"),ie.createElement(fe,{inset:!0,strong:!0},ie.createElement("p",null,"List of features that will be soon implemented.")),ie.createElement(ve,null,"ToDo List"),ie.createElement(ye,{accordionList:!0,accordionOpposite:!0,inset:!0},ie.createElement(xe,{accordionItem:!0,title:"Audio Player"},ie.createElement(je,null,ie.createElement(fe,null,ie.createElement("p",null,'We want to create a "Spotify-Like" audio player for ground up with shuffle, queue, etc... to give a way better listening experience.')))),ie.createElement(xe,{accordionItem:!0,title:"Sorting"},ie.createElement(je,null,ie.createElement(fe,null,ie.createElement("p",null,"We wanna create a sorting system where you can sort tracks by genre, release date, etc.. to make it easier for you to listen/find songs from a certain era."))))))},{path:"/unreleased/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-unreleased.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{backLink:"Back"},ie.createElement(Ee,null,"Unreleased Songs")),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ie.createElement(xe,{link:`/track/unreleased/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Unreleased"==e.status?"red":"green"},ie.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/unknown/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-unknown.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{backLink:"Back"},ie.createElement(Ee,null,"Unknown Songs")),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ie.createElement(xe,{link:`/track/unknown/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ie.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/demos/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-demos.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{backLink:"Back"},ie.createElement(Ee,null,"Demos")),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ie.createElement(xe,{link:`/track/demos/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ie.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/projects/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-projects.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{backLink:"Back"},ie.createElement(Ee,null,"Projects")),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ie.createElement(xe,{link:`/proj/${e.title}/`,key:Math.random(),title:"questionmark"==e.title?"?":e.title,subtitle:e.release,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ie.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"45",height:"45",class:"art lazy lazy-fade-in"}))))))}},{path:"/freestyles/",component:()=>{oe("products");const[e,t]=ce.exports.useState([]);return ce.exports.useEffect((()=>{(async()=>{await we.get("https://coronux.github.io/tracker-data/data-freestyles.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{backLink:"Back"},ie.createElement(Ee,null,"Freestyles")),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ie.createElement(xe,{link:`/track/freestyles/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ie.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/track/:location/:id/",component:e=>{e.f7route.params.id;const[t,a]=ce.exports.useState([]);return ce.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data-"+e.f7route.params.location+".json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),ie.createElement(me,{name:"catalog"},ie.createElement(de,{title:"Track Info",backLink:"Back"}),t.map((t=>t.id==e.id&&ie.createElement("div",{style:{"margin-bottom":"100px"}},ie.createElement(fe,{inset:!0,strong:!0},ie.createElement("center",null,ie.createElement("img",{class:"art lazy lazy-fade-in",onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"240px",height:"240px",src:t.art}))),"N/A"==t.title?"":ie.createElement(fe,{inset:!0,strong:!0},"Title:",ie.createElement("br",null),t.title),"N/A"==t.status?"":ie.createElement(fe,{inset:!0,strong:!0},"Track status:",ie.createElement("br",null),ie.createElement("span",{style:{"text-transform":"capitalize"}},t.status)),"N/A"==t.description?"":ie.createElement(fe,{inset:!0,strong:!0},"Description:",ie.createElement("br",null),t.description),"N/A"==t.release?"":ie.createElement(fe,{inset:!0,strong:!0},"Release Date:",ie.createElement("br",null),ie.createElement("span",{style:{"text-transform":"capitalize"}},t.release)),"N/A"==t.producer?"":ie.createElement(fe,{inset:!0,strong:!0},"Producer:",ie.createElement("br",null),ie.createElement("span",{style:{"text-transform":"capitalize"}},t.producer)),"N/A"==t.project?"":ie.createElement(fe,{inset:!0,strong:!0},"Project:",ie.createElement("br",null),ie.createElement("span",{style:{"text-transform":"capitalize"}},"questionmark"==t.project?"?":t.project)),"N/A"==t.link?"":ie.createElement(fe,{inset:!0,strong:!0},"Listen:",ie.createElement("br",null),ie.createElement("br",null),ie.createElement("audio",{style:{width:"100%"},controls:!0},ie.createElement("source",{src:t.link,type:"audio/mpeg"}))),ie.createElement(fe,{inset:!0,strong:!0},"Download: ",ie.createElement("br",null),ie.createElement("br",null),"N/A"==t.instrumental?ie.createElement(Le,{color:"gray",fill:"gray"},"Instrumental isn't available"):ie.createElement(Le,{external:!0,color:"blue",fill:"blue",href:t.instrumental},"Download Instrumental"),"N/A"==t.link?ie.createElement(Le,{style:{"margin-top":"20px"},color:"gray",fill:"gray"},"Song isn't available"):ie.createElement(Le,{style:{"margin-top":"20px"},external:!0,color:"teal",fill:"teal",href:t.link},"Download Song"))))))}},{path:"/proj/:id/",component:e=>{e.f7route.params.id;const[t,a]=ce.exports.useState([]);return ce.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data-released.json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),setTimeout((function(){document.getElementById("available").innerHTML=document.getElementsByClassName("color-green").length,document.getElementById("lost").innerHTML=document.getElementsByClassName("color-red").length}),2e3),ie.createElement(me,{name:"catalog"},ie.createElement(de,{title:"Project Info",backLink:"Back"}),ie.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ie.createElement(fe,null,ie.createElement(be,null,ie.createElement(ke,null,ie.createElement("div",{class:"available"},ie.createElement("span",{id:"available",class:"cardnum"},"Loading")," Tracks Available")),ie.createElement(ke,null,ie.createElement("div",{class:"lost"},ie.createElement("span",{id:"available",class:"cardnum",id:"lost"},"Loading")," Tracks Lost")))),ie.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},t.map((t=>t.project==e.id&&ie.createElement(xe,{link:`/track/released/${t.id}/`,key:Math.random(),title:t.title,subtitle:t.release,text:t.description,badge:t.status,badgeColor:"Lost"==t.status?"red":"green"},ie.createElement("img",{slot:"media",src:t.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"(.*)",component:()=>ie.createElement(me,null,ie.createElement(de,{title:"Not found",backLink:"Back"}),ie.createElement(fe,{strong:!0},ie.createElement("p",null,"Sorry"),ie.createElement("p",null,"Requested content not found.")))}];o.use(Oe),qe.render(ie.createElement((()=>{const[e,o]=ce.exports.useState(""),[c,i]=ce.exports.useState(""),m={name:"nobodys tracker",theme:"md",store:Re,routes:$e};return Ce((()=>{})),ie.createElement(ze,(d=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&s(e,a,t[a]);return e})({},m),t(d,a({themeDark:!0}))),ie.createElement(Ie,{left:!0,cover:!0,themeDark:!0,visibleBreakpoint:960},ie.createElement(Me,null,ie.createElement(me,null,ie.createElement(de,{title:"More"}),ie.createElement(ve,null,"Socials"),ie.createElement(ye,{inset:!0,media:!0},ie.createElement(xe,{link:"https://discord.gg/xxxtentacion",external:!0,title:"Discord"},ie.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://i.pinimg.com/originals/66/1e/cf/661ecf66bda49150b44d25e4440e2bb8.jpg"})),ie.createElement(xe,{link:"https://reddit.com/r/daggerleaks",external:!0,title:"Reddit"},ie.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://www.vectorico.com/download/social_media/Reddit-Icon.png"}))),ie.createElement(ve,null,"Other Pages"),ie.createElement(ye,{inset:!0,media:!0},ie.createElement(xe,{link:"/about/",view:".view-main",panelClose:!0,title:"About"}),ie.createElement(xe,{link:"/todo/",view:".view-main",panelClose:!0,title:"ToDo"})),ie.createElement(ve,null,"Sections"),ie.createElement(ye,{inset:!0,media:!0},ie.createElement(xe,{link:"/unreleased/",view:".view-main",panelClose:!0,title:"Unreleased"}),ie.createElement(xe,{link:"/demos/",view:".view-main",panelClose:!0,title:"Demos"}),ie.createElement(xe,{link:"/freestyles/",view:".view-main",panelClose:!0,title:"Freestyles"}),ie.createElement(xe,{link:"/unknown/",view:".view-main",panelClose:!0,title:"Unknown"}),ie.createElement(xe,{link:"/alternative/",view:".view-main",panelClose:!0,title:"Alternative"}),ie.createElement(xe,{link:"/projects/",view:".view-main",panelClose:!0,title:"Projects"}))))),ie.createElement(Ie,{right:!0,reveal:!0,themeDark:!0},ie.createElement(Me,null,ie.createElement(me,null,ie.createElement(de,{title:"Right Panel"}),ie.createElement(fe,null,"Right panel content goes here")))),ie.createElement(Me,{main:!0,className:"safe-areas",url:"/"}),ie.createElement(Ne,{id:"my-popup"},ie.createElement(Me,null,ie.createElement(me,null,ie.createElement(de,{title:"Popup"},ie.createElement(ge,null,ie.createElement(pe,{popupClose:!0},"Close"))),ie.createElement(fe,null,ie.createElement("p",null,"Popup content goes here."))))),ie.createElement(Se,{id:"my-login-screen"},ie.createElement(Me,null,ie.createElement(me,{loginScreen:!0},ie.createElement(Be,null,"Login"),ie.createElement(ye,{form:!0},ie.createElement(Ae,{type:"text",name:"username",placeholder:"Your username",value:e,onInput:e=>o(e.target.value)}),ie.createElement(Ae,{type:"password",name:"password",placeholder:"Your password",value:c,onInput:e=>i(e.target.value)})),ie.createElement(ye,null,ie.createElement(Te,{title:"Sign In",onClick:()=>{Pe.dialog.alert("Username: "+e+"<br>Password: "+c,(()=>{Pe.loginScreen.close()}))}}),ie.createElement(De,null,"Some text about login information.",ie.createElement("br",null),'Click "Sign In" to close Login Screen'))))));var d})),document.getElementById("app"));
