var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;"undefined"!=typeof require&&require;import{F as o,A as i,D as c,P as m,L as u,a as d,b as p,S as E,T as g,c as h,d as b,e as f,f as k,g as y,C as x,V as v,h as w,i as N,j as L,k as j,l as q,m as z,n as B,I,o as A,R as P,p as C,q as S,r as T,s as M,G as R,t as F,u as D,v as O,w as U,x as H,y as $,z as G,B as V,M as X,E as Y,H as _,J as K,N as Q,K as W,O as J,Q as Z,U as ee,W as te,X as ae,Y as le,Z as re,_ as ne,$ as se,a0 as oe,a1 as ie,a2 as ce,a3 as me,a4 as ue,a5 as de,a6 as pe,a7 as Ee,a8 as ge,a9 as he,aa as be,ab as fe,ac as ke,ad as ye,ae as xe,af as ve,ag as we,ah as Ne,ai as Le,aj as je,ak as qe,al as ze,am as Be,an as Ie,ao as Ae,ap as Pe,aq as Ce,ar as Se,as as Te,at as Me,au as Re,av as Fe,aw as De}from"./vendor.1c6b4024.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),o.use([i,c,m,u,d,p,E,g,h,b,f,k,y,x,v,w,N,L,j,q,z,B,I,A,P,C,S,T,M,R,F,D,O,U,H,$,G,V,X,Y,_,K,Q,W,J,Z,ee,te,ae,le,re,ne]);const Oe=se({state:{products:[{id:"1",title:"News",status:"Lost",art:"https://i1.sndcdn.com/artworks-000472393038-kct46a-t500x500.jpg",description:"Early version of News/Flock that was up, used the first instrumental and early lyrics for News",link:"N/A"},{id:"2",title:"Glimpse",status:"Lost",art:"N/A",description:"Made just after News and labelled as Track_02. Uploaded onto facebook.",link:"N/A"},{id:"3",title:"News/Flock",status:"Available",art:"https://i1.sndcdn.com/artworks-000472393038-kct46a-t500x500.jpg",description:'X credited this song as best in story telling. Finished version of News and has a beat switch. Description on soundcloud reads "the remake , and complete version". Groupbought by the entire lost community for $4,500 in 28 hours.',link:"https://cdn.discordapp.com/attachments/631983421412868111/888880300527063040/nf.mp3"}]},getters:{products:({state:e})=>e.products},actions:{addProduct({state:e},t){e.products=[...e.products,t]}}}),Ue=e=>{const{user:t}=e;return ce.createElement(me,null,ce.createElement(ue,{title:`${t.firstName} ${t.lastName}`,backLink:"Back"}),ce.createElement(be,{strong:!0},t.about),ce.createElement(ye,null,t.links.map(((e,t)=>ce.createElement(xe,{key:t,link:e.url,title:e.title,external:!0,target:"_blank"})))))};var He=[{path:"/",component:()=>{oe("products");const[e,t]=ie.exports.useState([]);return setTimeout((function(){document.getElementById("available").innerHTML=document.getElementsByClassName("color-green").length,document.getElementById("lost").innerHTML=document.getElementsByClassName("color-red").length}),2e3),ie.exports.useEffect((()=>{(async()=>{await ve.get("https://coronux.github.io/tracker-data/data.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ce.createElement(me,{name:"catalog"},ce.createElement(ue,null,ce.createElement(de,null,ce.createElement(pe,{iconIos:"f7:menu",iconAurora:"f7:menu",iconMd:"material:menu",panelOpen:"left"})),ce.createElement(Ee,null,"nobodys tracker"),ce.createElement(ge,null,ce.createElement(pe,{onClick:function(){window.location.reload(!1)}},ce.createElement("i",{class:"material-icons md-only"},"refresh")))),ce.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ce.createElement(be,null,ce.createElement(fe,null,ce.createElement(ke,null,ce.createElement("div",{class:"available"},ce.createElement("span",{id:"available",class:"cardnum"},"Loading")," Tracks Available")),ce.createElement(ke,null,ce.createElement("div",{class:"lost"},ce.createElement("span",{id:"available",class:"cardnum",id:"lost"},"Loading")," Tracks Lost")))),ce.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ce.createElement(xe,{link:`/track/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ce.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/about/",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"About",backLink:"Back"}),ce.createElement(we,null,"About Nobodys Tracker"),ce.createElement(be,{inset:!0,strong:!0},ce.createElement("p",null,'Welcome to "Nobody\'s Tracker", our goal is to preserve the tracks from the artist "XXXTENTACION" to prevent them from being lost. This project is none profit.')),ce.createElement(we,null,"Contributors"),ce.createElement(ye,{inset:!0,mediaList:!0},ce.createElement(xe,{external:!0,link:"https://twitter.com/coronux",title:"Coronux",subtitle:"Programming"},ce.createElement("img",{slot:"media",src:"icons/coronux.jpg",width:"44",class:"licon lazy lazy-fade-in"})),ce.createElement(xe,{external:!0,link:"https://twitter.com/ryansnobodys",title:"Rydude",subtitle:"Data & Information"},ce.createElement("img",{slot:"media",src:"icons/rydude.jpg",width:"44",class:"licon lazy lazy-fade-in"})),ce.createElement(xe,{external:!0,link:"#",title:"Vlone",subtitle:"Data & Information"},ce.createElement("img",{slot:"media",src:"icons/vlone.gif",width:"44",class:"licon lazy lazy-fade-in"})),ce.createElement(xe,{external:!0,link:"https://twitter.com/bvxxdrxtmvet",title:"Pixxi",subtitle:"Data & Information"},ce.createElement("img",{slot:"media",src:"icons/pixxi.gif",width:"44",class:"licon lazy lazy-fade-in"})),ce.createElement(xe,{external:!0,link:"https://twitter.com/3bfiong5szwt1qp/",title:"Vise",subtitle:"Data & Information"},ce.createElement("img",{slot:"media",src:"icons/vise.jpeg",width:"44",class:"licon lazy lazy-fade-in"}))))},{path:"/unreleased/",component:()=>{oe("products");const[e,t]=ie.exports.useState([]);return ie.exports.useEffect((()=>{(async()=>{await ve.get("https://coronux.github.io/tracker-data/data-unreleased.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ce.createElement(me,{name:"catalog"},ce.createElement(ue,{backLink:"Back"},ce.createElement(Ee,null,"Unreleased Songs")),ce.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ce.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ce.createElement(xe,{link:`/unrel/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ce.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/projects/",component:()=>{oe("products");const[e,t]=ie.exports.useState([]);return ie.exports.useEffect((()=>{(async()=>{await ve.get("https://coronux.github.io/tracker-data/data-projects.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ce.createElement(me,{name:"catalog"},ce.createElement(ue,{backLink:"Back"},ce.createElement(Ee,null,"Projects")),ce.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ce.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ce.createElement(xe,{link:`/proj/${e.title}/`,key:Math.random(),title:"questionmark"==e.title?"?":e.title,subtitle:e.release,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ce.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"45",height:"45",class:"art lazy lazy-fade-in"}))))))}},{path:"/form/",component:()=>ce.createElement(me,{name:"form"},ce.createElement(ue,{title:"Form",backLink:"Back"}),ce.createElement(we,null,"Form Example"),ce.createElement(ye,{noHairlinesMd:!0},ce.createElement(Ne,{label:"Name",type:"text",placeholder:"Your name"}),ce.createElement(Ne,{label:"E-mail",type:"email",placeholder:"E-mail"}),ce.createElement(Ne,{label:"URL",type:"url",placeholder:"URL"}),ce.createElement(Ne,{label:"Password",type:"password",placeholder:"Password"}),ce.createElement(Ne,{label:"Phone",type:"tel",placeholder:"Phone"}),ce.createElement(Ne,{label:"Gender",type:"select"},ce.createElement("option",null,"Male"),ce.createElement("option",null,"Female")),ce.createElement(Ne,{label:"Birth date",type:"date",placeholder:"Birth day",defaultValue:"2014-04-30"}),ce.createElement(xe,{title:"Toggle"},ce.createElement(Le,{slot:"after"})),ce.createElement(Ne,{label:"Range",input:!1},ce.createElement(je,{slot:"input",value:50,min:0,max:100,step:1})),ce.createElement(Ne,{type:"textarea",label:"Textarea",placeholder:"Bio"}),ce.createElement(Ne,{type:"textarea",label:"Resizable",placeholder:"Bio",resizable:!0})),ce.createElement(we,null,"Buttons"),ce.createElement(be,{strong:!0},ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col"},"Button"),ce.createElement(qe,{className:"col",fill:!0},"Fill")),ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col",raised:!0},"Raised"),ce.createElement(qe,{className:"col",raised:!0,fill:!0},"Raised Fill")),ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col",round:!0},"Round"),ce.createElement(qe,{className:"col",round:!0,fill:!0},"Round Fill")),ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col",outline:!0},"Outline"),ce.createElement(qe,{className:"col",round:!0,outline:!0},"Outline Round")),ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col",small:!0,outline:!0},"Small"),ce.createElement(qe,{className:"col",small:!0,round:!0,outline:!0},"Small Round")),ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col",small:!0,fill:!0},"Small"),ce.createElement(qe,{className:"col",small:!0,round:!0,fill:!0},"Small Round")),ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col",large:!0,raised:!0},"Large"),ce.createElement(qe,{className:"col",large:!0,fill:!0,raised:!0},"Large Fill")),ce.createElement(fe,{tag:"p"},ce.createElement(qe,{className:"col",large:!0,fill:!0,raised:!0,color:"red"},"Large Red"),ce.createElement(qe,{className:"col",large:!0,fill:!0,raised:!0,color:"green"},"Large Green"))),ce.createElement(we,null,"Checkbox group"),ce.createElement(ye,null,ce.createElement(xe,{checkbox:!0,name:"my-checkbox",value:"Books",title:"Books"}),ce.createElement(xe,{checkbox:!0,name:"my-checkbox",value:"Movies",title:"Movies"}),ce.createElement(xe,{checkbox:!0,name:"my-checkbox",value:"Food",title:"Food"})),ce.createElement(we,null,"Radio buttons group"),ce.createElement(ye,null,ce.createElement(xe,{radio:!0,name:"radio",value:"Books",title:"Books"}),ce.createElement(xe,{radio:!0,name:"radio",value:"Movies",title:"Movies"}),ce.createElement(xe,{radio:!0,name:"radio",value:"Food",title:"Food"})))},{path:"/track/:id/",component:e=>{e.f7route.params.id;const[t,a]=ie.exports.useState([]);return ie.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data.json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),ce.createElement(me,{name:"catalog"},ce.createElement(ue,{title:"Track Info",backLink:"Back"}),t.map((t=>t.id==e.id&&ce.createElement("div",{style:{"margin-bottom":"100px"}},ce.createElement(be,{inset:!0,strong:!0},ce.createElement("center",null,ce.createElement("img",{class:"art lazy lazy-fade-in",onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"240px",height:"240px",src:t.art}))),"N/A"==t.title?"":ce.createElement(be,{inset:!0,strong:!0},"Title:",ce.createElement("br",null),t.title),"N/A"==t.status?"":ce.createElement(be,{inset:!0,strong:!0},"Track status:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},t.status)),"N/A"==t.description?"":ce.createElement(be,{inset:!0,strong:!0},"Description:",ce.createElement("br",null),t.description),"N/A"==t.release?"":ce.createElement(be,{inset:!0,strong:!0},"Release Date:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},t.release)),"N/A"==t.producer?"":ce.createElement(be,{inset:!0,strong:!0},"Producer:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},t.producer)),"N/A"==t.project?"":ce.createElement(be,{inset:!0,strong:!0},"Project:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},"questionmark"==t.project?"?":t.project)),"N/A"==t.instrumental?"":ce.createElement(be,null,ce.createElement(qe,{external:!0,color:"green",fill:"green",href:t.instrumental},"Download Instrumental")),"N/A"==t.link?"":ce.createElement("div",{style:{bottom:"0",position:"fixed",width:"100%",padding:"10px 0px",background:"#202020","z-index":"999"}},ce.createElement("audio",{style:{width:"100%"},controls:!0},ce.createElement("source",{src:t.link,type:"audio/mpeg"})))))))}},{path:"/unrel/:id/",component:e=>{e.f7route.params.id;const[t,a]=ie.exports.useState([]);return ie.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data-unreleased.json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),ce.createElement(me,{name:"catalog"},ce.createElement(ue,{title:"Track Info",backLink:"Back"}),t.map((t=>t.id==e.id&&ce.createElement("div",{style:{"margin-bottom":"100px"}},ce.createElement(be,{inset:!0,strong:!0},ce.createElement("center",null,ce.createElement("img",{class:"art lazy lazy-fade-in",onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"240px",height:"240px",src:t.art}))),"N/A"==t.title?"":ce.createElement(be,{inset:!0,strong:!0},"Title:",ce.createElement("br",null),t.title),"N/A"==t.status?"":ce.createElement(be,{inset:!0,strong:!0},"Track status:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},t.status)),"N/A"==t.description?"":ce.createElement(be,{inset:!0,strong:!0},"Description:",ce.createElement("br",null),t.description),"N/A"==t.release?"":ce.createElement(be,{inset:!0,strong:!0},"Release Date:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},t.release)),"N/A"==t.producer?"":ce.createElement(be,{inset:!0,strong:!0},"Producer:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},t.producer)),"N/A"==t.project?"":ce.createElement(be,{inset:!0,strong:!0},"Project:",ce.createElement("br",null),ce.createElement("span",{style:{"text-transform":"capitalize"}},t.project)),"N/A"==t.instrumental?"":ce.createElement(be,null,ce.createElement(qe,{external:!0,color:"green",fill:"green",href:t.instrumental},"Download Instrumental")),"N/A"==t.link?"":ce.createElement("div",{style:{bottom:"0",position:"fixed",width:"100%",padding:"10px 0px",background:"#202020","z-index":"999"}},ce.createElement("audio",{style:{width:"100%"},controls:!0},ce.createElement("source",{src:t.link,type:"audio/mpeg"})))))))}},{path:"/proj/:id/",component:e=>{e.f7route.params.id;const[t,a]=ie.exports.useState([]);return ie.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data.json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),setTimeout((function(){document.getElementById("available").innerHTML=document.getElementsByClassName("color-green").length,document.getElementById("lost").innerHTML=document.getElementsByClassName("color-red").length}),2e3),ce.createElement(me,{name:"catalog"},ce.createElement(ue,{title:"Project Info",backLink:"Back"}),ce.createElement(he,{searchContainer:".search-list",searchIn:".item-title"}),ce.createElement(be,null,ce.createElement(fe,null,ce.createElement(ke,null,ce.createElement("div",{class:"available"},ce.createElement("span",{id:"available",class:"cardnum"},"Loading")," Tracks Available")),ce.createElement(ke,null,ce.createElement("div",{class:"lost"},ce.createElement("span",{id:"available",class:"cardnum",id:"lost"},"Loading")," Tracks Lost")))),ce.createElement(ye,{className:"search-list searchbar-found",inset:!0,mediaList:!0},t.map((t=>t.project==e.id&&ce.createElement(xe,{link:`/track/${t.id}/`,key:Math.random(),title:t.title,subtitle:t.release,text:t.description,badge:t.status,badgeColor:"Lost"==t.status?"red":"green"},ce.createElement("img",{slot:"media",src:t.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art lazy lazy-fade-in"}))))))}},{path:"/left-page-1/",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"Left Page 1",backLink:"Back"}),ce.createElement(be,{strong:!0},ce.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit deserunt vel accusamus voluptatem neque! Laborum, et facilis at. Est dolorem, reprehenderit, sed repellendus at cum incidunt labore vel perferendis excepturi?"),ce.createElement("p",null,"Tempore accusantium quaerat officiis dolores ullam, perferendis labore assumenda. A sint quo necessitatibus temporibus ipsam adipisci et quos aliquid officiis, facilis nulla ut aperiam assumenda magnam blanditiis exercitationem facere non!"),ce.createElement("p",null,"Omnis accusamus harum, vero dolores itaque, asperiores laudantium eligendi ipsa, labore dignissimos unde temporibus eius assumenda, obcaecati fuga et. Et provident at consectetur vel temporibus ea nam, veritatis excepturi obcaecati."),ce.createElement("p",null,"Aspernatur dolorum nostrum est sapiente deleniti in. Placeat itaque expedita dignissimos, suscipit tenetur necessitatibus sunt excepturi quisquam, doloremque repudiandae mollitia in. Nesciunt quo vel, dolorum magni nihil officia reprehenderit libero."),ce.createElement("p",null,"Fugit nesciunt nobis at doloribus labore, voluptatem quis, distinctio, saepe illo adipisci qui molestias fugiat ut! Quasi animi possimus temporibus repudiandae quam aspernatur, recusandae libero, reiciendis distinctio cupiditate nesciunt a.")))},{path:"/left-page-2/",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"Left Page 2",backLink:"Back"}),ce.createElement(be,{strong:!0},ce.createElement("p",null,"Maxime tempore, repellendus? Sequi saepe provident quas, neque assumenda dicta odit eaque nesciunt facere mollitia totam voluptate aspernatur vel corporis repudiandae commodi ad cumque repellendus. Saepe officia iure repellat repellendus."),ce.createElement("p",null,"Ea maiores accusantium non fuga dicta, vero minus veniam! Ipsum eveniet vero voluptate veritatis aspernatur hic dicta adipisci, debitis. Sint quam aperiam repellat quis perspiciatis accusantium ipsum nulla soluta temporibus."),ce.createElement("p",null,"Necessitatibus ipsum culpa doloremque, nostrum atque totam minima itaque! Blanditiis nobis nam repudiandae, ut nostrum voluptate accusantium atque, veniam libero quaerat corporis laborum earum rem nihil unde. Vitae cum, aliquam?"),ce.createElement("p",null,"Debitis aliquid nemo maxime recusandae, mollitia sed error vero. Atque molestiae rem necessitatibus nam voluptas quaerat, reiciendis, excepturi quis facilis, quod cupiditate vitae voluptate repudiandae! Unde impedit aut id ut?")))},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:e=>{const{f7route:t,f7router:a}=e;return ce.createElement(me,null,ce.createElement(ue,{title:"Dynamic Route",backLink:"Back"}),ce.createElement(be,{strong:!0},ce.createElement("ul",null,ce.createElement("li",null,ce.createElement("b",null,"Url:")," ",t.url),ce.createElement("li",null,ce.createElement("b",null,"Path:")," ",t.path),ce.createElement("li",null,ce.createElement("b",null,"Hash:")," ",t.hash),ce.createElement("li",null,ce.createElement("b",null,"Params:"),ce.createElement("ul",null,Object.keys(t.params).map((e=>ce.createElement("li",{key:e},ce.createElement("b",null,e,":")," ",t.params[e]))))),ce.createElement("li",null,ce.createElement("b",null,"Query:"),ce.createElement("ul",null,Object.keys(t.query).map((e=>ce.createElement("li",{key:e},ce.createElement("b",null,e,":")," ",t.query[e]))))),ce.createElement("li",null,ce.createElement("b",null,"Route:")," ",t.route.path))),ce.createElement(be,{strong:!0},ce.createElement(pe,{onClick:()=>a.back()},"Go back via Router API")))}},{path:"/request-and-load/user/:userId/",async:function({router:e,to:t,resolve:a}){var l=e.app;l.preloader.show(),t.params.userId,setTimeout((function(){l.preloader.hide(),a({component:Ue},{props:{user:{firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]}}})}),1e3)}},{path:"(.*)",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"Not found",backLink:"Back"}),ce.createElement(be,{strong:!0},ce.createElement("p",null,"Sorry"),ce.createElement("p",null,"Requested content not found.")))}];o.use(Fe),De.render(ce.createElement((()=>{const[e,o]=ie.exports.useState(""),[i,c]=ie.exports.useState(""),m={name:"nobodys tracker",theme:"md",store:Oe,routes:He};return ze((()=>{})),ce.createElement(Be,(u=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&s(e,a,t[a]);return e})({},m),t(u,a({themeDark:!0}))),ce.createElement(Ie,{left:!0,cover:!0,themeDark:!0,visibleBreakpoint:960},ce.createElement(Ae,null,ce.createElement(me,null,ce.createElement(ue,{title:"More"}),ce.createElement(we,null,"Socials"),ce.createElement(ye,{inset:!0,media:!0},ce.createElement(xe,{link:"https://discord.gg/xxxtentacion",external:!0,title:"Discord"},ce.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://i.pinimg.com/originals/66/1e/cf/661ecf66bda49150b44d25e4440e2bb8.jpg"})),ce.createElement(xe,{link:"https://reddit.com/r/daggerleaks",external:!0,title:"Reddit"},ce.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://www.vectorico.com/download/social_media/Reddit-Icon.png"}))),ce.createElement(we,null,"Other Pages"),ce.createElement(ye,{inset:!0,media:!0},ce.createElement(xe,{link:"/about/",view:".view-main",panelClose:!0,title:"About"})),ce.createElement(we,null,"Sections"),ce.createElement(ye,{inset:!0,media:!0},ce.createElement(xe,{link:"/unreleased/",view:".view-main",panelClose:!0,title:"Unreleased"}),ce.createElement(xe,{view:".view-main",style:{opacity:"0.7"},panelClose:!0,title:"Demos"}),ce.createElement(xe,{view:".view-main",style:{opacity:"0.7"},panelClose:!0,title:"Freestyles"}),ce.createElement(xe,{view:".view-main",style:{opacity:"0.7"},panelClose:!0,title:"Unknown"}),ce.createElement(xe,{link:"/projects/",view:".view-main",panelClose:!0,title:"Projects"}))))),ce.createElement(Ie,{right:!0,reveal:!0,themeDark:!0},ce.createElement(Ae,null,ce.createElement(me,null,ce.createElement(ue,{title:"Right Panel"}),ce.createElement(be,null,"Right panel content goes here")))),ce.createElement(Ae,{main:!0,className:"safe-areas",url:"/"}),ce.createElement(Pe,{id:"my-popup"},ce.createElement(Ae,null,ce.createElement(me,null,ce.createElement(ue,{title:"Popup"},ce.createElement(ge,null,ce.createElement(pe,{popupClose:!0},"Close"))),ce.createElement(be,null,ce.createElement("p",null,"Popup content goes here."))))),ce.createElement(Ce,{id:"my-login-screen"},ce.createElement(Ae,null,ce.createElement(me,{loginScreen:!0},ce.createElement(Se,null,"Login"),ce.createElement(ye,{form:!0},ce.createElement(Ne,{type:"text",name:"username",placeholder:"Your username",value:e,onInput:e=>o(e.target.value)}),ce.createElement(Ne,{type:"password",name:"password",placeholder:"Your password",value:i,onInput:e=>c(e.target.value)})),ce.createElement(ye,null,ce.createElement(Te,{title:"Sign In",onClick:()=>{Re.dialog.alert("Username: "+e+"<br>Password: "+i,(()=>{Re.loginScreen.close()}))}}),ce.createElement(Me,null,"Some text about login information.",ce.createElement("br",null),'Click "Sign In" to close Login Screen'))))));var u})),document.getElementById("app"));
