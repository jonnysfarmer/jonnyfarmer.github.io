(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(11),c=t.n(r),i=(t(94),t(40)),l=t(28),m=(t(95),t(34)),s=t(136),d=t(137),p=t(138),u=t(102),g=t(139),h=t(140),E=t(141),f=t(142),y=t(135),b=t(154),v=t(143),k=t(152),w=t(67),x=t.n(w),j=t(66),N=t.n(j),S=t(23),D=t(133),T=t(49),I=t(50),C=t(83),z=t(63),B=t(5),M=t(155),O=Object(C.a)({palette:{primary:{main:"#24305E"},secondary:{main:"#ff9100"},info:{main:"#374785"}}}),A=Object(z.a)((function(e){var a;return a={root:{flexGrow:1,width:"100%"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},paperCard:{padding:e.spacing(2),margin:"auto"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.success.main},boxdisplay:{marginLeft:e.spacing(1),color:e.palette.text.primary},noPadding:{padding:0},drawer:Object(S.a)({},e.breakpoints.up("md"),{width:200,flexShrink:0}),appBar:Object(S.a)({},e.breakpoints.up("md"),{zIndex:e.zIndex.drawer+1,colorPrimary:e.palette.primary.main}),menuButton:Object(S.a)({marginRight:e.spacing(1)},e.breakpoints.up("md"),{display:"none"}),desktopMenuButton:{color:"#FFF"},rHS:{display:"flex",justifyContent:"flex-end"},toolbar:e.mixins.toolbar,drawerPaper:{width:200},iconColor:{color:D.a},content:{flexGrow:1,padding:e.spacing(3)}},Object(S.a)(a,"paper",{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}),Object(S.a)(a,"avatar",{margin:e.spacing(1),backgroundColor:e.palette.success.main}),Object(S.a)(a,"form",{width:"100%",margin:e.spacing(1)}),Object(S.a)(a,"submit",{margin:e.spacing(3,0,2),backgroundColor:e.palette.success.main,"&:hover":{backgroundColor:e.palette.success.dark}}),Object(S.a)(a,"reminderFormPaper",{marginTop:e.spacing(0),padding:e.spacing(2)}),Object(S.a)(a,"reminderInlineField",{marginLeft:e.spacing(1),marginTop:e.spacing(.5)}),a}));Object(B.a)({switchBase:{color:T.a[500],"&$checked":{color:I.a[500]},"&$checked + $track":{backgroundColor:I.a[500]},"& + $track":{backgroundColor:T.a[500]}},checked:{},track:{}})(M.a);var P=function(e){var a=e.container,t=A(),n=o.a.useState(!1),r=Object(m.a)(n,2),c=r[0],w=r[1],j=function(){w(!c)},S=Object(l.f)().location.pathname,D=o.a.createElement("div",null,o.a.createElement("div",{className:t.toolbar}),o.a.createElement(s.a,null),o.a.createElement(d.a,null,["About","Portfolio","Contact"].map((function(e,a){return o.a.createElement(i.b,{to:"/".concat(e),key:a,color:"primary"},o.a.createElement(p.a,null,o.a.createElement(u.a,{component:"h3",variant:"subtitle1",color:"textSecondary"},e)))}))));return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,null),o.a.createElement(h.a,{theme:O},o.a.createElement(E.a,{position:"fixed",className:t.appBar},o.a.createElement(f.a,{className:t.rHS},"/"!==S&&o.a.createElement(y.a,{className:t.desktopMenuButton,href:"/jonny/#/"},o.a.createElement(N.a,null)),o.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:j,className:t.menuButton},o.a.createElement(x.a,null)),o.a.createElement(b.a,{smDown:!0},o.a.createElement(v.a,{href:"/jonny/#/about",className:t.desktopMenuButton},"About Me"),o.a.createElement(v.a,{href:"/jonny/#/portfolio",className:t.desktopMenuButton},"My Work"),o.a.createElement(v.a,{href:"/jonny/#/contact",className:t.desktopMenuButton},"Contact")))),o.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},o.a.createElement(b.a,{mdUp:!0,implementation:"css"},o.a.createElement(k.a,{container:a,variant:"temporary",anchor:"ltr"===O.direction?"right":"left",open:c,onClick:j,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},D)))))},W=t(68),G=t.n(W),H=t(146),L=t(145),R=t(147),F=t(156),J=t(148),$=t(48),_=t(151),U=Object(z.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100%"},backgroundColor:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},spacing:{marginTop:e.spacing(2),marginBottom:e.spacing(4),color:e.palette.secondary.main},titlemargin:{paddingTop:e.spacing(8),marginBottom:e.spacing(2)},textspacing:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},maxWidth:{minWidth:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}})),q=function(){var e=U();Object(l.f)();return o.a.useEffect((function(){Object($.loadCSS)("https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css")}),[]),o.a.createElement("div",{className:e.backgroundColor},o.a.createElement(_.a,{height:"100vh"},o.a.createElement(h.a,{theme:O},o.a.createElement(g.a,null),o.a.createElement(H.a,{component:"main",maxWidth:"sm",className:e.paper},o.a.createElement(_.a,{className:e.titlemargin},o.a.createElement(u.a,{component:"h1",variant:"h4",align:"center",color:"primary"},o.a.createElement(G.a,{cursor:{hideWhenDone:!0}},"Hi, I'm Jonny Farmer")),o.a.createElement(u.a,{component:"h2",variant:"h6",className:e.textspacing,align:"center",color:"textSecondary"},"A passionate junior software engineer with full stack project experience looking for opportunities to work with interesting technologies as a junior developer"),o.a.createElement(s.a,{variant:"middle"})),o.a.createElement(L.a,{in:!0,timeout:2e3},o.a.createElement(_.a,{className:e.maxWidth},o.a.createElement(u.a,{component:"h2",variant:"h6",align:"center",color:"primary"},"Technology Stack"),o.a.createElement("div",{className:e.spacing},o.a.createElement(R.a,{container:!0,spacing:2,wrap:"nowrap"},o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"HTML 5",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-html5-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"CSS 3",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-css3-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"JavaScript",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-javascript-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"React",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-react-original",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Python",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-python-plain",color:"secondary"}))),o.a.createElement(b.a,{smDown:!0},o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Node.js",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-nodejs-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Express",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-express-original",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Babel",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-babel-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"MongoDB",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-mongodb-plain",color:"secondary"})))))),o.a.createElement(b.a,{mdUp:!0},o.a.createElement("div",{className:e.spacing},o.a.createElement(R.a,{container:!0,spacing:2,wrap:"nowrap"},o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Babel",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-babel-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"MongoDB",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-mongodb-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Git",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-git-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Github",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-github-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Heroku",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-heroku-original",color:"secondary"})))))),o.a.createElement("div",{className:e.spacing},o.a.createElement(R.a,{container:!0,spacing:2,wrap:"nowrap"},o.a.createElement(b.a,{smDown:!0},o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Git",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-git-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Github",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-github-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Heroku",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-heroku-original",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Sass",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-sass-original",color:"secondary"})))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Mocha",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-mocha-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"PostgreSQL",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-postgresql-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Trello",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-trello-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Django",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-django-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Visual Studio",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-visualstudio-plain",color:"secondary"}))))),o.a.createElement(b.a,{mdUp:!0},o.a.createElement("div",{className:e.spacing},o.a.createElement(R.a,{container:!0,spacing:2,wrap:"nowrap"},o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Node.js",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-nodejs-plain",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Express",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-express-original",color:"secondary"}))),o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Sass",enterTouchDelay:300},o.a.createElement(J.a,{style:{fontSize:40},className:"devicon-sass-original",color:"secondary"}))))))))))))},Q=t(72),V=t.n(Q),Y=Object(z.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:e.spacing(12),minHeight:"100%"},backgroundColor:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},title:{textAlign:"center",fontWeight:"400"},image:{width:"60%",height:"60%",marginTop:e.spacing(2),marginBottom:e.spacing(2)},buttonMargin:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),K=["I don\u2019t eat cheese. I\u2019m not vegan, I just don't like the taste","When I was growing up I wanted to be a vet","I\u2019ve had a motorcycle license since I was 17 but it took me until 30 to pass my car test","I love whisky. Japanese is my favourite, anything peaty from Scotland, is a close second","I\u2019m a big fan of Manga and am currently reading One Piece, Tower of God and Solo Leveling","My first pet was a gecko called Dexter","As a Brixton local, I have eaten at almost every restaurant in Brixton Market"],X=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Y();return o.a.createElement("div",{className:c.backgroundColor},o.a.createElement(_.a,{height:"100vh"},o.a.createElement(h.a,{theme:O},o.a.createElement(g.a,null),o.a.createElement(H.a,{component:"main",maxWidth:"sm",className:c.paper},o.a.createElement(u.a,{component:"h1",variant:"h4",color:"primary"},"About Me"),o.a.createElement("img",{src:V.a,alt:"headshot",className:c.image}),o.a.createElement(u.a,{component:"h3",variant:"subtitle1",color:"textSecondary"},"I\u2019m the proud father of an energetic little boy, with a second on the way (due Feb 10!). When I\u2019m not chasing my son around the playground, you\u2019ll find me brewing beer at the London Beer Lab or playing squash at the local rec centre.",o.a.createElement("br",null),o.a.createElement("br",null),"After a decade in industry, I am excited to undertake a complete career change from headhunter (I owned an Executive Search Firm with 10 staff and turnover exceeding \xa31,000,000) to web developer.",o.a.createElement("br",null),o.a.createElement("br",null),"Ever the problem solver, as evidenced by master\u2019s degree in Mechanical Engineering, I am fascinated by the challenge of web development on both a practical and creative level.",o.a.createElement("br",null),o.a.createElement("br",null),"Want to more about me? Have a look below..."),o.a.createElement(v.a,{type:"submit",size:"medium",variant:"contained",color:"secondary",onClick:function(e){return function(e){e.preventDefault();var a=Math.floor(7*Math.random());r(K[a])}(e)},className:c.buttonMargin},"Random Jonny Fact Generator"),o.a.createElement(u.a,{component:"h3",variant:"subtitle1",color:"secondary",align:"center"},t)))))},Z=t(157),ee=t(149),ae=t(153),te=t(158),ne=t(79),oe=t.n(ne),re=t(73),ce=t.n(re),ie=t(74),le=t.n(ie),me=t(75),se=t.n(me),de=t(76),pe=t.n(de),ue=t(77),ge=t.n(ue),he=t(78),Ee=t.n(he),fe=Object(z.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(12)},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},buttons:{padding:e.spacing(1)},background:{backgroundColor:"#fafafa"},img:{maxHeight:"20rem",maxWidth:"100%",textAlign:"center"}}})),ye=[{name:"Remember your meds",github:"https://github.com/jonnysfarmer/remember-your-meds",deploy:"https://rememberyour-meds.herokuapp.com/",description:"A full stack mobile first app.  Created backend and restful API, created a CRUD process allowing users to create prescriptions, and activate reminders to take medication, book appointments and reorder.  Created backend commands to send texts / emails to active reminders.",tech:["devicon-react-original","devicon-python-plain","devicon-django-plain","devicon-postgresql-plain"],img:se.a},{name:"Giftlist",github:"https://github.com/jonnysfarmer/gift-list",deploy:"https://gift-list-1-jf.herokuapp.com/",description:"A full stack app. Designed data structure and flow, created backend and our API, consumed Etsy\u2019s API, developed the frontend to allow users to register, login, create, and manage lists of Gifts, including suggesting and saving ideas from Etsy (and in future other stores)",tech:["devicon-react-original","devicon-nodejs-plain","devicon-express-original","devicon-mongodb-plain","devicon-sass-original"],img:ce.a},{name:"Coins",github:"https://github.com/jonnysfarmer/coin-project",description:"An ongoing full-stack personal project using React, Node.js, MongoDB, Express.js.   The project currently shows the top 30 cryptocurrencies, with the ability to show additional information and news on each specific coin.  You can then Register / Log in to create your own portfolios ",tech:["devicon-react-original","devicon-nodejs-plain","devicon-express-original","devicon-mongodb-plain"],img:Ee.a},{name:"Park My Bike",github:"https://github.com/jonnysfarmer/park-my-bike",deploy:"https://jonnysfarmer.github.io/park-my-bike/",description:"A mobile first React front end  web app.  Identified multiple APIs to show bike parking locations near the users inputted postcode, with directions from your current location / stated location",tech:["devicon-react-original","devicon-sass-original"],img:pe.a},{name:"Brewdog",github:"https://github.com/jonnysfarmer/project-x",deploy:"https://jonnysfarmer.github.io/project-x/",description:"A front end React website, using an unofficial Brew Dog API allowing you to display drinking / tasting notes on each of their beers, as well as brewing information ",tech:["devicon-react-original","devicon-css3-plain"],img:ge.a},{name:"PAC-Man",github:"https://github.com/jonnysfarmer/project-1 ",deploy:"https://jonnysfarmer.github.io/project-1/",description:"A web based browser game using a grid structure written in Javascript.   Create PAC-MAN, hunting Ghosts, movment and collision logic with win conditions.",tech:["devicon-html5-plain","devicon-css3-plain","devicon-javascript-plain"],img:le.a}];function be(){var e=fe(),a=o.a.useState(0),t=Object(m.a)(a,2),n=t[0],r=t[1];o.a.useEffect((function(){Object($.loadCSS)("https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css")}),[]);var c=function(){r((function(e){return e+1}))},i=function(){r((function(e){return e-1}))};return o.a.createElement("div",{className:e.root},o.a.createElement(_.a,{height:"100vh"},o.a.createElement(h.a,{theme:O},o.a.createElement(g.a,null),o.a.createElement(H.a,{component:"main",maxWidth:"md"},o.a.createElement(u.a,{component:"h1",variant:"h4",align:"center",color:"primary"},"My Work"),o.a.createElement(L.a,{in:!0,timeout:1e3},o.a.createElement(Z.a,{orientation:"vertical",nonLinear:!0,activeStep:n,className:e.background},ye.map((function(a,t){return o.a.createElement(ee.a,{key:a,color:"secondary"},o.a.createElement(ae.a,{onClick:(l=t,function(){console.log("hello"),r(l)})},o.a.createElement(u.a,{component:"h3",variant:"h6",color:"inherit"},a.name)),o.a.createElement(te.a,null,o.a.createElement(R.a,{container:!0,spacing:0},o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Link to Github",enterTouchDelay:300},o.a.createElement(y.a,{className:e.buttons,href:a.github,target:"_blank"},o.a.createElement(J.a,{style:{fontSize:23},className:"devicon-github-plain"})))),a.deploy&&o.a.createElement(R.a,{item:!0},o.a.createElement(F.a,{title:"Link to deployment",enterTouchDelay:300},o.a.createElement(y.a,{className:e.buttons,href:a.deploy,target:"_blank"},o.a.createElement(oe.a,{style:{fontSize:23}})))),a.tech.map((function(a,t){return o.a.createElement(R.a,{item:!0,key:t},o.a.createElement(y.a,{className:e.buttons,disabled:!0},o.a.createElement(J.a,{style:{fontSize:23},className:a,color:"secondary"})))}))),o.a.createElement("div",{className:e.centerImage},o.a.createElement("img",{src:a.img,alt:"project img",className:e.img})),o.a.createElement(u.a,{color:"textSecondary"},a.description),o.a.createElement("div",{className:e.actionsContainer},o.a.createElement("div",null,o.a.createElement(v.a,{disabled:0===n,onClick:i,className:e.button},"Back"),n<ye.length-1&&o.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:c,className:e.button},"Next")))));var l}))))))))}var ve=t(150),ke=t(80),we=t.n(ke),xe=t(82),je=t.n(xe),Ne=t(81),Se=t.n(Ne),De=Object(z.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100%"},background:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},margin:{marginLeft:e.spacing(1)},titleMargin:{marginBottom:e.spacing(2)}}})),Te=function(){var e=De();return o.a.createElement("div",{className:e.background},o.a.createElement(_.a,{height:"100vh"},o.a.createElement(h.a,{theme:O},o.a.createElement(g.a,null),o.a.createElement(H.a,{component:"main",maxWidth:"sm",className:e.paper},o.a.createElement(u.a,{component:"h1",variant:"h4",color:"primary",className:e.titleMargin},"Contact Me"),o.a.createElement(R.a,{container:!0},o.a.createElement(R.a,{Item:!0},o.a.createElement(we.a,{style:{fontSize:30},color:"secondary"})),o.a.createElement(R.a,{Item:!0},o.a.createElement(u.a,{component:"h3",variant:"subtitle1",color:"textSecondary",className:e.margin},o.a.createElement(ve.a,{href:"mailto:john.s.farmer@gmail.com",target:"_top",color:"inherit"},"john.s.farmer@gmail.com")))),o.a.createElement(R.a,{container:!0},o.a.createElement(R.a,{Item:!0},o.a.createElement(Se.a,{style:{fontSize:30},color:"secondary"})),o.a.createElement(R.a,{Item:!0},o.a.createElement(u.a,{component:"h3",variant:"subtitle1",color:"textSecondary",className:e.margin},o.a.createElement(ve.a,{href:"https://github.com/jonnysfarmer",target:"_blank",color:"inherit"},"github.com/jonnysfarmer")))),o.a.createElement(R.a,{container:!0},o.a.createElement(R.a,{Item:!0},o.a.createElement(je.a,{style:{fontSize:30},color:"secondary"})),o.a.createElement(R.a,{Item:!0},o.a.createElement(u.a,{component:"h3",variant:"subtitle1",color:"textSecondary",className:e.margin},o.a.createElement(ve.a,{href:"https://www.linkedin.com/in/jonny-farmer/",target:"_blank",color:"inherit"},"linkedin.com/in/jonny-farmer/"))))))))};var Ie=function(){return o.a.createElement(i.a,null,o.a.createElement(P,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:q}),o.a.createElement(l.a,{exact:!0,path:"/about",component:X}),o.a.createElement(l.a,{exact:!0,path:"/portfolio",component:be}),o.a.createElement(l.a,{exact:!0,path:"/contact",component:Te})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,a,t){e.exports=t.p+"static/media/Headshot.25f96474.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/giftlist.4b513f03.gif"},74:function(e,a,t){e.exports=t.p+"static/media/project1.f1779b9e.png"},75:function(e,a,t){e.exports=t.p+"static/media/meds.d31d7ede.png"},76:function(e,a,t){e.exports=t.p+"static/media/pmb.ae640943.gif"},77:function(e,a,t){e.exports=t.p+"static/media/beers.fcf3ed70.gif"},78:function(e,a,t){e.exports=t.p+"static/media/coins.6814b5e3.gif"},89:function(e,a,t){e.exports=t(101)},94:function(e,a,t){},95:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.31191228.chunk.js.map