(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),s=a.n(r),o=(a(21),a(3)),i=a(9),l=a(0),j=Object(n.createContext)(),u=function(e){var t=Object(n.useState)([{name:"Magneton",type:"Steel/Electric",id:1},{name:"Weezing",type:"Poison",id:2},{name:"Skarmory",type:"Steel/Electric",id:3},{name:"Magcargo",type:"Fire/Rock",id:4}]),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(l.jsx)(j.Provider,{value:[c,r],children:e.children})},b=a.p+"static/media/pokeball-icon.bed19d90.png",d=function(){var e=Object(n.useContext)(j),t=Object(o.a)(e,2),a=(t[0],t[1],{color:"white"});return Object(l.jsxs)("nav",{children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsxs)("div",{className:"navbar-right",children:[Object(l.jsx)("img",{alt:"pokeball",src:b,style:{width:"80px",height:"80px"}}),Object(l.jsx)("h1",{className:"navbar-title",children:"Pokemon Card Generator"})]})}),Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(i.b,{style:a,to:"/",children:Object(l.jsx)("li",{children:"Home"})}),Object(l.jsx)(i.b,{style:a,to:"/cardgenerator",children:Object(l.jsx)("li",{children:"Make a Card!"})}),Object(l.jsx)(i.b,{style:a,to:"/pokedex",children:Object(l.jsx)("li",{children:"Pokedex"})})]})]})},h=a(7),O=a.n(h),p=a(12),x=a(51),m=Object(n.createContext)(),f=function(e){var t=Object(n.useState)("forest"),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)("bulbasaur"),i=Object(o.a)(s,2),j=i[0],u=i[1],b=Object(n.useState)({}),d=Object(o.a)(b,2),h=d[0],O=d[1],p=Object(n.useState)({}),x=Object(o.a)(p,2),f=x[0],v=x[1];return Object(l.jsx)(m.Provider,{value:[c,r,j,u,h,O,f,v],children:e.children})},v=a(17),g=a.n(v);function y(){var e=Object(n.useState)("christmas tree"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=(s[0],s[1],Object(n.useContext)(m)),j=Object(o.a)(i,8),u=(j[0],j[1]),b=(j[2],j[3],j[4],j[5],j[6],j[7]),d=Object(x.a)({accessKey:"cMtyL6DE5LeI1yG9-EuYCRanNa0GFQk_NpZd6B17pSI"});Object(n.useEffect)((function(){(function(){var e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.search.getPhotos({query:a});case 2:return t=e.sent,e.next=5,t.response.results[0];case 5:if(!e.sent){e.next=9;break}u(t.response.results[0].urls.regular),e.next=10;break;case 9:b({state:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("Submitted"),0!==a.length){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,d.search.getPhotos({query:a});case 6:(n=e.sent).response.results[0]?u(n.response.results[0].urls.regular):b({state:!1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"search-forms search-photo-form",children:Object(l.jsxs)("form",{onSubmit:h,children:[Object(l.jsx)("label",{children:"Image Search"}),Object(l.jsx)("input",{type:"text",name:"query",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Try 'Forest'"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]})})}function k(){Object(n.useEffect)((function(){g.a.get("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((function(e){i(e.data.sprites.front_default),j(e.status)})).catch((function(e){var t=e.request;j(t.status)}))}),[]);var e=Object(n.useState)("bulbasaur"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(m),s=Object(o.a)(r,6),i=(s[0],s[1],s[2],s[3]),j=(s[4],s[5]),u=function(){var e=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==a.length){e.next=3;break}return e.abrupt("return");case 3:n="https://pokeapi.co/api/v2/pokemon/".concat(a),g.a.get(n).then((function(e){console.log(e),i(e.data.sprites.front_default),j(e.status)})).catch((function(e){var t=e.request;console.log(t),j(t.status)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"search-forms search-pokemon-form",children:Object(l.jsxs)("form",{onSubmit:u,children:[Object(l.jsx)("label",{children:"Pokemon Search"}),Object(l.jsx)("input",{type:"text",name:"query",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Search for Pokemon"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]})})}var S=a(19),w=a(15),N=a(36),C=a.n(N),P=function(e){var t=e.cardText,a=e.textColor,r=Object(n.useContext)(m),s=Object(o.a)(r,6),i=s[0],j=(s[1],s[2]),u=(s[3],s[4],s[5],Object(n.useState)([j])),b=Object(o.a)(u,2),d=b[0],h=(b[1],C()(j)),O=Object(o.a)(h,1)[0],p=C()(i),x=Object(o.a)(p,1)[0],f=Object(n.useState)(!1),v=Object(o.a)(f,2),g=(v[0],v[1]),y=Object(n.useState)(!1),k=Object(o.a)(y,2),N=(k[0],k[1],Object(n.useState)(250)),P=Object(o.a)(N,2),D=P[0],E=P[1],G=Object(n.useState)(250),T=Object(o.a)(G,2),R=T[0],F=T[1],I=Object(n.useState)(0),M=Object(o.a)(I,2),_=M[0],q=M[1],L=Object(n.useState)(0),U=Object(o.a)(L,2),z=U[0],H=U[1],K=Object(n.useState)(130),Q=Object(o.a)(K,2),A=Q[0],J=Q[1],Y=Object(n.useState)(325),B=Object(o.a)(Y,2),X=B[0],W=B[1],Z=Object(n.useState)(60),V=Object(o.a)(Z,2),$=V[0],ee=(V[1],Object(n.useState)(100)),te=Object(o.a)(ee,2),ae=te[0],ne=(te[1],function(e){var t=e.shapeProps,a=e.isSelected,n=e.onSelect,r=e.onChange,s=c.a.useRef(),o=c.a.useRef();return c.a.useEffect((function(){a&&(o.current.nodes([s.current]),o.current.getLayer().batchDraw())}),[a]),Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(w.a,Object(S.a)(Object(S.a)({image:O,width:D,height:R,onClick:n,onTap:n,ref:s},t),{},{draggable:!0,x:A,y:X,onDragEnd:function(e){r(Object(S.a)(Object(S.a)({},t),{},{x:e.target.x(),y:e.target.y(),width:D,height:R}))},onTransformEnd:function(e){var a=s.current,n=a.scaleX(),c=a.scaleY();a.scaleX(1),a.scaleY(1),r(Object(S.a)(Object(S.a)({},t),{},{x:a.x(),y:a.y(),width:Math.max(5,a.width()*n)||1,height:Math.max(a.height()*c)||1}))}})),a&&Object(l.jsx)(w.e,{ref:o,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})}),ce=c.a.useState(d),re=Object(o.a)(ce,2),se=(re[0],re[1],c.a.useState(null)),oe=Object(o.a)(se,2),ie=oe[0],le=oe[1],je=function(e){var t,a=e.target===e.target.getStage(),n=(null===(t=e.target.attrs.image)||void 0===t?void 0:t.src)===(null===x||void 0===x?void 0:x.src);(a||n)&&le(null)},ue=Object(n.useRef)(null);return Object(l.jsx)("div",{className:"column-canvas card-canvas",children:Object(l.jsx)("div",{className:"card-generator-border",children:Object(l.jsxs)(w.c,{width:500,height:600,ref:ue,onMouseDown:je,onTouchStart:je,children:[Object(l.jsx)(w.b,{id:"bg-image",children:Object(l.jsx)(w.a,{image:x,x:_,y:z,draggable:!0,onDragStart:function(){g(!0)},onDragEnd:function(e){g(!1),q(e.target.x()),H(e.target.y())}})}),Object(l.jsx)(w.b,{children:Object(l.jsx)(ne,{shapeProps:O,isSelected:1===ie,onSelect:function(){le(1)},onChange:function(e){E(e.width),F(e.height),console.log(e.width,e.height),J(e.x),W(e.y)}},1)}),Object(l.jsx)(w.b,{children:Object(l.jsx)(w.d,{draggable:!0,x:$,y:ae,fontSize:50,fontFamily:"Sofia Pro",text:t,fill:a})})]})})})},D=function(e){var t=e.cardText,a=e.setCardText;Object(n.useEffect)((function(){i(t)}),[]);var c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(s)},children:[Object(l.jsx)("label",{children:"Text Input"}),Object(l.jsx)("input",{type:"text",name:"cardtext",value:s,onChange:function(e){!function(e){i(e.target.value),a(e.target.value)}(e)}})]})})},E=function(e){var t=e.textColor,a=e.setTextColor,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=(r[0],r[1]);return Object(l.jsxs)("div",{className:"color-input",children:[Object(l.jsx)("label",{for:"colorselect",children:"Select text color: "}),Object(l.jsx)("input",{type:"color",id:"colorselect",name:"colorselect",value:t,onChange:function(e){!function(e){s(e.target.value),a(e.target.value)}(e),console.log(e)}})]})},G=function(){return Object(l.jsxs)("div",{className:"column-third margin-top",children:[Object(l.jsx)("h3",{children:"How to Use"}),Object(l.jsx)("p",{children:"1. Search for background image and Pokemon image."}),Object(l.jsx)("p",{children:"2. Drag and drop the text, background image, and pokemon to desired location."}),Object(l.jsx)("p",{children:"3. Change text color to match background using left modifier column."}),Object(l.jsx)("p",{children:"4. Export functionality COMING SOON! Screenshot for now."})]})},T=function(e){e.stageRef;return Object(l.jsx)("div",{})},R=function(){var e=Object(n.useContext)(m),t=Object(o.a)(e,7),a=(t[0],t[1],t[2],t[3],t[4]),c=(t[5],t[6]),r=Object(n.useState)("Happy holidays!"),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(n.useState)("#ffaa00"),b=Object(o.a)(u,2),d=b[0],h=b[1],O=Object(n.useRef)(null);return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"card-generator-page-container",children:Object(l.jsxs)("div",{className:"card-generator-page-contents-container",children:[Object(l.jsxs)("div",{className:"column-third",children:[Object(l.jsx)("h2",{className:"section-headers card-generator-header",children:"Card Generator"}),Object(l.jsx)("p",{className:"description",children:"Generate a get-well card or a card for the holidays with the Pokemon Database and a photo from Unsplash!"}),Object(l.jsx)(y,{}),!1===c.state?Object(l.jsx)("div",{className:"pokemon-fetch-error",children:"No photos were found with this query."}):null,Object(l.jsx)(k,{}),404===a?Object(l.jsx)("div",{className:"pokemon-fetch-error",children:"Please enter valid Pokemon name."}):null,Object(l.jsxs)("section",{className:"canvas-modifier-section",children:[Object(l.jsx)("h3",{children:"Modify the Canvas"}),Object(l.jsx)(D,{cardText:i,setCardText:j}),Object(l.jsx)(E,{textColor:d,setTextColor:h})]}),Object(l.jsx)(G,{}),Object(l.jsx)(T,{stageRef:O})]}),Object(l.jsx)(P,{cardText:i,textColor:d,stageRef:O})]})})})},F=a.p+"static/media/example1.3effd21b.png",I=a.p+"static/media/example2.d4c02a28.png",M=a.p+"static/media/example3.8f582ab5.png",_=a.p+"static/media/example4.ff03b5e0.png";var q=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"section-headers",children:"Home"}),Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("p",{children:"Design your dream get-well card or holiday card with Pokemon Card Generator! Using photos fetched from Unsplash API and PokeAPI, you can work in-browser to create your ideal card featuring your favorite pokepal!"}),Object(l.jsx)(i.b,{to:"/cardgenerator",children:Object(l.jsx)("button",{children:"Design a Card"})}),Object(l.jsx)("p",{className:"above-margin",children:"Feel free to search the pokemon database for your favorite pokemon to add to the card."}),Object(l.jsx)(i.b,{to:"/pokedex",children:Object(l.jsx)("button",{children:"Search Pokemon"})})]}),Object(l.jsxs)("div",{className:"images-collection",children:[Object(l.jsx)("img",{src:F,alt:"Pokemon Card Generator card example 1, Image of Ludicolo over background image of concert with the caption, 'Party time!'",className:"image-size-smaller"}),Object(l.jsx)("img",{src:I,alt:"Pokemon Card Generator card example 2, image of chimchar over background image of vase of lavender flowers with the caption, 'get better soon'",className:"image-size-smaller"}),Object(l.jsx)("img",{src:M,alt:"Pokemon Card Generator card example 3, image of bulbasaur over background image of shrine at Chureito Pagoda with Mt. Fuji in the background, and the caption, 'visit again soon!'",className:"image-size-smaller"}),Object(l.jsx)("img",{src:_,alt:"Pokemon Card Generator card example 4, image of illumise over background image of close-up rose with the caption, 'feel better!'",className:"image-size-smaller"})]})]})};var L=function(){Object(n.useEffect)((function(){r()}),[]);var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=function(){var e=Object(p.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/garchomp");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.abilities);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(a),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"headers",children:"Shop"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Garchomp abilities"}),a.map((function(e){return Object(l.jsx)("h3",{children:Object(l.jsx)(i.b,{to:"/shop/".concat(e.slot),children:e.ability.name.replace("-"," ")})},e.slot)}))]})]})},U=function(e){var t=e.name,a=e.type;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("p",{children:a})]})},z=a(31),H=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],b=Object(n.useContext)(j),d=Object(o.a)(b,2),h=(d[0],d[1]);return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h((function(e){return[].concat(Object(z.a)(e),[{name:a,type:i}])}))},children:[Object(l.jsx)("input",{type:"text",name:"name",value:a,onChange:function(e){c(e.target.value)}}),Object(l.jsx)("input",{type:"text",name:"type",value:i,onChange:function(e){u(e.target.value)}}),Object(l.jsx)("button",{children:"Submit idea"})]})},K=function(){var e=Object(n.useContext)(j),t=Object(o.a)(e,2),a=t[0];t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"headers",children:"Pokemon List"}),Object(l.jsx)(H,{}),a.map((function(e){return Object(l.jsx)(U,{name:e.name,type:e.type},e.id)}))]})};var Q=function(e){var t=e.match;Object(n.useEffect)((function(){u(),console.log(t.params.id)}),[]);var a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=(j[0],j[1],function(){var e=Object(p.a)(O.a.mark((function e(){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/ability/".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,s(n.pokemon);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return console.log(r),Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["Other pokemon with this ability",r.map((function(e){return Object(l.jsx)("h2",{children:e.pokemon.name})}))]})})},A=(a(84),a(6)),J=function(e){var t=e.searchQuery,a=e.setSearchQuery,n=Object(A.f)();return Object(l.jsx)("div",{className:"search-bar",children:Object(l.jsxs)("form",{className:"search-bar-stack",action:"/",method:"get",autoComplete:"off",onSubmit:function(e){n.push("?s=".concat(t)),e.preventDefault()},children:[Object(l.jsx)("label",{htmlFor:"header-search",children:Object(l.jsx)("span",{className:"visually-hidden search-label",children:"Search Pokemon: "})}),Object(l.jsx)("input",{value:t,onInput:a,type:"text",id:"header-search",placeholder:"Search",name:"s",className:"search-input",style:{fontFamily:"'Sophia Pro', sans-serif"}}),Object(l.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]})})},Y=(a(85),function(e){var t,a,n,c,r,s,o=e.pokemon,i=o.types.reduce((function(e,t,a){return e+t.type.name+(1===a?"":" -")}),"");return Object(l.jsxs)("div",{className:"pokemon-card",children:[Object(l.jsxs)("h1",{className:"pokemon-card-title",children:[o.entry_number,". ",o.name.toUpperCase()]}),Object(l.jsx)("div",{className:"pokemon-card-picture-border",children:Object(l.jsx)("div",{className:"pokemon-card-picture ".concat(i," "),children:Object(l.jsx)("div",{className:"pokemon-card-picture-background",children:Object(l.jsx)("img",{src:o.sprites.front_default})})})}),console.log(o),Object(l.jsxs)("div",{className:"pokemon-card-types",children:[Object(l.jsx)("div",{className:"pokemon-card-types-one ".concat(o.types[0].type.name),children:o.types[0].type.name}),(null===o||void 0===o||null===(t=o.types[1])||void 0===t||null===(a=t.type)||void 0===a?void 0:a.name)&&Object(l.jsx)("div",{className:"pokemon-card-types-two ".concat(null===o||void 0===o||null===(n=o.types[1])||void 0===n||null===(c=n.type)||void 0===c?void 0:c.name),children:null===o||void 0===o||null===(r=o.types[1])||void 0===r||null===(s=r.type)||void 0===s?void 0:s.name})]}),Object(l.jsx)("div",{children:o.moves.map((function(e,t){if(t<3)return Object(l.jsxs)("p",{children:[t+1,". ",e.move.name.replace("-"," ")]})}))})]})}),B=(a(86),function(e){var t=e.message;return Object(l.jsx)("div",{className:"announcer",role:"region","aria-live":"polite",children:t})});var X=Object(n.createContext)(),W=function(e){var t=Object(n.useState)("2"),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(l.jsx)(X.Provider,{value:[c,r],children:e.children})},Z=function(){var e=Object(n.useContext)(X),t=Object(o.a)(e,2),a=(t[0],t[1]);return Object(l.jsxs)("div",{className:"section-center",children:[Object(l.jsx)("h3",{children:"Region Selector"}),Object(l.jsx)("label",{for:"region-select",children:"Choose a region: "}),Object(l.jsx)("div",{className:"select",children:Object(l.jsxs)("select",{onChange:function(e){a(e.target.value)},name:"region",id:"region-select",children:[Object(l.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"Select Region"}),Object(l.jsx)("option",{value:"2",children:"Kanto"}),Object(l.jsx)("option",{value:"3",children:"Johto"}),Object(l.jsx)("option",{value:"4",children:"Hoenn"}),Object(l.jsx)("option",{value:"5",children:"Sinnoh"}),Object(l.jsx)("option",{value:"8",children:"Unova"}),Object(l.jsx)("option",{value:"12",children:"Kalos"}),Object(l.jsx)("option",{value:"16",children:"Alola"}),Object(l.jsx)("option",{value:"20",children:"Galar"})]})})]})},V=(a(87),a(46),a(54)),$=a.n(V),ee=function(){return Object(l.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)($.a,{type:"Grid",color:"lightcoral",height:"100",width:"100"})})},te=a(55),ae=a.n(te),ne=function(){var e=Object(p.a)(O.a.mark((function e(t){var a,n,c,r,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pokemon,a=t.setPokemon,n=t.region,t.loading,c=t.setLoading,e.prev=1,e.next=4,g.a.get("https://pokeapi.co/api/v2/pokedex/".concat(n,"/\n\n  "));case 4:return r=e.sent,s=r.data,e.next=8,ae.a.map(s.pokemon_entries,function(){var e=Object(p.a)(O.a.mark((function e(t,a){var n,c,r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.pokemon_species.url);case 2:return n=e.sent,c=n.data,e.next=6,g.a.get(c.varieties[0].pokemon.url);case 6:return r=e.sent,(s=r.data).entry_number=t.entry_number,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 8:o=e.sent,a(o),c(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();a(111);var ce=function(){var e=Object(n.useContext)(X),t=Object(o.a)(e,2),a=t[0],c=(t[1],Object(n.useState)(!1)),r=Object(o.a)(c,2),s=r[0],i=r[1];Object(n.useEffect)((function(){i(!0),ne({pokemon:h,setPokemon:O,region:a,loading:s,setLoading:i})}),[a]);var j=window.location.search,u=new URLSearchParams(j).get("s"),b=Object(n.useState)([]),d=Object(o.a)(b,2),h=d[0],O=d[1],p=Object(n.useState)(u||""),x=Object(o.a)(p,2),m=x[0],f=x[1],v=function(e,t){return t?e.filter((function(e){return e.name.includes(t)})):e}(h,m),g=Object(n.useState)(1),y=Object(o.a)(g,2),k=y[0],S=y[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{className:"section-headers",children:[{2:"Kanto",3:"Johto",4:"Hoenn",5:"Sinnoh",8:"Unova",12:"Kalos",16:"Alola",20:"Galar"}[a]," Pokedex"]}),Object(l.jsxs)("div",{className:" ",children:[Object(l.jsx)(Z,{}),Object(l.jsx)(J,{searchQuery:m,setSearchQuery:function(e){1!==k&&S(1),f(e.target.value)}}),s?Object(l.jsx)(ee,{}):Object(l.jsx)("div",{className:"database-container",children:v.map((function(e){return Object(l.jsx)(Y,{pokemon:e})}))})]}),Object(l.jsx)(B,{message:"Found ".concat(v.length," pokemon")})]})};a(112);var re=function(){return Object(l.jsx)(i.a,{basename:"/pokemon-card-generator",children:Object(l.jsx)(u,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(A.c,{children:[Object(l.jsx)(A.a,{path:"/",exact:!0,component:q}),Object(l.jsx)(A.a,{path:"/shop",exact:!0,component:L}),Object(l.jsx)(A.a,{path:"/shop/:id",component:Q}),Object(l.jsx)(A.a,{path:"/pokemonlist",component:K}),Object(l.jsx)(f,{children:Object(l.jsxs)(W,{children:[Object(l.jsx)(A.a,{path:"/cardgenerator",component:R}),Object(l.jsx)(A.a,{path:"/pokedex",exact:!0,component:ce})]})})]})]})})})};s.a.render(Object(l.jsx)(re,{}),document.querySelector("#root"))},21:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.99e590fa.chunk.js.map