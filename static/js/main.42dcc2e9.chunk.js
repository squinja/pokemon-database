(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(23),s=c.n(r),o=(c(21),c(3)),i=c(9),l=c(0),j=Object(n.createContext)(),u=function(e){var t=Object(n.useState)([{name:"Magneton",type:"Steel/Electric",id:1},{name:"Weezing",type:"Poison",id:2},{name:"Skarmory",type:"Steel/Electric",id:3},{name:"Magcargo",type:"Fire/Rock",id:4}]),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(l.jsx)(j.Provider,{value:[a,r],children:e.children})},b=c.p+"static/media/pokeball-icon.bed19d90.png",d=function(){var e=Object(n.useContext)(j),t=Object(o.a)(e,2),c=(t[0],t[1],{color:"white"});return Object(l.jsxs)("nav",{children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsxs)("div",{className:"navbar-right",children:[Object(l.jsx)("img",{alt:"pokeball",src:b,style:{width:"80px",height:"80px"}}),Object(l.jsx)("h2",{className:"navbar-title",children:"Pokemon Card Generator"})]})}),Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(i.b,{style:c,to:"/",children:Object(l.jsx)("li",{children:"Home"})}),Object(l.jsx)(i.b,{style:c,to:"/cardgenerator",children:Object(l.jsx)("li",{children:"Make a Card!"})}),Object(l.jsx)(i.b,{style:c,to:"/pokedex",children:Object(l.jsx)("li",{children:"Pokedex"})})]})]})},h=c.p+"static/media/example1.3effd21b.png",O=c.p+"static/media/example2.d4c02a28.png",p=c.p+"static/media/example3.8f582ab5.png",x=c.p+"static/media/example4.ff03b5e0.png";var m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"headers",children:"Home"}),Object(l.jsx)("h4",{className:"width-500",children:"Design your dream get-well card or holiday card with Pokemon Card Generator! Using photos fetched from Unsplash API and PokeAPI, you can work in-browser to create your ideal card featuring your favorite pokepal!"}),Object(l.jsx)("h4",{children:"Feel free to search the pokemon database for your favorite pokemon to add to the card."}),Object(l.jsxs)("div",{className:"images-collection",children:[Object(l.jsx)("img",{src:h,alt:"card example 1",className:"image-size-smaller"}),Object(l.jsx)("img",{src:O,alt:"card example 2",className:"image-size-smaller"}),Object(l.jsx)("img",{src:p,alt:"card example 3",className:"image-size-smaller"}),Object(l.jsx)("img",{src:x,alt:"card example 4",className:"image-size-smaller"})]})]})},f=c(7),v=c.n(f),g=c(12);var y=function(){Object(n.useEffect)((function(){r()}),[]);var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(g.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/garchomp");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.abilities);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(c),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"headers",children:"Shop"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Garchomp abilities"}),c.map((function(e){return Object(l.jsx)("h3",{children:Object(l.jsx)(i.b,{to:"/shop/".concat(e.slot),children:e.ability.name.replace("-"," ")})},e.slot)}))]})]})},k=function(e){var t=e.name,c=e.type;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("p",{children:c})]})},S=c(31),w=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],b=Object(n.useContext)(j),d=Object(o.a)(b,2),h=(d[0],d[1]);return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h((function(e){return[].concat(Object(S.a)(e),[{name:c,type:i}])}))},children:[Object(l.jsx)("input",{type:"text",name:"name",value:c,onChange:function(e){a(e.target.value)}}),Object(l.jsx)("input",{type:"text",name:"type",value:i,onChange:function(e){u(e.target.value)}}),Object(l.jsx)("button",{children:"Submit idea"})]})},N=function(){var e=Object(n.useContext)(j),t=Object(o.a)(e,2),c=t[0];t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"headers",children:"Pokemon List"}),Object(l.jsx)(w,{}),c.map((function(e){return Object(l.jsx)(k,{name:e.name,type:e.type},e.id)}))]})};var C=function(e){var t=e.match;Object(n.useEffect)((function(){u(),console.log(t.params.id)}),[]);var c=Object(n.useState)([]),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=(j[0],j[1],function(){var e=Object(g.a)(v.a.mark((function e(){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/ability/".concat(t.params.id));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n.pokemon);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return console.log(r),Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["Other pokemon with this ability",r.map((function(e){return Object(l.jsx)("h2",{children:e.pokemon.name})}))]})})},P=c(51),E=Object(n.createContext)(),D=function(e){var t=Object(n.useState)("forest"),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)("bulbasaur"),i=Object(o.a)(s,2),j=i[0],u=i[1],b=Object(n.useState)({}),d=Object(o.a)(b,2),h=d[0],O=d[1],p=Object(n.useState)({}),x=Object(o.a)(p,2),m=x[0],f=x[1];return Object(l.jsx)(E.Provider,{value:[a,r,j,u,h,O,m,f],children:e.children})},T=c(17),R=c.n(T);function G(){var e=Object(n.useState)("christmas tree"),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=(s[0],s[1],Object(n.useContext)(E)),j=Object(o.a)(i,8),u=(j[0],j[1]),b=(j[2],j[3],j[4],j[5],j[6],j[7]),d=Object(P.a)({accessKey:"cMtyL6DE5LeI1yG9-EuYCRanNa0GFQk_NpZd6B17pSI"});Object(n.useEffect)((function(){(function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.search.getPhotos({query:c});case 2:return t=e.sent,e.next=5,t.response.results[0];case 5:if(!e.sent){e.next=9;break}u(t.response.results[0].urls.regular),e.next=10;break;case 9:b({state:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("Submitted"),0!==c.length){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,d.search.getPhotos({query:c});case 6:(n=e.sent).response.results[0]?u(n.response.results[0].urls.regular):b({state:!1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"search-forms search-photo-form",children:Object(l.jsxs)("form",{onSubmit:h,children:[Object(l.jsx)("label",{children:"Image Search"}),Object(l.jsx)("input",{type:"text",name:"query",value:c,onChange:function(e){return a(e.target.value)},placeholder:"Try 'Forest'"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]})})}function F(){Object(n.useEffect)((function(){R.a.get("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((function(e){i(e.data.sprites.front_default),j(e.status)})).catch((function(e){var t=e.request;j(t.status)}))}),[]);var e=Object(n.useState)("bulbasaur"),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(E),s=Object(o.a)(r,6),i=(s[0],s[1],s[2],s[3]),j=(s[4],s[5]),u=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==c.length){e.next=3;break}return e.abrupt("return");case 3:n="https://pokeapi.co/api/v2/pokemon/".concat(c),R.a.get(n).then((function(e){console.log(e),i(e.data.sprites.front_default),j(e.status)})).catch((function(e){var t=e.request;console.log(t),j(t.status)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"search-forms search-pokemon-form",children:Object(l.jsxs)("form",{onSubmit:u,children:[Object(l.jsx)("label",{children:"Pokemon Search"}),Object(l.jsx)("input",{type:"text",name:"query",value:c,onChange:function(e){return a(e.target.value)},placeholder:"Search for Pokemon"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]})})}var I=c(19),M=c(15),_=c(36),q=c.n(_),U=function(e){var t=e.cardText,c=e.textColor,r=Object(n.useContext)(E),s=Object(o.a)(r,6),i=s[0],j=(s[1],s[2]),u=(s[3],s[4],s[5],Object(n.useState)([j])),b=Object(o.a)(u,2),d=b[0],h=(b[1],q()(j)),O=Object(o.a)(h,1)[0],p=q()(i),x=Object(o.a)(p,1)[0],m=Object(n.useState)(!1),f=Object(o.a)(m,2),v=(f[0],f[1]),g=Object(n.useState)(!1),y=Object(o.a)(g,2),k=(y[0],y[1],Object(n.useState)(250)),S=Object(o.a)(k,2),w=S[0],N=S[1],C=Object(n.useState)(250),P=Object(o.a)(C,2),D=P[0],T=P[1],R=Object(n.useState)(0),G=Object(o.a)(R,2),F=G[0],_=G[1],U=Object(n.useState)(0),L=Object(o.a)(U,2),z=L[0],H=L[1],K=Object(n.useState)(130),Q=Object(o.a)(K,2),A=Q[0],J=Q[1],Y=Object(n.useState)(325),B=Object(o.a)(Y,2),X=B[0],W=B[1],Z=Object(n.useState)(60),V=Object(o.a)(Z,2),$=V[0],ee=(V[1],Object(n.useState)(100)),te=Object(o.a)(ee,2),ce=te[0],ne=(te[1],function(e){var t=e.shapeProps,c=e.isSelected,n=e.onSelect,r=e.onChange,s=a.a.useRef(),o=a.a.useRef();return a.a.useEffect((function(){c&&(o.current.nodes([s.current]),o.current.getLayer().batchDraw())}),[c]),Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(M.a,Object(I.a)(Object(I.a)({image:O,width:w,height:D,onClick:n,onTap:n,ref:s},t),{},{draggable:!0,x:A,y:X,onDragEnd:function(e){r(Object(I.a)(Object(I.a)({},t),{},{x:e.target.x(),y:e.target.y(),width:w,height:D}))},onTransformEnd:function(e){var c=s.current,n=c.scaleX(),a=c.scaleY();c.scaleX(1),c.scaleY(1),r(Object(I.a)(Object(I.a)({},t),{},{x:c.x(),y:c.y(),width:Math.max(5,c.width()*n)||1,height:Math.max(c.height()*a)||1}))}})),c&&Object(l.jsx)(M.e,{ref:o,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})}),ae=a.a.useState(d),re=Object(o.a)(ae,2),se=(re[0],re[1],a.a.useState(null)),oe=Object(o.a)(se,2),ie=oe[0],le=oe[1],je=function(e){var t,c=e.target===e.target.getStage(),n=(null===(t=e.target.attrs.image)||void 0===t?void 0:t.src)===(null===x||void 0===x?void 0:x.src);(c||n)&&le(null)},ue=Object(n.useRef)(null);return console.log(c),Object(l.jsx)("div",{className:"column-third card-canvas",children:Object(l.jsx)("div",{className:"card-generator-border",children:Object(l.jsxs)(M.c,{width:500,height:600,ref:ue,onMouseDown:je,onTouchStart:je,children:[Object(l.jsx)(M.b,{id:"bg-image",children:Object(l.jsx)(M.a,{image:x,x:F,y:z,draggable:!0,onDragStart:function(){v(!0)},onDragEnd:function(e){v(!1),_(e.target.x()),H(e.target.y())}})}),Object(l.jsx)(M.b,{children:Object(l.jsx)(ne,{shapeProps:O,isSelected:1===ie,onSelect:function(){le(1)},onChange:function(e){N(e.width),T(e.height),console.log(e.width,e.height),J(e.x),W(e.y)}},1)}),Object(l.jsx)(M.b,{children:Object(l.jsx)(M.d,{draggable:!0,x:$,y:ce,fontSize:50,fontFamily:"Sofia Pro",text:t,fill:c})})]})})})},L=function(e){var t=e.cardText,c=e.setCardText;Object(n.useEffect)((function(){i(t)}),[]);var a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(s)},children:[Object(l.jsx)("label",{children:"Text Input"}),Object(l.jsx)("input",{type:"text",name:"cardtext",value:s,onChange:function(e){!function(e){i(e.target.value),c(e.target.value)}(e)}})]})})},z=function(e){var t=e.textColor,c=e.setTextColor,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=(r[0],r[1]);return Object(l.jsxs)("div",{className:"color-input",children:[Object(l.jsx)("label",{for:"colorselect",children:"Select text color: "}),Object(l.jsx)("input",{type:"color",id:"colorselect",name:"colorselect",value:t,onChange:function(e){!function(e){s(e.target.value),c(e.target.value)}(e),console.log(e)}})]})},H=function(){return Object(l.jsxs)("div",{className:"column-third last-third",children:[Object(l.jsx)("h3",{children:"How to Use"}),Object(l.jsx)("p",{children:"1. Search for background image and Pokemon image."}),Object(l.jsx)("p",{children:"2. Drag and drop the text, background image, and pokemon to desired location."}),Object(l.jsx)("p",{children:"3. Change text color to match background using left modifier column."}),Object(l.jsx)("p",{children:"4. Export functionality COMING SOON! Screenshot for now."})]})},K=function(e){e.stageRef;return Object(l.jsx)("div",{})},Q=function(){var e=Object(n.useContext)(E),t=Object(o.a)(e,7),c=(t[0],t[1],t[2],t[3],t[4]),a=(t[5],t[6]),r=Object(n.useState)("Happy holidays!"),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(n.useState)("#ffaa00"),b=Object(o.a)(u,2),d=b[0],h=b[1],O=Object(n.useRef)(null);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"headers",children:"Card Generator"}),Object(l.jsx)("h4",{children:"Generate a get-well card or a card for the holidays with the Pokemon Database and a photo from Unsplash!"}),Object(l.jsx)(G,{}),!1===a.state?Object(l.jsx)("div",{className:"pokemon-fetch-error",children:"No photos were found with this query."}):null,Object(l.jsx)(F,{}),404===c?Object(l.jsx)("div",{className:"pokemon-fetch-error",children:"Please enter valid Pokemon name."}):null,Object(l.jsxs)("div",{className:"segmented-third",children:[Object(l.jsxs)("div",{className:"column-third canvas-modifier",children:[Object(l.jsx)("h3",{children:"Modify the Canvas"}),Object(l.jsx)(L,{cardText:i,setCardText:j}),Object(l.jsx)(z,{textColor:d,setTextColor:h}),Object(l.jsx)(K,{stageRef:O})]}),Object(l.jsx)(U,{cardText:i,textColor:d,stageRef:O}),Object(l.jsx)(H,{})]})]})},A=(c(84),c(6)),J=function(e){var t=e.searchQuery,c=e.setSearchQuery,n=Object(A.f)();return Object(l.jsx)("div",{className:"search-bar",children:Object(l.jsxs)("form",{className:"search-bar-stack",action:"/",method:"get",autoComplete:"off",onSubmit:function(e){n.push("?s=".concat(t)),e.preventDefault()},children:[Object(l.jsx)("label",{htmlFor:"header-search",children:Object(l.jsx)("span",{className:"visually-hidden search-label",children:"Search Pokemon: "})}),Object(l.jsx)("input",{value:t,onInput:c,type:"text",id:"header-search",placeholder:"Search",name:"s",className:"search-input",style:{fontFamily:"'Sophia Pro', sans-serif"}}),Object(l.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]})})},Y=(c(85),function(e){var t,c,n,a,r,s,o=e.pokemon,i=o.types.reduce((function(e,t,c){return e+t.type.name+(1===c?"":" -")}),"");return Object(l.jsxs)("div",{className:"pokemon-card",children:[Object(l.jsxs)("h1",{className:"pokemon-card-title",children:[o.entry_number,". ",o.name.toUpperCase()]}),Object(l.jsx)("div",{className:"pokemon-card-picture-border",children:Object(l.jsx)("div",{className:"pokemon-card-picture ".concat(i," "),children:Object(l.jsx)("div",{className:"pokemon-card-picture-background",children:Object(l.jsx)("img",{src:o.sprites.front_default})})})}),Object(l.jsxs)("div",{className:"pokemon-card-types",children:[Object(l.jsx)("div",{className:"pokemon-card-types-one ".concat(o.types[0].type.name),children:o.types[0].type.name}),(null===o||void 0===o||null===(t=o.types[1])||void 0===t||null===(c=t.type)||void 0===c?void 0:c.name)&&Object(l.jsx)("div",{className:"pokemon-card-types-two ".concat(null===o||void 0===o||null===(n=o.types[1])||void 0===n||null===(a=n.type)||void 0===a?void 0:a.name),children:null===o||void 0===o||null===(r=o.types[1])||void 0===r||null===(s=r.type)||void 0===s?void 0:s.name})]}),Object(l.jsx)("div",{children:o.moves.map((function(e,t){if(t<3)return Object(l.jsxs)("p",{children:[t+1,". ",e.move.name.replace("-"," ")]})}))})]})}),B=(c(86),function(e){var t=e.message;return Object(l.jsx)("div",{className:"announcer",role:"region","aria-live":"polite",children:t})});var X=Object(n.createContext)(),W=function(e){var t=Object(n.useState)("2"),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(l.jsx)(X.Provider,{value:[a,r],children:e.children})},Z=function(){var e=Object(n.useContext)(X),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Region Selector"}),Object(l.jsx)("label",{for:"region-select",children:"Choose a region: "}),Object(l.jsx)("div",{className:"select",children:Object(l.jsxs)("select",{onChange:function(e){c(e.target.value)},name:"region",id:"region-select",children:[Object(l.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"Select Region"}),Object(l.jsx)("option",{value:"2",children:"Kanto"}),Object(l.jsx)("option",{value:"3",children:"Johto"}),Object(l.jsx)("option",{value:"4",children:"Hoenn"}),Object(l.jsx)("option",{value:"5",children:"Sinnoh"}),Object(l.jsx)("option",{value:"8",children:"Unova"}),Object(l.jsx)("option",{value:"12",children:"Kalos"}),Object(l.jsx)("option",{value:"16",children:"Alola"}),Object(l.jsx)("option",{value:"20",children:"Galar"})]})})]})},V=(c(87),c(46),c(54)),$=c.n(V),ee=function(){return Object(l.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)($.a,{type:"Grid",color:"lightcoral",height:"100",width:"100"})})},te=c(55),ce=c.n(te),ne=function(){var e=Object(g.a)(v.a.mark((function e(t){var c,n,a,r,s,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pokemon,c=t.setPokemon,n=t.region,t.loading,a=t.setLoading,e.prev=1,e.next=4,R.a.get("https://pokeapi.co/api/v2/pokedex/".concat(n,"/\n\n  "));case 4:return r=e.sent,s=r.data,e.next=8,ce.a.map(s.pokemon_entries,function(){var e=Object(g.a)(v.a.mark((function e(t,c){var n,a,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get(t.pokemon_species.url);case 2:return n=e.sent,a=n.data,e.next=6,R.a.get(a.varieties[0].pokemon.url);case 6:return r=e.sent,(s=r.data).entry_number=t.entry_number,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}());case 8:o=e.sent,c(o),a(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();c(111);var ae=function(){var e=Object(n.useContext)(X),t=Object(o.a)(e,2),c=t[0],a=(t[1],Object(n.useState)(!1)),r=Object(o.a)(a,2),s=r[0],i=r[1];Object(n.useEffect)((function(){i(!0),ne({pokemon:h,setPokemon:O,region:c,loading:s,setLoading:i})}),[c]);var j=window.location.search,u=new URLSearchParams(j).get("s"),b=Object(n.useState)([]),d=Object(o.a)(b,2),h=d[0],O=d[1],p=Object(n.useState)(u||""),x=Object(o.a)(p,2),m=x[0],f=x[1],v=function(e,t){return t?e.filter((function(e){return e.name.includes(t)})):e}(h,m),g=Object(n.useState)(1),y=Object(o.a)(g,2),k=y[0],S=y[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{className:"headers",children:[{2:"Kanto",3:"Johto",4:"Hoenn",5:"Sinnoh",8:"Unova",12:"Kalos",16:"Alola",20:"Galar"}[c]," Pokedex"]}),Object(l.jsxs)("div",{className:" ",children:[Object(l.jsx)(Z,{}),Object(l.jsx)(J,{searchQuery:m,setSearchQuery:function(e){1!==k&&S(1),f(e.target.value)}}),s?Object(l.jsx)(ee,{}):Object(l.jsx)("div",{className:"database-container",children:v.map((function(e){return Object(l.jsx)(Y,{pokemon:e})}))})]}),Object(l.jsx)(B,{message:"Found ".concat(v.length," pokemon")})]})};c(112);var re=function(){return Object(l.jsx)(i.a,{basename:"/pokemon-card-generator",children:Object(l.jsx)(u,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(A.c,{children:[Object(l.jsx)(A.a,{path:"/",exact:!0,component:m}),Object(l.jsx)(A.a,{path:"/shop",exact:!0,component:y}),Object(l.jsx)(A.a,{path:"/shop/:id",component:C}),Object(l.jsx)(A.a,{path:"/pokemonlist",component:N}),Object(l.jsx)(D,{children:Object(l.jsxs)(W,{children:[Object(l.jsx)(A.a,{path:"/cardgenerator",component:Q}),Object(l.jsx)(A.a,{path:"/pokedex",exact:!0,component:ae})]})})]})]})})})};s.a.render(Object(l.jsx)(re,{}),document.querySelector("#root"))},21:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.42dcc2e9.chunk.js.map