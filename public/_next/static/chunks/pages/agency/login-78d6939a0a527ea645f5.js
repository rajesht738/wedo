_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[60],{"2Z0V":function(e,t,a){"use strict";a.r(t);var n=a("vJKn"),r=a.n(n),o=a("rg98"),i=a("q1tI"),c=a.n(i),l=a("Ji2X"),s=a("iuhU"),u=a("k7Sn"),m=a("H6h4"),d=a("DbTw"),p=a("iVW4"),b=a("cpVT"),g=a("Z3vd"),f=a("lopY"),O=a("tr08"),h=a("ofer"),w=a("ZGBi"),v=a("VmPI"),j=a("tRbT"),_=a("SAJy"),y=a("vW75"),N=a("NO5Q"),T=a("U+wW"),P=c.a.createElement;function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=Object(u.withTranslation)(["common"])((function(e){var t=Object(T.a)(),a=Object(d.d)(),n=e.t,r=Object(i.useState)({email:"",password:""}),o=r[0],c=r[1],l=Object(O.a)(),u=Object(f.a)(l.breakpoints.up("md"));Object(i.useEffect)((function(){_.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return e===o.password}))}));var m=Object(i.useState)(!1),p=m[0],E=m[1],D=function(e){return function(t){c(k(k({},o),{},Object(b.a)({},e,t.target.value)))}};return P(N.a,{title:n("common:login_subtitle"),type:"login",subtitle:n("common:auth_desc")},P("div",null,P("div",{className:t.head},P("h3",{className:u?a.subtitle:Object(s.a)(a.title,a.textPrimary)},n("common:login_title"))),P(y.a,null),P("div",{className:t.separator},P(h.a,null,n("common:login_or"))),P(_.ValidatorForm,{onError:function(e){return console.log(e)},onSubmit:function(){console.log("data submited")}},P(j.a,{container:!0,spacing:3},P(j.a,{item:!0,xs:12},P(_.TextValidator,{className:t.input,label:n("common:login_email"),onChange:D("email"),fullWidth:!0,name:"email",value:o.email,validators:["required","isEmail"],errorMessages:["This field is required","Email is not valid"]})),P(j.a,{item:!0,xs:12},P(_.TextValidator,{type:"password",fullWidth:!0,className:t.input,label:n("common:login_password"),validators:["required"],onChange:D("password"),errorMessages:["This field is required"],name:"password",value:o.password}))),P("div",{className:t.formHelper},P(w.a,{control:P(v.a,{checked:p,onChange:function(e){E(e.target.checked)},color:"secondary",value:p,className:t.check}),label:P("span",null,n("common:login_remember"))}),P(g.a,{size:"small",className:t.buttonLink,href:"#"},n("common:login_forgot"))),P("div",{className:t.btnArea},P(g.a,{variant:"contained",fullWidth:!0,type:"submit",color:"primary",size:"large"},n("common:continue"))))))})),V=a("TTNb"),x=a("hCbq"),W=c.a.createElement;function q(e){var t=e.t,a=Object(d.c)(),n=e.onToggleDark,r=e.onToggleDir;return W(i.Fragment,null,W("div",{className:a.mainWrap},W(p.a,{text:t("common:header_register"),href:m.a.agency.register,onToggleDark:n,onToggleDir:r}),W(l.a,{maxWidth:"lg"},W("div",{className:Object(s.a)(a.containerGeneral,a.containerFront)},W(D,null))),W(V.a,{toggleDir:r})))}function S(e){return W("div",null,W(x.a,{pageName:"Home Page"},W(q,e)))}S.getInitialProps=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common"]});case 1:case"end":return e.stop()}}),e)})));t.default=Object(u.withTranslation)(["common"])(S)},"DH+5":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agency/login",function(){return a("2Z0V")}])}},[["DH+5",1,2,0,3,4,5,6,7,13,40]]]);