(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"6Ny7":function(e,n,a){"use strict";var t=a("vJKn"),i=a.n(t),r=a("rg98"),o=a("cpVT"),c=a("q1tI"),l=a.n(c),u=a("iuhU"),s=a("k7Sn"),m=a("aBAf"),d=a("eD//"),p=a("wb2y"),b=a("tVbE"),g=a("IsqK"),h=a("mYdW"),f=a.n(h),O=a("1iKp"),k=a.n(O),y=a("x+dz"),j=a.n(y),v=a("B6OW"),w=a.n(v),N=a("JQEk"),S=a("MUHL"),_=a("bi5B"),E=a("H6h4"),P=l.a.createElement;function L(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function C(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?L(Object(a),!0).forEach((function(n){Object(o.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function R(e){var n=Object(S.a)(),a=e.toggleDrawer,t=e.open,i=Object(c.useState)({}),r=i[0],l=i[1],h=e.t,O=Object(c.useState)(""),y=O[0],v=O[1],L=Object(c.useState)(""),R=L[0],D=L[1],M=Object(c.useState)(""),T=M[0],I=M[1],q=function(e){l(C(C({},r),{},Object(o.a)({},e,!r[e])))};Object(c.useEffect)((function(){v(window.location.href),D(window.location.origin),I("/"+s.i18n.options.localeSubpaths[s.i18n.language])}),[]);var K=function e(a,t){return P(N.a,{in:a[t.id]||!1,timeout:"auto",unmountOnExit:!0},P(d.a,{className:n.sideGroup,component:"div",disablePadding:!0},t.child.map((function(t,i){return t.child?P("div",{key:i.toString()},P(b.a,{button:!0,className:Object(u.a)(a[t.id]?n.current:"",n.hasGrandChild),onClick:function(){return q(t.id)}},a[t.id]?P(j.a,null):P(w.a,null),P(g.a,{className:n.menuList,primary:t.name})),e(r,t)):P(b.a,{key:i.toString(),className:Object(u.a)(n.noChild,n.sideGroupLink,y===R+T+t.link?n.current:""),component:"a",href:t.link,button:!0},P(g.a,{className:n.menuList,primary:t.name}))}))))};return P(m.a,{open:t,onClose:a,onOpen:a,classes:{paper:n.paperNav}},P("div",{className:n.mobileNav,role:"presentation"},P("div",{className:t?n.menuOpen:""},P(d.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:n.sideMultilv},_.a.map((function(e,a){return e.child?P("div",{key:a.toString()},P(b.a,{button:!0,className:r[e.id]?n.currentParent:"",onClick:function(){return q(e.id)}},P(g.a,{className:n.menuList,primary:e.name}),r[e.id]?P(f.a,null):P(k.a,null)),K(r,e)):P(b.a,{key:a.toString(),className:Object(u.a)(n.noChild,y===R+T+e.link?n.current:""),button:!0,href:e.link},P(g.a,{className:n.menuList,primary:e.name}))}))),P(p.a,null),P(d.a,{className:n.userMenu},["login","register"].map((function(e,a){return P(b.a,{key:a.toString(),className:Object(u.a)(n.noChild,y===R+T+"/"+e?n.current:""),component:"a",href:E.a.agency[e],button:!0},P(g.a,{className:n.menuList,primary:h("common:"+e)}))}))))))}R.getInitialProps=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common"]});case 1:case"end":return e.stop()}}),e)}))),n.a=Object(s.withTranslation)(["common"])(R)},"L1/z":function(e,n,a){"use strict";var t=a("vJKn"),i=a.n(t),r=a("rg98"),o=a("q1tI"),c=a.n(o),l=a("iuhU"),u=a("ADg1"),s=a("KmP9"),m=a("bSwy"),d=a.n(m),p=a("k7Sn"),b=a("wo4K"),g=c.a.createElement;function h(e){var n=Object(o.useState)(""),a=n[0],t=n[1],i=e.t,r=e.short,c=Object(b.a)();return g("section",{className:Object(l.a)(c.search,r?c.short:"")},g(u.a,{component:"form",className:c.root},g(s.a,{value:a,onChange:function(e){t(e.target.value)},className:c.input,placeholder:i("common:list_search"),startAdornment:g(d.a,{className:c.searchIcon}),labelWidth:0})))}h.defaultProps={short:!1},h.getInitialProps=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common"]});case 1:case"end":return e.stop()}}),e)}))),n.a=Object(p.withTranslation)(["common"])(h)},MUHL:function(e,n,a){"use strict";var t=a("cpVT"),i=a("R/WZ"),r=Object(i.a)((function(e){return{paperNav:Object(t.a)({width:"100%"},e.breakpoints.up(680),{width:300}),mobileNav:{background:e.palette.background.paper,margin:e.spacing(10,0,3),overflow:"auto",position:"relative"},sideMultilv:{padding:e.spacing(3,2,0),"& > div":{marginLeft:0}},sideSinglelv:{padding:e.spacing(3,2)},userMenu:{padding:e.spacing(2)},hasGrandChild:{padding:0,"& > div":{marginLeft:0}},noChild:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},menuList:{padding:e.spacing(.5,0),"& span":{textTransform:"capitalize",fontSize:14}},sideGroup:{paddingLeft:16,"& $menuList":{padding:e.spacing(1,0)}},groupChild:{padding:e.spacing(2,0,2,3)},sideGroupLink:{paddingLeft:8},titleMega:{textTransform:"uppercase",fontWeight:e.typography.fontWeightBold,fontSize:11,color:e.palette.primary.main},current:{background:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.light,"& svg":{fill:e.palette.primary.main}},currentParent:{background:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.light,"& svg":{fill:e.palette.primary.main}}}}));n.a=r},U2vK:function(e,n,a){"use strict";var t=a("IcD2"),i=a("H6h4"),r=[{id:"company",name:"company",thumb:t.a.ui[3],child:[{name:"about",link:i.a.agency.about},{name:"team",link:i.a.agency.team},{name:"blog",link:i.a.agency.blog},{name:"blog detail",link:i.a.agency.blogDetail}]},{id:"form",name:"Form",thumb:t.a.ui[1],child:[{name:"login",link:i.a.agency.login},{name:"register",link:i.a.agency.register},{name:"contact",link:i.a.agency.contact},{name:"contact map",link:i.a.agency.contactMap}]},{id:"items",name:"items",thumb:t.a.ui[0],child:[{name:"card",link:i.a.agency.card},{name:"product",link:i.a.agency.product},{name:"product detail",link:i.a.agency.productDetail}]},{id:"utilities",name:"utilities",thumb:t.a.ui[2],child:[{name:"pricing",link:i.a.agency.pricing},{name:"faq",link:i.a.agency.faq},{name:"maintenance",link:i.a.agency.maintenance},{name:"coming soon",link:i.a.agency.comingSoon},{name:"error",link:"/error"}]}];n.a=r},X6FS:function(e,n,a){"use strict";var t=a("cpVT"),i=a("HALo"),r=a("q1tI"),o=a.n(r),c=a("iuhU"),l=a("k7Sn"),u=a("Z3vd"),s=(a("Bi3C"),a("668i")),m=a("bqsI"),d=a("AqyA"),p=a("kKAo"),b=a("AOnC"),g=a("jjAL"),h=a("t0WV"),f=a("tVbE"),O=a("IsqK"),k=a("E2gh"),y=a.n(k),j=a("wo4K"),v=o.a.createElement;function w(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function N(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?w(Object(a),!0).forEach((function(n){Object(t.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}n.a=function(e){var n=Object(j.a)(),a=e.dataMenu,o=Object(r.useState)(""),k=o[0],w=o[1],S=Object(r.useState)(""),_=S[0],E=S[1],P=Object(r.useState)(""),L=P[0],C=P[1],R=Object(r.useState)(!1),D=R[0],M=R[1],T=Object(r.useState)(""),I=T[0],q=T[1],K=Object(r.useState)(null),x=K[0],U=K[1],A=Object(r.useRef)(null),G=Object(r.useRef)(D),V=Object(r.useState)({}),z=V[0],F=V[1],B=Object(r.useState)({}),H=B[0],W=B[1],J=function(e,n){M((function(e){return!e})),q(n),U(e.currentTarget)},X=function(e){e.stopPropagation(),q(""),M(!1),F({}),W({})},Y=function(e,n,a){e.stopPropagation();for(var i={},r={},o=0;o<n.child.length;o+=1)n.child[o].id!==a&&(i=N(N({},i),{},Object(t.a)({},n.child[o].id,!1)),r=N(N({},r),{},Object(t.a)({},n.child[o].id,null)));F(N(N(N({},z),i),{},Object(t.a)({},a,!0))),W(N(N(N({},H),r),{},Object(t.a)({},a,e.currentTarget)))};Object(r.useEffect)((function(){!0===G.current&&!1===D&&A.current.focus(),G.current=D,w(window.location.href),E(window.location.origin),C("/"+l.i18n.options.localeSubpaths[l.i18n.language])}),[D]);var Z=function e(a,t,r){return v(b.a,{anchorEl:r[t.id]||null,open:a[t.id]||!1,placement:"right-start",transition:!0,disablePortal:!0},(function(a){var r=a.TransitionProps,o=a.placement;return v(m.a,Object(i.a)({},r,{style:{transformOrigin:"bottom"===o?"center bottom":"center top"}}),v(p.a,null,v(h.a,{id:"menu-list-grow"},t.child.map((function(a,i){return a.child?v(g.a,{key:i.toString(),onClick:function(e){return Y(e,t,a.id)},className:n.menuList},v(O.a,{primary:a.name}),e(z,a,H),v(y.a,{fontSize:"small"})):v(g.a,{key:i.toString(),disableGutters:!0,onClick:function(e){return X(e)},className:Object(c.a)(n.menuList,k===_+L+a.link?n.current:"")},v(f.a,{disableGutters:!0,disableRipple:!0,className:n.link,button:!0,component:"a",href:a.link},v(O.a,{primary:a.name})))})))))}))};return v("ul",{className:n.multiMenu},a.map((function(e,a){return v(r.Fragment,{key:a.toString()},e.child?v("li",{onClick:function(n){return J(n,e.name)},onKeyDown:function(n){return J(n,e.name)},ref:A},v("div",null,v(u.a,{endIcon:v(d.a,null,"expand_more")},e.name),v(b.a,{open:I===e.name,anchorEl:x||null,className:n.multiMenuRoot,placement:"bottom-start",role:void 0,transition:!0,disablePortal:!0},(function(a){var t=a.TransitionProps,r=a.placement;return v(m.a,Object(i.a)({},t,{style:{transformOrigin:"bottom"===r?"center top":"center bottom"}}),v(p.a,null,v(s.a,{onClickAway:X},v(h.a,{autoFocusItem:D,id:"menu-list-grow"},e.child.map((function(a,t){return a.child?v(g.a,{key:t.toString(),onClick:function(n){return Y(n,e,a.id)},className:n.menuList},v(O.a,{primary:a.name}),Z(z,a,H),v(y.a,{fontSize:"small"})):v(g.a,{key:t.toString(),onClick:function(e){return X(e)},className:Object(c.a)(n.menuList,k===_+L+a.link?n.current:"")},v(f.a,{disableGutters:!0,disableRipple:!0,className:n.link,button:!0,component:"a",href:a.link},v(O.a,{primary:a.name})))}))))))})))):v("li",{key:a.toString()},v("div",null,v(u.a,{href:e.link},e.name))))})))}},bi5B:function(e,n,a){"use strict";var t=a("U2vK"),i=function(e){return[{name:"1Vivamus Condimentum",link:"#"},{id:"id_"+e,name:"Lorem 2",child:[{name:"Vivamus Condimentum ",link:"#"},{name:"Vivamus Condimentum 2",link:"#"}]},{name:"3Eu Rhoncus Odio",link:"#"},{name:"4Praesent Tristique",link:"#"}]},r=[{name:"First Menu",link:"#"},{id:"id_2",name:"Second Menu",child:[{name:"Eu Rhoncus Odio",link:"#"},{id:"id_2_1",name:"In Lorem",child:i("2_1_1")},{id:"id_2_2",name:"Eu Rhoncus Odio",child:i("2_2_1")},{id:"id_2_3",name:"Praesent Tristique",child:i("2_3_1")}]},{id:"id_3",name:"Third Menu",child:[{name:"Eu Rhoncus Odio",link:"#"},{id:"id_3_1",name:"In Lorem",child:i("3_1_1")},{id:"id_3_2",name:"Eu Rhoncus Odio",child:i("3_2_1")},{id:"id_3_3",name:"Praesent Tristique",child:i("3_3_1")}]},{id:"id_4",name:"Fourth Menu",child:[{name:"Eu Rhoncus Odio",link:"#"},{id:"id_4_1",name:"In Lorem",child:i("4_1_1")},{id:"id_4_2",name:"Eu Rhoncus Odio",child:i("4_2_1")},{id:"id_4_3",name:"Praesent Tristique",child:i("4_3_1")}]},{name:"inner Pages",child:t.a}];n.a=r},mNlw:function(e,n,a){"use strict";var t=a("q1tI"),i=a.n(t),r=a("bXiM"),o=a("iuhU"),c=a("PsDL"),l=a("Ji2X"),u=a("1NhI"),s=a("lopY"),m=a("tr08"),d=a("GnM5"),p=a("H6h4"),b=a("L1/z"),g=a("pUHj"),h=a("wo4K"),f=[{name:"Category 1",child:[{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"}]},{name:"Category 2",child:[{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"}]},{name:"Category 3",child:[{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"},{name:"Eu Rhoncus Odio",link:"/"}]},{name:"Sample Pages",child:a("U2vK").a}],O=a("X6FS"),k=a("6Ny7"),y=i.a.createElement;n.a=function(e){var n=Object(t.useState)(!1),a=n[0],i=n[1],j=!1,v=function(){var e=document.documentElement,n=(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80;j!==n&&(i(n),j=n)};Object(t.useEffect)((function(){window.addEventListener("scroll",v)}),[]);var w=Object(h.a)(),N=Object(m.a)(),S=e.onToggleDark,_=e.onToggleDir,E=Object(s.a)(N.breakpoints.up("lg")),P=Object(s.a)(N.breakpoints.down("md")),L=Object(t.useState)(!1),C=L[0],R=L[1],D=function(){R(!C)};return y(t.Fragment,null,P&&y(k.a,{open:C,toggleDrawer:D}),y(r.a,{position:"relative",id:"header",className:Object(o.a)(w.header,a&&w.fixed,C&&w.openDrawer)},y(l.a,{fixed:E},y("div",{className:w.headerContent},y("nav",{className:w.navMenu},P&&y(c.a,{onClick:D,className:Object(o.a)("hamburger hamburger--spin",w.mobileMenu,C&&"is-active")},y("span",{className:"hamburger-box"},y("span",{className:Object(o.a)(w.bar,"hamburger-inner")}))),y("div",{className:w.logo},y("a",{href:p.a.agency.home},y(d.a,{type:"landscape"}))),E&&y("div",{className:w.mainMenu},y(O.a,{dataMenu:f}))),y("nav",null,y(u.a,{xsDown:!0},y(b.a,{short:!0})),E&&y("span",{className:w.vDivider}),y(g.a,{toggleDark:S,toggleDir:_}))),y(u.a,{smUp:!0},y(b.a,null)))))}}}]);