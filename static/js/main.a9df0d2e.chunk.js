(this["webpackJsonpreact-website-demo"]=this["webpackJsonpreact-website-demo"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){var c={"./barwei.jpeg":41,"./chickenwar.jpeg":42,"./doulo.jpg":43,"./foodcover.jpeg":44,"./ghost.jpg":45,"./img-section.jpg":46,"./mamajun.jpg":47,"./upgood.jpg":48};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=s,e.exports=a,a.id=13},,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/barwei.c80038c8.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/chickenwar.77733079.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/doulo.9b76e3cf.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/foodcover.cdd5cbfb.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ghost.4d26901c.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img-section.7ce7205d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mamajun.8288514d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/upgood.7a742e32.jpg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(20),s=n.n(a),i=n(8),r=n(2),o=(n(31),n(32),n(1)),l=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],d=function(e){var t=e.children,n=e.type,c=e.onClick,a=e.buttonStyle,s=e.buttonSize,i=l.includes(a)?a:l[0],d=j.includes(s)?s:j[0];return Object(o.jsx)(r.b,{to:"/food",className:"btn-mobile",children:Object(o.jsx)("button",{className:"btn ".concat(i," ").concat(d),onClick:c,type:n,children:t})})};function b(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var u=function(){var e=function(){var e=Object(c.useState)(b()),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a(b())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=(e.height,e.width),n=Object(c.useState)(!1),a=Object(i.a)(n,2),s=a[0],l=a[1],j=function(){return l(!1)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:j,children:["WaWeEat ",Object(o.jsx)("i",{className:"fas fa-utensils"})]}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){return l(!s)},children:Object(o.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(o.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/",className:"nav-links",onClick:j,children:"\u4e3b\u9801"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/food",className:"nav-links",onClick:j,children:"\u7f8e\u98df"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/sign-up",className:"nav-links-mobile",onClick:j,children:"\u767b\u5165"})})]}),t>=960&&Object(o.jsx)(d,{buttonStyle:"btn--outline",children:"\u767b\u5165"})]})})})},f=n(3),m=(n(11),n(9)),h=n.n(m),x=n(12);var O=function(e){var t=Object(c.useContext)(_).find((function(t){return t.fd_id==e.id}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("li",{className:"cards__item",children:Object(o.jsxs)(r.b,{className:"cards__item__link",to:{pathname:"/blog",state:{data:t}},children:[Object(o.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:"Travel Image",className:"cards__item__img"})}),Object(o.jsx)("div",{className:"cards__item__info",children:Object(o.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},_=(n(40),Object(c.createContext)());var p=function(){var e=Object(c.useState)([{name:"",text:"",id:"",img:"",location:"",star:"",category:""}]),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),j=l[0],d=l[1],b=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("foodData.json").then((function(e){return e.json()})).then((function(e){return s(e.foods)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("foodBlogData.json").then((function(e){return e.json()})).then((function(e){return d(e.foods)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b(),u()}),[]),Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)("h1",{children:"\u4e2d\u5f0f"}),Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsx)("div",{className:"cards__wrapper",children:Object(o.jsx)("ul",{className:"cards__items",children:a.filter((function(e){return"\u4e2d\u5f0f"===e.category})).map((function(e){return Object(o.jsx)(_.Provider,{value:j,children:Object(o.jsx)(O,{src:n(13)("./".concat(e.img)).default,text:e.text,label:e.name,id:e.id},e.id)},e.id)}))})})}),Object(o.jsx)("h1",{children:"\u65e5\u5f0f"}),Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsx)("div",{className:"cards__wrapper",children:Object(o.jsx)("ul",{className:"cards__items",children:a.filter((function(e){return"\u65e5\u5f0f"===e.category})).map((function(e){return Object(o.jsx)(_.Provider,{value:j,children:Object(o.jsx)(O,{src:n(13)("./".concat(e.img)).default,text:e.text,label:e.name,id:e.id},e.id)},e.id)}))})})})]})};n(49);var v=function(){return Object(o.jsx)("div",{className:"footer-container",children:Object(o.jsxs)("div",{className:"footer-links",children:[Object(o.jsx)("div",{className:"footer-link-wrapper",children:Object(o.jsxs)("div",{className:"footer-link-items",children:[Object(o.jsx)("h2",{children:"\u95dc\u65bc\u6211\u5011"}),Object(o.jsx)(r.b,{to:"/",children:"\u670d\u52d9"}),Object(o.jsx)("br",{}),Object(o.jsx)(r.b,{to:"/",children:"\u4f5c\u8005"})]})}),Object(o.jsx)("div",{className:"footer-link-wrapper",children:Object(o.jsxs)("div",{className:"footer-link-items",children:[Object(o.jsx)("h2",{children:"\u7c89\u7d72\u5718\u9023\u7d50"}),Object(o.jsxs)("div",{className:"social-icons",children:[Object(o.jsx)(r.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(o.jsx)("i",{className:"fab fa-facebook-f"})}),Object(o.jsx)(r.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(o.jsx)("i",{className:"fab fa-instagram"})}),Object(o.jsx)(r.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(o.jsx)("i",{className:"fab fa-youtube"})}),Object(o.jsx)(r.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(o.jsx)("i",{className:"fab fa-twitter"})}),Object(o.jsx)(r.b,{className:"social-icon-link linkedin",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(o.jsx)("i",{className:"fab fa-linkedin"})})]}),Object(o.jsx)("small",{className:"website-rights",children:"WaWeEat\xa92022"})]})})]})})};n(50);var g=function(){return Object(o.jsxs)("div",{className:"hero-container",children:[Object(o.jsx)("h1",{children:"\u2003\u627e\u7f8e\u98df\uff1f"}),Object(o.jsx)("p",{children:"\u5f9e\u9019\u958b\u59cb"}),Object(o.jsx)("div",{className:"hero-btns",children:Object(o.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"\u6309\u6211\u641c\u5c0b"})})]})};var N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(p,{}),Object(o.jsx)(v,{})]})},k=(n(51),n(24));var w=function(e){var t=Object(c.useContext)(C).find((function(t){return t.fd_id==e.id}));return Object(o.jsx)("div",{className:"infoCards__item",children:Object(o.jsxs)(r.b,{className:"infoCards__item__link",to:{pathname:"/blog",state:{data:t}},children:[Object(o.jsx)("div",{className:"infoCards__item__pic-wrap",children:Object(o.jsx)("img",{src:e.src,alt:"Food",className:"infoCards__item__img"})}),Object(o.jsxs)("div",{className:"infoCards__item__info",children:[Object(o.jsx)("p",{className:"infoCards__item__text infoCards__item__text__title",children:e.name}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"infoCards__item__text infoCards__item__text__content",children:e.text}),Object(o.jsxs)("div",{className:"infoCards__wrapper__foot",children:[Object(o.jsx)("div",{className:"infoCards__line"}),Object(o.jsxs)("div",{className:"infoCards__item__text__footer",children:[Object(o.jsxs)("p",{className:"infoCards__item__text infoCards__item__text__love",children:[Object(o.jsx)(k.a,{className:"icon__love"}),e.star]}),Object(o.jsxs)("p",{className:"infoCards__item__text infoCards__item__text__address",children:["\u5730\u5740\uff1a",e.location]})]})]})]})]})})},C=Object(c.createContext)();var y=function(){var e=Object(c.useState)([{name:"",text:"",path:"",img:"",location:"",star:"",category:""}]),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),j=l[0],d=l[1],b=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("foodData.json").then((function(e){return e.json()})).then((function(e){return s(e.foods)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("foodBlogData.json").then((function(e){return e.json()})).then((function(e){return d(e.foods)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b(),u()}),[]),Object(o.jsx)("div",{className:"infoCards",children:Object(o.jsxs)("div",{className:"infoCards__container",children:[Object(o.jsx)("div",{className:"infoCards__title",children:Object(o.jsx)("h1",{children:"\u4e2d\u5f0f"})}),Object(o.jsx)("div",{className:"infoCards__wrapper",children:a.filter((function(e){return"\u4e2d\u5f0f"===e.category})).map((function(e,t){return Object(o.jsx)(C.Provider,{value:j,children:Object(o.jsx)(w,{src:n(13)("./".concat(e.img)).default,text:e.text,name:e.name,location:e.location,star:e.star,id:e.id},e.id)},e.id)}))}),Object(o.jsx)("div",{className:"infoCards__title",children:Object(o.jsx)("h1",{children:"\u65e5\u5f0f"})}),Object(o.jsx)("div",{className:"infoCards__wrapper",children:a.filter((function(e){return"\u65e5\u5f0f"===e.category})).map((function(e,t){return Object(o.jsx)(C.Provider,{value:j,children:Object(o.jsx)(w,{src:n(13)("./".concat(e.img)).default,text:e.text,name:e.name,location:e.location,star:e.star,id:e.id},e.id)},e.id)}))})]})})};function S(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(y,{})})}function E(){return Object(o.jsx)("h1",{className:"sign-up",children:"SIGN UP"})}n(52);var F=function(){var e=Object(f.f)().state.data,t=e.title,c=e.description,a=e.img,s=(e.tag,e.date);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"blog",children:[Object(o.jsxs)("header",{className:"blog__head",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("p",{className:"blog__date",children:"".concat(s,"@waWeEat")})]}),Object(o.jsx)("div",{className:"blog__container",children:Object(o.jsxs)("div",{className:"blog__wrapper",children:[Object(o.jsx)("img",{src:n(13)("./".concat(a)).default,alt:"Food",className:"blog__img"}),Object(o.jsx)("p",{className:"blog__desc",children:c})]})})]})})},D=n(22),W=n(23),I=n(26),P=n(25),z=function(e){Object(I.a)(n,e);var t=Object(P.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(c.Component),L=Object(f.g)(z);var T=function(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)(L,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(f.c,{children:[Object(o.jsx)(f.a,{path:"/",exact:!0,component:N}),Object(o.jsx)(f.a,{path:"/food",component:S}),Object(o.jsx)(f.a,{path:"/sign-up",component:E}),Object(o.jsx)(f.a,{path:"/blog",component:F})]})]})})};s.a.render(Object(o.jsx)(T,{}),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.a9df0d2e.chunk.js.map