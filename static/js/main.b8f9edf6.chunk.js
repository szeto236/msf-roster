(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(17),c=a.n(o),i=a(22),l=a(44),s=a(5),f=a(27),m=a.n(f),u=a(37),d=a(38),p=a.n(d);var h=function(e){var t=e.spreadsheetId,a=e.sheetRange,n=e.apiKey,o=e.majorDimension,c=Object(r.useState)({values:[]}),l=Object(i.a)(c,2),s=l[0],f=l[1];return Object(r.useEffect)(function(){!function(){var e=Object(u.a)(m.a.mark(function e(){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://sheets.googleapis.com/v4/spreadsheets/".concat(t,"/values/").concat(a,"?key=").concat(n,"&majorDimension=").concat(o));case 2:r=e.sent,f({values:r.data.values});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t,a,n,o]),s},w=a(18),k=a(76),g=a(84),y=a(39),v=function(e){var t=e.tier,a=e.className,r="transparent",o="transparent";return t>1&&t<5?(r="#00ff00",o="#004d00"):t>=5&&t<9?(r="#56aeff",o="#355a7d"):t>=9&&(r="#ff00ff",o="#660066"),n.a.createElement("svg",{width:"120",height:"120",className:a},t%4===1&&n.a.createElement("circle",{cx:"60",cy:"77",r:"40",stroke:r,strokeWidth:"2",fill:"transparent"}),t%4===2&&n.a.createElement(n.a.Fragment,null,n.a.createElement("circle",{cx:"60",cy:"77",r:"40",stroke:r,strokeWidth:"1",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"55",stroke:r,strokeWidth:"4",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"59",stroke:r,strokeWidth:"1",fill:"transparent"})),t%4===3&&n.a.createElement(n.a.Fragment,null,n.a.createElement("circle",{cx:"60",cy:"77",r:"40",stroke:r,strokeWidth:"1",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"46",stroke:r,strokeWidth:"4",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"50",stroke:r,strokeWidth:"1",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"58",stroke:o,strokeWidth:"4",fill:"transparent"})),0!==t&&t%4===0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("circle",{cx:"60",cy:"77",r:"40",stroke:r,strokeWidth:"1",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"46",stroke:r,strokeWidth:"4",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"50",stroke:r,strokeWidth:"1",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"58",stroke:o,strokeWidth:"4",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"57",strokeDasharray:"40,20,60",stroke:r,strokeWidth:"2",fill:"transparent"}),n.a.createElement("circle",{cx:"60",cy:"77",r:"60",strokeDasharray:"100,100",stroke:r,strokeWidth:"2",fill:"transparent"})))};function b(){var e=Object(w.a)(['\n  text-transform: uppercase;\n  font-family: "Mukta Mahee", sans-serif;\n  font-weight: 600;\n  line-height: 0.9;\n']);return b=function(){return e},e}var E=Object(s.b)(b()),x=s.c.div.withConfig({displayName:"Character__Wrapper",componentId:"eu66ku-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative;padding:10px;margin:0.5em 0;"]),C=s.c.div.withConfig({displayName:"Character__ImageWrapper",componentId:"eu66ku-1"})(["border-radius:0 0 50% 50%;overflow:hidden;z-index:3;"]),_=s.c.div.withConfig({displayName:"Character__CircleBg",componentId:"eu66ku-2"})(["background:radial-gradient( ellipse at center,hsla(0,0%,8%,0) 50%,#141414 100% );border-radius:50px;border:2px solid #464646;height:73px;position:absolute;top:44px;width:73px;z-index:-1;transition:all 0.3s ease;"]),S=s.c.div.withConfig({displayName:"Character__CharName",componentId:"eu66ku-3"})(["",";color:#fff;font-size:14px;transform:skewX(-15deg);"],E),z=s.c.div.withConfig({displayName:"Character__InfoOverlay",componentId:"eu66ku-4"})(["display:flex;align-items:center;flex-direction:column;position:absolute;bottom:-10px;left:0;right:0;width:100%;z-index:4;"]),W=s.c.div.withConfig({displayName:"Character__Level",componentId:"eu66ku-5"})(["",";color:#eaeaea;font-size:14px;transform:skewX(-15deg);z-index:4;"],E),N=s.c.div.withConfig({displayName:"Character__Power",componentId:"eu66ku-6"})(["",";color:#ffff8e;font-size:26px;transform:skewX(-15deg);z-index:4;"],E),I=s.c.ul.withConfig({displayName:"Character__StarList",componentId:"eu66ku-7"})(["list-style:none;padding:0;margin:0;display:flex;"]),j=Object(s.c)(v).withConfig({displayName:"Character__StyledTierGrow",componentId:"eu66ku-8"})(["position:absolute;top:4px;z-index:-1;"]),O=s.c.li.withConfig({displayName:"Character__StarListItem",componentId:"eu66ku-9"})([""]),D=function(e){var t=e.color,a=e.icon;return r.createElement(O,null,r.createElement(y.a,{icon:a,color:t,size:"xs"}))},A=function(e){var t=e.imageUrl,a=e.charName,n=e.level,o=e.power,c=e.star,i=e.rStar,l=e.tier,s=function(e,t){var a=+e,r=7-+t>=0?7-+t:0;return+e>+t&&(r=7-(+e-+t+(a=+t))),{redStar:a,greyStar:r,yellowStar:+t-+e>0?+t-+e:0,emptyRStar:+e>+t?+e-+t:0}}(i,c);return r.createElement(x,null,r.createElement(C,null,r.createElement("img",{src:t,alt:a})),r.createElement(_,null),r.createElement(j,{tier:+l}),r.createElement(z,null,r.createElement(W,null,"LVL ",n),r.createElement(N,null,k.a(",","",o)),r.createElement(S,null,a),r.createElement(I,null,s.redStar>0&&g.a(r.createElement(D,{icon:["fas","star"],color:"#d41f1f"}),s.redStar),s.emptyRStar>0&&g.a(r.createElement(D,{icon:["far","star"],color:"#d41f1f"}),s.emptyRStar),s.yellowStar>0&&g.a(r.createElement(D,{icon:["fas","star"],color:"#ffff8e"}),s.yellowStar),s.greyStar>0&&g.a(r.createElement(D,{icon:["fas","star"],color:"#999"}),s.greyStar))))};A.defaultProps={power:"0",imageUrl:"",charName:"",level:"0",star:"0",rStar:"0",tier:"0"};var T=A;function U(){var e=Object(w.a)(["\n  @font-face {\n      font-family: Ultimus;\n      font-weight: 300;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/a2bf336aff03d67fc55372e083f073c4.woff)\n  }\n\n  @font-face {\n      font-family: Ultimus;\n      font-weight: 400;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/a01615b5087744969beadbbd784e1295.woff)\n  }\n\n  @font-face {\n      font-family: Ultimus;\n      font-weight: 500;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/389705037732e181a25966e6185b0f57.woff)\n  }\n\n  @font-face {\n      font-family: Ultimus;\n      font-weight: 700;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/9d703ae86e98db0253a254b96016f116.woff)\n  }\n\n  @font-face {\n      font-family: Teko;\n      font-weight: 300;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/05d811b921da083e601eee1219c3734f.woff)\n  }\n\n  @font-face {\n      font-family: Teko;\n      font-weight: 400;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/ba74f5ca0bebce1385b10579c15b95c5.woff)\n  }\n\n  @font-face {\n      font-family: Teko;\n      font-weight: 500;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/0e74be7d7f5087002d8b1efe9fcdfe19.woff)\n  }\n\n  @font-face {\n      font-family: Teko;\n      font-weight: 700;\n      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/9c1f8d196285181b5313a2146a5453d6.woff)\n  }\n\n  body {\n    background: #282828;\n    line-height: 1.4;\n    color: #fff;\n    font-family: Ultimus,Arial,Helvetica,sans-serif;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 400;\n  }\n"]);return U=function(){return e},e}var B=Object(s.a)(U()),R=a(16),L=a(42),V=a(43),K=a(85),M=a(80),X=a(77),F=a(79),J=a(81),Q=M.a(Number),q=a(82),G=a(78),P=a(83),H=function(e,t){return q.a(G.a([P.a(t)]),e)};R.b.add(L.a,V.a);var Y=s.c.div.withConfig({displayName:"App__GridWrapper",componentId:"sc-80ai01-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-template-rows:auto;grid-column-gap:1rem;justify-content:center;"]),$={spreadsheetId:"1XoNQlKdUsCMQ0Ew6g5q_nqQuJMccv8XrAbkDypJQdqI",sheetRange:"Roster!A3:W104",apiKey:"AIzaSyD2zKGhkYnDM06zTvNVAveObADDKd0fATA",majorDimension:"ROWS"},Z=function(){var e,t,a=h(Object(l.a)({},$)),o=Object(r.useState)(a.values),c=Object(i.a)(o,2),s=c[0],f=c[1],m=(e=20,t=a.values,X.a(F.a(J.a("0",e),Q),t));return Object(r.useEffect)(function(){f(a.values)},[a]),n.a.createElement(n.a.Fragment,null,n.a.createElement(B,null),n.a.createElement("button",{onClick:function(){return f(m)}},"sortByPower"),n.a.createElement("button",{onClick:function(){return f(H(a.values,"Blaster"))}},"View Blaster"),n.a.createElement("button",{onClick:function(){return f(H(a.values,"Controller"))}},"View Controller"),n.a.createElement("button",{onClick:function(){return f(H(a.values,"Brawler"))}},"View Brawler"),n.a.createElement("button",{onClick:function(){return f(H(a.values,"Tech"))}},"View Tech"),n.a.createElement(Y,null,K.a(s)&&n.a.createElement("h1",null,"Loading..."),s&&s.map(function(e){var t="".concat("/msf-roster","/images/").concat(e[1],".png");return n.a.createElement(T,{key:e[2],imageUrl:t,charName:e[2],star:e[12],rStar:e[13],level:e[14],tier:e[19],power:e[20]})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.b8f9edf6.chunk.js.map