(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(25),r=n.n(a),s=(n(14),n(2)),o=n(6),i=n(0),j=Object(c.createContext)(),l=function(e){var t=Object(c.useState)([{name:"Magneton",type:"Steel/Electric",id:1},{name:"Weezing",type:"Poison",id:2},{name:"Skarmory",type:"Steel/Electric",id:3},{name:"Magcargo",type:"Fire/Rock",id:4}]),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(i.jsx)(j.Provider,{value:[a,r],children:e.children})},u=n.p+"static/media/pokeball-icon.bed19d90.png",d=function(){var e=Object(c.useContext)(j),t=Object(s.a)(e,2),n=(t[0],t[1],{color:"white"});return Object(i.jsxs)("nav",{children:[Object(i.jsxs)("div",{className:"navbar-right",children:[Object(i.jsx)("img",{alt:"pokeball",src:u,style:{width:"80px",height:"80px"}}),Object(i.jsx)("h2",{className:"navbar-title",children:"Pokemon Database"})]}),Object(i.jsxs)("ul",{className:"nav-links",children:[Object(i.jsx)(o.b,{style:n,to:"/",children:Object(i.jsx)("li",{children:"Database"})}),Object(i.jsx)(o.b,{style:n,to:"/cardgenerator",children:Object(i.jsx)("li",{children:"Make a Card!"})}),Object(i.jsx)(o.b,{style:n,to:"/about",children:Object(i.jsx)("li",{children:"About"})})]})]})};var b=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"headers",children:"About"})})},h=n(10),p=n.n(h),O=n(12);var x=function(){Object(c.useEffect)((function(){r()}),[]);var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(O.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/garchomp");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.abilities);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(n),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"headers",children:"Shop"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Garchomp abilities"}),n.map((function(e){return Object(i.jsx)("h3",{children:Object(i.jsx)(o.b,{to:"/shop/".concat(e.slot),children:e.ability.name.replace("-"," ")})},e.slot)}))]})]})},m=function(e){var t=e.name,n=e.type;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("p",{children:n})]})},v=n(43),f=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1],d=Object(c.useContext)(j),b=Object(s.a)(d,2),h=(b[0],b[1]);return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h((function(e){return[].concat(Object(v.a)(e),[{name:n,type:l}])}))},children:[Object(i.jsx)("input",{type:"text",name:"name",value:n,onChange:function(e){a(e.target.value)}}),Object(i.jsx)("input",{type:"text",name:"type",value:l,onChange:function(e){u(e.target.value)}}),Object(i.jsx)("button",{children:"Submit idea"})]})},y=function(){var e=Object(c.useContext)(j),t=Object(s.a)(e,2),n=t[0];t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"headers",children:"Pokemon List"}),Object(i.jsx)(f,{}),n.map((function(e){return Object(i.jsx)(m,{name:e.name,type:e.type},e.id)}))]})};var g=function(e){var t=e.match;Object(c.useEffect)((function(){u(),console.log(t.params.id)}),[]);var n=Object(c.useState)([]),a=Object(s.a)(n,2),r=a[0],o=a[1],j=Object(c.useState)(""),l=Object(s.a)(j,2),u=(l[0],l[1],function(){var e=Object(O.a)(p.a.mark((function e(){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/ability/".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,o(c.pokemon);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return console.log(r),Object(i.jsx)("div",{children:Object(i.jsxs)("h1",{children:["Other pokemon with this ability",r.map((function(e){return Object(i.jsx)("h2",{children:e.pokemon.name})}))]})})};function k(){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{children:"Image Search"}),Object(i.jsx)("input",{type:"text",name:"query",placeholder:"Try 'Forest' or 'Christmas'"}),Object(i.jsx)("button",{type:"submit",children:"Search"})]})})}var S=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"headers",children:" Card Generator"}),Object(i.jsx)("h4",{children:"Generate a get-well card or a card for the holidays with the Pokemon Database, and a photo from Unsplash!"}),Object(i.jsx)(k,{})]})},N=(n(54),n(4)),w=function(e){var t=e.searchQuery,n=e.setSearchQuery,c=Object(N.f)();return Object(i.jsx)("div",{className:"search-bar",children:Object(i.jsxs)("form",{className:"search-bar-stack",action:"/",method:"get",autoComplete:"off",onSubmit:function(e){c.push("?s=".concat(t)),e.preventDefault()},children:[Object(i.jsx)("label",{htmlFor:"header-search",children:Object(i.jsx)("span",{className:"visually-hidden search-label",children:"Search Pokemon: "})}),Object(i.jsx)("input",{value:t,onInput:n,type:"text",id:"header-search",placeholder:"Search",name:"s",className:"search-input",style:{fontFamily:"'Sophia Pro', sans-serif"}}),Object(i.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]})})},C=(n(55),function(e){var t,n,c,a,r,s,o=e.pokemon,j=o.types.reduce((function(e,t,n){return e+t.type.name+(1===n?"":" -")}),"");return Object(i.jsxs)("div",{className:"pokemon-card",children:[Object(i.jsxs)("h1",{className:"pokemon-card-title",children:[o.entry_number,". ",o.name.toUpperCase()]}),Object(i.jsx)("div",{className:"pokemon-card-picture-border",children:Object(i.jsx)("div",{className:"pokemon-card-picture ".concat(j," "),children:Object(i.jsx)("div",{className:"pokemon-card-picture-background",children:Object(i.jsx)("img",{src:o.sprites.front_default})})})}),Object(i.jsxs)("div",{className:"pokemon-card-types",children:[Object(i.jsx)("div",{className:"pokemon-card-types-one ".concat(o.types[0].type.name),children:o.types[0].type.name}),(null===o||void 0===o||null===(t=o.types[1])||void 0===t||null===(n=t.type)||void 0===n?void 0:n.name)&&Object(i.jsx)("div",{className:"pokemon-card-types-two ".concat(null===o||void 0===o||null===(c=o.types[1])||void 0===c||null===(a=c.type)||void 0===a?void 0:a.name),children:null===o||void 0===o||null===(r=o.types[1])||void 0===r||null===(s=r.type)||void 0===s?void 0:s.name})]}),Object(i.jsx)("div",{children:o.moves.map((function(e,t){if(t<3)return Object(i.jsxs)("p",{children:[t+1,". ",e.move.name.replace("-"," ")]})}))})]})}),P=(n(56),function(e){var t=e.message;return Object(i.jsx)("div",{className:"announcer",role:"region","aria-live":"polite",children:t})});var E=Object(c.createContext)(),D=function(e){var t=Object(c.useState)("2"),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(i.jsx)(E.Provider,{value:[a,r],children:e.children})},G=function(){var e=Object(c.useContext)(E),t=Object(s.a)(e,2),n=(t[0],t[1]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Region Selector"}),Object(i.jsx)("label",{for:"region-select",children:"Choose a region: "}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{onChange:function(e){n(e.target.value)},name:"region",id:"region-select",children:[Object(i.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"Select Region"}),Object(i.jsx)("option",{value:"2",children:"Kanto"}),Object(i.jsx)("option",{value:"3",children:"Johto"}),Object(i.jsx)("option",{value:"4",children:"Hoenn"}),Object(i.jsx)("option",{value:"5",children:"Sinnoh"}),Object(i.jsx)("option",{value:"8",children:"Unova"}),Object(i.jsx)("option",{value:"12",children:"Kalos"}),Object(i.jsx)("option",{value:"16",children:"Alola"}),Object(i.jsx)("option",{value:"20",children:"Galar"})]})})]})},_=(n(57),n(28),n(41)),F=n.n(_),R=function(){return Object(i.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)(F.a,{type:"Grid",color:"lightcoral",height:"100",width:"100"})})},U=n(20),A=n.n(U),J=n(42),K=n.n(J),L=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,c,a,r,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pokemon,n=t.setPokemon,c=t.region,t.loading,a=t.setLoading,e.prev=1,e.next=4,A.a.get("https://pokeapi.co/api/v2/pokedex/".concat(c,"/\n\n  "));case 4:return r=e.sent,s=r.data,e.next=8,K.a.map(s.pokemon_entries,function(){var e=Object(O.a)(p.a.mark((function e(t,n){var c,a,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get(t.pokemon_species.url);case 2:return c=e.sent,a=c.data,e.next=6,A.a.get(a.varieties[0].pokemon.url);case 6:return r=e.sent,(s=r.data).entry_number=t.entry_number,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 8:o=e.sent,n(o),a(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();n(98);var M=function(){var e=Object(c.useContext)(E),t=Object(s.a)(e,2),n=t[0],a=(t[1],Object(c.useState)(!1)),r=Object(s.a)(a,2),o=r[0],j=r[1];Object(c.useEffect)((function(){j(!0),L({pokemon:h,setPokemon:p,region:n,loading:o,setLoading:j})}),[n]);var l=window.location.search,u=new URLSearchParams(l).get("s"),d=Object(c.useState)([]),b=Object(s.a)(d,2),h=b[0],p=b[1],O=Object(c.useState)(u||""),x=Object(s.a)(O,2),m=x[0],v=x[1],f=function(e,t){return t?e.filter((function(e){return e.name.includes(t)})):e}(h,m),y=Object(c.useState)(1),g=Object(s.a)(y,2),k=g[0],S=g[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{className:"headers",children:[{2:"Kanto",3:"Johto",4:"Hoenn",5:"Sinnoh",8:"Unova",12:"Kalos",16:"Alola",20:"Galar"}[n]," Pokemon Database"]}),Object(i.jsxs)("div",{className:"categories-bar-REMOVE",children:[Object(i.jsx)(G,{}),Object(i.jsx)(w,{searchQuery:m,setSearchQuery:function(e){1!==k&&S(1),v(e.target.value)}}),o?Object(i.jsx)(R,{}):Object(i.jsx)("div",{className:"database-container",children:f.map((function(e){return Object(i.jsx)(C,{pokemon:e})}))})]}),Object(i.jsx)(P,{message:"Found ".concat(f.length," pokemon")})]})},Q=function(){return Object(i.jsx)("div",{children:"Backgroundimage"})};n(99);var I=function(){return Object(i.jsx)(o.a,{children:Object(i.jsx)(l,{children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(d,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(k,{}),Object(i.jsxs)(N.c,{children:[Object(i.jsx)(N.a,{path:"/cardgenerator",component:S}),Object(i.jsx)(N.a,{path:"/about",component:b}),Object(i.jsx)(N.a,{path:"/shop",exact:!0,component:x}),Object(i.jsx)(N.a,{path:"/shop/:id",component:g}),Object(i.jsx)(N.a,{path:"/pokemonlist",component:y}),Object(i.jsx)(D,{children:Object(i.jsx)(N.a,{path:"/",exact:!0,component:M})})]})]})})})};r.a.render(Object(i.jsx)(I,{}),document.querySelector("#root"))},14:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.3ee2c6c7.chunk.js.map