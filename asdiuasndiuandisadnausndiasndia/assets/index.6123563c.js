var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;"undefined"!=typeof require&&require;import{F as i,A as o,D as c,P as m,L as u,a as d,b as p,S as E,T as g,c as b,d as h,e as f,f as k,g as y,C as v,V as x,h as w,i as N,j as q,k as L,l as R,m as P,n as S,I as B,o as j,R as F,p as I,q as O,r as A,s as M,G as D,t as C,u as T,v as U,w as G,x as z,y as H,z as V,B as X,M as $,E as Y,H as _,J as K,N as Q,K as W,O as J,Q as Z,U as ee,W as te,X as ae,Y as le,Z as re,_ as ne,$ as se,a0 as ie,a1 as oe,a2 as ce,a3 as me,a4 as ue,a5 as de,a6 as pe,a7 as Ee,a8 as ge,a9 as be,aa as he,ab as fe,ac as ke,ad as ye,ae as ve,af as xe,ag as we,ah as Ne,ai as qe,aj as Le,ak as Re,al as Pe,am as Se,an as Be,ao as je,ap as Fe,aq as Ie,ar as Oe,as as Ae,at as Me,au as De,av as Ce}from"./vendor.d1ea445c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),i.use([o,c,m,u,d,p,E,g,b,h,f,k,y,v,x,w,N,q,L,R,P,S,B,j,F,I,O,A,M,D,C,T,U,G,z,H,V,X,$,Y,_,K,Q,W,J,Z,ee,te,ae,le,re,ne]);const Te=se({state:{products:[{id:"1",title:"News",status:"Lost",art:"https://i1.sndcdn.com/artworks-000472393038-kct46a-t500x500.jpg",description:"Early version of News/Flock that was up, used the first instrumental and early lyrics for News",link:"N/A"},{id:"2",title:"Glimpse",status:"Lost",art:"N/A",description:"Made just after News and labelled as Track_02. Uploaded onto facebook.",link:"N/A"},{id:"3",title:"News/Flock",status:"Available",art:"https://i1.sndcdn.com/artworks-000472393038-kct46a-t500x500.jpg",description:'X credited this song as best in story telling. Finished version of News and has a beat switch. Description on soundcloud reads "the remake , and complete version". Groupbought by the entire lost community for $4,500 in 28 hours.',link:"https://cdn.discordapp.com/attachments/631983421412868111/888880300527063040/nf.mp3"}]},getters:{products:({state:e})=>e.products},actions:{addProduct({state:e},t){e.products=[...e.products,t]}}}),Ue=e=>{const{user:t}=e;return ce.createElement(me,null,ce.createElement(ue,{title:`${t.firstName} ${t.lastName}`,backLink:"Back"}),ce.createElement(ye,{strong:!0},t.about),ce.createElement(be,null,t.links.map(((e,t)=>ce.createElement(he,{key:t,link:e.url,title:e.title,external:!0,target:"_blank"})))))};var Ge=[{path:"/",component:()=>{ie("products");const[e,t]=oe.exports.useState([]);return oe.exports.useEffect((()=>{(async()=>{await fe.get("https://coronux.github.io/tracker-data/data.json?"+Math.floor(1e16*Math.random()+1)).then((e=>{t(e.data)})).catch((e=>{console.log(e)}))})()}),[]),ce.createElement(me,{name:"catalog"},ce.createElement(ue,null,ce.createElement(de,null,ce.createElement(pe,{iconIos:"f7:menu",iconAurora:"f7:menu",iconMd:"material:menu",panelOpen:"left"})),ce.createElement(Ee,null,"nobodys tracker")),ce.createElement(ge,{searchContainer:".search-list",searchIn:".item-title"}),ce.createElement(be,{className:"search-list searchbar-found",inset:!0,mediaList:!0},e.map((e=>ce.createElement(he,{link:`/track/${e.id}/`,key:Math.random(),title:e.title,subtitle:e.release,text:e.description,badge:e.status,badgeColor:"Lost"==e.status?"red":"green"},ce.createElement("img",{slot:"media",src:e.art,onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"80",height:"80",class:"art"}))))))}},{path:"/about/",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"About",backLink:"Back"}),ce.createElement(ke,null,"About Nobodys Tracker"),ce.createElement(ye,{inset:!0,strong:!0},ce.createElement("p",null,'Nobodys tracker is a site where you can keep track of every single song created by the rapper "XXXTENTACION", it helps you keep track of what songs are out or not and tells you when new songs that are lost resurface.')),ce.createElement(ke,null,"Contributors"),ce.createElement(be,{mediaList:!0},ce.createElement(he,{external:!0,link:"https://twitter.com/coronux",title:"Coronux",subtitle:"Programming & Data"},ce.createElement("img",{slot:"media",src:"icons/coronux.jpg",width:"44",class:"licon"})),ce.createElement(he,{external:!0,link:"https://twitter.com/ryansnobodys",title:"Rydude",subtitle:"Data"},ce.createElement("img",{slot:"media",src:"icons/rydude.jpg",width:"44",class:"licon"})),ce.createElement(he,{external:!0,link:"#",title:"Vlone",subtitle:"Data"},ce.createElement("img",{slot:"media",src:"icons/vlone.gif",width:"44",class:"licon"})),ce.createElement(he,{external:!0,link:"#",title:"RISE",subtitle:"Data"},ce.createElement("img",{slot:"media",src:"icons/RISE.gif",width:"44",class:"licon"})),ce.createElement(he,{external:!0,link:"#",title:"?",subtitle:"Data"},ce.createElement("img",{slot:"media",src:"icons/no.jpeg",width:"44",class:"licon"}))))},{path:"/form/",component:()=>ce.createElement(me,{name:"form"},ce.createElement(ue,{title:"Form",backLink:"Back"}),ce.createElement(ke,null,"Form Example"),ce.createElement(be,{noHairlinesMd:!0},ce.createElement(ve,{label:"Name",type:"text",placeholder:"Your name"}),ce.createElement(ve,{label:"E-mail",type:"email",placeholder:"E-mail"}),ce.createElement(ve,{label:"URL",type:"url",placeholder:"URL"}),ce.createElement(ve,{label:"Password",type:"password",placeholder:"Password"}),ce.createElement(ve,{label:"Phone",type:"tel",placeholder:"Phone"}),ce.createElement(ve,{label:"Gender",type:"select"},ce.createElement("option",null,"Male"),ce.createElement("option",null,"Female")),ce.createElement(ve,{label:"Birth date",type:"date",placeholder:"Birth day",defaultValue:"2014-04-30"}),ce.createElement(he,{title:"Toggle"},ce.createElement(xe,{slot:"after"})),ce.createElement(ve,{label:"Range",input:!1},ce.createElement(we,{slot:"input",value:50,min:0,max:100,step:1})),ce.createElement(ve,{type:"textarea",label:"Textarea",placeholder:"Bio"}),ce.createElement(ve,{type:"textarea",label:"Resizable",placeholder:"Bio",resizable:!0})),ce.createElement(ke,null,"Buttons"),ce.createElement(ye,{strong:!0},ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col"},"Button"),ce.createElement(qe,{className:"col",fill:!0},"Fill")),ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col",raised:!0},"Raised"),ce.createElement(qe,{className:"col",raised:!0,fill:!0},"Raised Fill")),ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col",round:!0},"Round"),ce.createElement(qe,{className:"col",round:!0,fill:!0},"Round Fill")),ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col",outline:!0},"Outline"),ce.createElement(qe,{className:"col",round:!0,outline:!0},"Outline Round")),ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col",small:!0,outline:!0},"Small"),ce.createElement(qe,{className:"col",small:!0,round:!0,outline:!0},"Small Round")),ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col",small:!0,fill:!0},"Small"),ce.createElement(qe,{className:"col",small:!0,round:!0,fill:!0},"Small Round")),ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col",large:!0,raised:!0},"Large"),ce.createElement(qe,{className:"col",large:!0,fill:!0,raised:!0},"Large Fill")),ce.createElement(Ne,{tag:"p"},ce.createElement(qe,{className:"col",large:!0,fill:!0,raised:!0,color:"red"},"Large Red"),ce.createElement(qe,{className:"col",large:!0,fill:!0,raised:!0,color:"green"},"Large Green"))),ce.createElement(ke,null,"Checkbox group"),ce.createElement(be,null,ce.createElement(he,{checkbox:!0,name:"my-checkbox",value:"Books",title:"Books"}),ce.createElement(he,{checkbox:!0,name:"my-checkbox",value:"Movies",title:"Movies"}),ce.createElement(he,{checkbox:!0,name:"my-checkbox",value:"Food",title:"Food"})),ce.createElement(ke,null,"Radio buttons group"),ce.createElement(be,null,ce.createElement(he,{radio:!0,name:"radio",value:"Books",title:"Books"}),ce.createElement(he,{radio:!0,name:"radio",value:"Movies",title:"Movies"}),ce.createElement(he,{radio:!0,name:"radio",value:"Food",title:"Food"})))},{path:"/track/:id/",component:e=>{e.f7route.params.id;const[t,a]=oe.exports.useState([]);return oe.exports.useEffect((()=>{fetch("https://coronux.github.io/tracker-data/data.json").then((e=>e.json())).then((e=>{console.log(e),a(e)})).catch((e=>{console.error(e)}))}),[]),ce.createElement(me,{name:"catalog"},t.map((t=>t.id==e.id&&ce.createElement("div",null,ce.createElement(ue,{title:t.title,backLink:"Back"}),ce.createElement(ye,{inset:!0,strong:!0},ce.createElement("center",null,ce.createElement("img",{class:"art",onError:e=>{e.target.onerror=null,e.target.src="lost.png"},width:"240px",height:"240px",src:t.art}))),ce.createElement(ye,{inset:!0,strong:!0},t.description),ce.createElement(ye,{inset:!0,strong:!0},"Track status: ",ce.createElement("span",{style:{"text-transform":"capitalize"}},t.status)),ce.createElement("div",{style:{bottom:"0",position:"fixed",width:"100%",padding:"5px 0px",background:"#202020","z-index":"999"}},ce.createElement("audio",{style:{width:"100%"},controls:!0},ce.createElement("source",{src:t.link,type:"audio/mpeg"})))))))}},{path:"/left-page-1/",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"Left Page 1",backLink:"Back"}),ce.createElement(ye,{strong:!0},ce.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit deserunt vel accusamus voluptatem neque! Laborum, et facilis at. Est dolorem, reprehenderit, sed repellendus at cum incidunt labore vel perferendis excepturi?"),ce.createElement("p",null,"Tempore accusantium quaerat officiis dolores ullam, perferendis labore assumenda. A sint quo necessitatibus temporibus ipsam adipisci et quos aliquid officiis, facilis nulla ut aperiam assumenda magnam blanditiis exercitationem facere non!"),ce.createElement("p",null,"Omnis accusamus harum, vero dolores itaque, asperiores laudantium eligendi ipsa, labore dignissimos unde temporibus eius assumenda, obcaecati fuga et. Et provident at consectetur vel temporibus ea nam, veritatis excepturi obcaecati."),ce.createElement("p",null,"Aspernatur dolorum nostrum est sapiente deleniti in. Placeat itaque expedita dignissimos, suscipit tenetur necessitatibus sunt excepturi quisquam, doloremque repudiandae mollitia in. Nesciunt quo vel, dolorum magni nihil officia reprehenderit libero."),ce.createElement("p",null,"Fugit nesciunt nobis at doloribus labore, voluptatem quis, distinctio, saepe illo adipisci qui molestias fugiat ut! Quasi animi possimus temporibus repudiandae quam aspernatur, recusandae libero, reiciendis distinctio cupiditate nesciunt a.")))},{path:"/left-page-2/",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"Left Page 2",backLink:"Back"}),ce.createElement(ye,{strong:!0},ce.createElement("p",null,"Maxime tempore, repellendus? Sequi saepe provident quas, neque assumenda dicta odit eaque nesciunt facere mollitia totam voluptate aspernatur vel corporis repudiandae commodi ad cumque repellendus. Saepe officia iure repellat repellendus."),ce.createElement("p",null,"Ea maiores accusantium non fuga dicta, vero minus veniam! Ipsum eveniet vero voluptate veritatis aspernatur hic dicta adipisci, debitis. Sint quam aperiam repellat quis perspiciatis accusantium ipsum nulla soluta temporibus."),ce.createElement("p",null,"Necessitatibus ipsum culpa doloremque, nostrum atque totam minima itaque! Blanditiis nobis nam repudiandae, ut nostrum voluptate accusantium atque, veniam libero quaerat corporis laborum earum rem nihil unde. Vitae cum, aliquam?"),ce.createElement("p",null,"Debitis aliquid nemo maxime recusandae, mollitia sed error vero. Atque molestiae rem necessitatibus nam voluptas quaerat, reiciendis, excepturi quis facilis, quod cupiditate vitae voluptate repudiandae! Unde impedit aut id ut?")))},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:e=>{const{f7route:t,f7router:a}=e;return ce.createElement(me,null,ce.createElement(ue,{title:"Dynamic Route",backLink:"Back"}),ce.createElement(ye,{strong:!0},ce.createElement("ul",null,ce.createElement("li",null,ce.createElement("b",null,"Url:")," ",t.url),ce.createElement("li",null,ce.createElement("b",null,"Path:")," ",t.path),ce.createElement("li",null,ce.createElement("b",null,"Hash:")," ",t.hash),ce.createElement("li",null,ce.createElement("b",null,"Params:"),ce.createElement("ul",null,Object.keys(t.params).map((e=>ce.createElement("li",{key:e},ce.createElement("b",null,e,":")," ",t.params[e]))))),ce.createElement("li",null,ce.createElement("b",null,"Query:"),ce.createElement("ul",null,Object.keys(t.query).map((e=>ce.createElement("li",{key:e},ce.createElement("b",null,e,":")," ",t.query[e]))))),ce.createElement("li",null,ce.createElement("b",null,"Route:")," ",t.route.path))),ce.createElement(ye,{strong:!0},ce.createElement(pe,{onClick:()=>a.back()},"Go back via Router API")))}},{path:"/request-and-load/user/:userId/",async:function({router:e,to:t,resolve:a}){var l=e.app;l.preloader.show(),t.params.userId,setTimeout((function(){l.preloader.hide(),a({component:Ue},{props:{user:{firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]}}})}),1e3)}},{path:"(.*)",component:()=>ce.createElement(me,null,ce.createElement(ue,{title:"Not found",backLink:"Back"}),ce.createElement(ye,{strong:!0},ce.createElement("p",null,"Sorry"),ce.createElement("p",null,"Requested content not found.")))}];i.use(De),Ce.render(ce.createElement((()=>{const[e,i]=oe.exports.useState(""),[o,c]=oe.exports.useState(""),m={name:"nobodys tracker",theme:"md",store:Te,routes:Ge};return Le((()=>{})),ce.createElement(Re,(u=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&s(e,a,t[a]);return e})({},m),t(u,a({themeDark:!0}))),ce.createElement(Pe,{left:!0,cover:!0,themeDark:!0,visibleBreakpoint:960},ce.createElement(Se,null,ce.createElement(me,null,ce.createElement(ue,{title:"More"}),ce.createElement(ke,null,"Socials"),ce.createElement(be,{inset:!0,media:!0},ce.createElement(he,{link:"https://discord.gg/xxxtentacion",external:!0,title:"Discord"},ce.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://i.pinimg.com/originals/66/1e/cf/661ecf66bda49150b44d25e4440e2bb8.jpg"})),ce.createElement(he,{link:"https://reddit.com/r/daggerleaks",external:!0,title:"Reddit"},ce.createElement("img",{slot:"media",width:"30px",height:"30px",style:{"border-radius":"100px"},src:"https://www.vectorico.com/download/social_media/Reddit-Icon.png"}))),ce.createElement(ke,null,"Other Pages"),ce.createElement(be,{inset:!0,media:!0},ce.createElement(he,{link:"/about/",view:".view-main",panelClose:!0,title:"About"}))))),ce.createElement(Pe,{right:!0,reveal:!0,themeDark:!0},ce.createElement(Se,null,ce.createElement(me,null,ce.createElement(ue,{title:"Right Panel"}),ce.createElement(ye,null,"Right panel content goes here")))),ce.createElement(Se,{main:!0,className:"safe-areas",url:"/"}),ce.createElement(Be,{id:"my-popup"},ce.createElement(Se,null,ce.createElement(me,null,ce.createElement(ue,{title:"Popup"},ce.createElement(je,null,ce.createElement(pe,{popupClose:!0},"Close"))),ce.createElement(ye,null,ce.createElement("p",null,"Popup content goes here."))))),ce.createElement(Fe,{id:"my-login-screen"},ce.createElement(Se,null,ce.createElement(me,{loginScreen:!0},ce.createElement(Ie,null,"Login"),ce.createElement(be,{form:!0},ce.createElement(ve,{type:"text",name:"username",placeholder:"Your username",value:e,onInput:e=>i(e.target.value)}),ce.createElement(ve,{type:"password",name:"password",placeholder:"Your password",value:o,onInput:e=>c(e.target.value)})),ce.createElement(be,null,ce.createElement(Oe,{title:"Sign In",onClick:()=>{Me.dialog.alert("Username: "+e+"<br>Password: "+o,(()=>{Me.loginScreen.close()}))}}),ce.createElement(Ae,null,"Some text about login information.",ce.createElement("br",null),'Click "Sign In" to close Login Screen'))))));var u})),document.getElementById("app"));
