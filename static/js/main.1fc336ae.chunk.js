(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(0),s=c.n(n),a=c(28),r=c.n(a),d=(c(59),c(8));function l(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var t=Object(n.useState)(e),c=Object(d.a)(t,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){function t(){s(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}c(60),c(61);var o=c(12),j=c.p+"static/media/me.d35b9d00.jpg";var h=function(e){var t=e.scroll,c=e.size,s=1-Math.pow(t/c.height*1.2-1.4,2),a=100*(t/c.height-1.1),r=100-a,d=100*(c.height/t-1),l=500/c.width*100*(c.height/t),o=-t/c.height*50+150,h={fade:{opacity:s},reveal:{display:a<-100?"none":"block",maxWidth:a>40?a+"%":"40%",transform:c.width>700?"translateX(-".concat(d,"px)"):"translateY(".concat(d+40,"px)")},slideOut:{width:a>40?r+"%":"60%",marginLeft:a},slide:{marginLeft:1.7*a,opacity:.8*s},slide1:{marginLeft:.2*a},slide2:{marginLeft:.6*a},cardWidth:{transform:t/c.height>1.7?"rotateX(70deg) rotateZ(-60deg) translate3d(-120px, ".concat(l,"%, 70px) !important"):"rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 400px, 70px) !important",maxWidth:a>40?"".concat(o,"%"):"40%",minWidth:"400px"}},b=Object(n.useRef)();return Object(i.jsxs)("div",{id:"About",children:[Object(i.jsx)("div",{id:"foreground"}),Object(i.jsxs)("div",{className:"pageWrap",children:[Object(i.jsxs)("div",{className:"cardContainer",style:h.reveal,children:[Object(i.jsx)("div",{className:"card",style:h.cardWidth,ref:b,children:Object(i.jsxs)("div",{className:"cardFace",children:[Object(i.jsxs)("div",{className:"cardFront",style:{position:a<40?c.width>700&&"absolute":"relative"},children:[Object(i.jsx)("img",{id:"profilePic",src:j}),Object(i.jsx)("div",{className:"picOverlay",style:h.reveal})]}),Object(i.jsx)("div",{className:"cardBack",style:{position:a<40?c.width>700&&"absolute":"relative"},children:Object(i.jsx)("h1",{children:" hello"})})]})}),Object(i.jsx)("div",{id:"cardOverlay"})]}),s>0?Object(i.jsxs)("div",{className:"content",children:[Object(i.jsxs)("div",{className:"headerC container",children:[Object(i.jsx)("h1",{className:"header container",id:"freelance",style:h.fade,children:"Freelance Web Developer."}),c.width<700?Object(i.jsx)("h4",{className:"subHeader",style:h.fade,children:"Where creativity meets creation."}):Object(i.jsx)("div",{})]}),c.width>700?Object(i.jsx)("div",{className:"slideContent",style:h.slideOut,children:Object(i.jsxs)("div",{className:"slideWrap",style:h.slide,children:[Object(i.jsx)("h2",{className:"subHeader",style:h.slide1,children:Object(i.jsx)("span",{children:"Where creativity meets creation."})}),Object(i.jsx)("h3",{className:"title",style:h.slide2,children:"Specializing in:"}),Object(i.jsxs)("div",{className:"buttonC container",style:h.slide2,children:[Object(i.jsx)("div",{className:"button",onMouseOver:function(){a<40&&(b.current.style.transform="rotateX(0deg) rotateY(180deg) rotateZ(0deg) translate3d(0px, 0px, 0px)")},onMouseOut:function(){b.current.style.transform="rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 400px, 70px)"},children:Object(i.jsx)("div",{children:"HTML"})}),Object(i.jsx)("div",{className:"button"}),Object(i.jsx)("div",{className:"button"}),Object(i.jsx)("div",{className:"button"})]})]})}):Object(i.jsx)("div",{}),Object(i.jsx)("div",{className:"skills"})]}):Object(i.jsx)("div",{className:"headerC center",children:t>c.height?Object(i.jsx)("h1",{className:"header",children:"Let's stay in touch."}):Object(i.jsx)("div",{})})]})]})},b=c(10);c(62);var u=function(e){return Object(i.jsx)("main",Object(b.a)({className:"wrapper"},e))},O=(c(48),c(20),c(2),c(15)),x=c(83),v=c(40),f=(c(39),c(89),c(87),c(90),c(88),c(49)),m=c.p+"static/media/venus.3df63535.gltf";c(63);function p(e){var t=e.size,c=Object(O.f)(f.a,m),s=Object(x.c)((function(){return{args:.01,mass:1}})),a=Object(d.a)(s,2),r=a[0],l=(a[1],Object(n.useState)(!1)),o=Object(d.a)(l,2),j=o[0],h=(o[1],Object(n.useState)(!1)),b=Object(d.a)(h,2),u=b[0],p=b[1],g=Object(v.b)({scale:u?[1.5,1.5,1.5]:[1,1,1],color:j?"red":"white"});return Object(O.e)((function(e){r.current.rotation.set(0,8.5+e.mouse.x*e.viewport.width/50,0),r.current.rotation.y+=.001,r.current.position.set(t.width>600?18:0,-73,-50)})),Object(i.jsx)("group",{children:Object(i.jsx)(v.a.mesh,{ref:r,onClick:function(){return p(!u)},scale:g.scale,geometry:c.nodes["venus_mmGroup0-reduced1008"].geometry,children:Object(i.jsx)(v.a.meshStandardMaterial,{attach:"material",color:"#fdfdfd"})})})}var g=function(e){var t=e.size,c=e.scroll,n=(e.blurValue,{height:t.height,transform:"translate3d(0, ".concat(2*c,"px, 0)")});return Object(i.jsx)("div",{id:"scene",style:n,children:Object(i.jsxs)(O.a,{concurrent:!0,shadowMap:!0,camera:{position:[0,0,3],fov:70},children:[Object(i.jsx)("ambientLight",{intensity:.15}),Object(i.jsx)("pointLight",{position:[3,-4,-25],intensity:t.width>600?.4:.05}),Object(i.jsx)(x.a,{children:Object(i.jsx)(p,{size:t.width})})]})})};c(69);c(70);var w=function(e){var t=e.size,c=e.scroll,s=Object(o.f)().scrollYProgress,a=Object(n.useState)(0),r=Object(d.a)(a,2),l=r[0],j=r[1];s.onChange((function(e){return j(e)}));var h=10*l+"px",b=-6*l;return Math.pow(b,3),Object(i.jsxs)("div",{id:"landing",children:[Object(i.jsx)("div",{className:"center",children:Object(i.jsx)("div",{className:"outline"})}),Object(i.jsx)(g,{blurValue:h,size:t,scroll:c}),Object(i.jsx)("div",{className:"topHeader",children:Object(i.jsx)("h1",{id:"topHead",children:"aaron diggdon"})}),Object(i.jsx)("div",{className:"mainHeader",style:{fontSize:t.width>700?"50px":"30px"}})]})},y=(c(71),{open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*e+200,"px at 110% -10%)"),transition:{type:"spring",stiffness:25,restDelta:1}}},closed:{clipPath:"circle(30px at 110vw -10%)",transition:{delay:.2,type:"spring",stiffness:300,damping:40}}}),N=function(e){return Object(i.jsx)(o.c.path,Object(b.a)({id:"path",fill:"white",strokeWidth:"1",stroke:"white"},e))};var L=function(e){var t=e.size,c=Object(o.d)(!1,!0),s=Object(d.a)(c,2),a=s[0],r=s[1],l=Object(n.useRef)(null);return Object(i.jsxs)("div",{id:"nav",children:[Object(i.jsx)(o.c.nav,{initial:!1,animate:a?"open":"closed",ref:l,children:Object(i.jsx)("div",{className:"leftNav",children:Object(i.jsx)("button",{className:"navButton",onClick:function(){return r()},style:{top:.05*t.height+"px"},children:Object(i.jsxs)("svg",{width:"70",height:"70",viewBox:"0 0 50 50",children:[Object(i.jsx)(N,{variants:{closed:{d:"M 2 2.5 L 25 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),Object(i.jsx)(N,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),Object(i.jsx)(N,{variants:{closed:{d:"M 2 16.346 L 15 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})})})}),Object(i.jsx)(o.c.nav,{initial:!1,animate:a?"open":"closed",ref:l,children:Object(i.jsx)(o.c.div,{id:"navBackground",style:{height:t.height},variants:y})})]})};c(72),c(25),c(14),c(9),c(73);c(74),c.p,c.p;c(42);window.webkitRequestAnimationFrame||window.requestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;function M(){var e=0,t=0,c=Object(n.useState)(),i=Object(d.a)(c,2),s=i[0],a=i[1];return Object(n.useEffect)((function(){function c(){e=window.scrollY,t+=.1*(e-t),Math.round(100*t)/100,a(e)}return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),s}c(80);var z=function(e){return Object(i.jsx)("div",{id:"banner",children:Object(i.jsxs)("div",{className:"bannerC",children:[Object(i.jsx)("div",{className:"vertLine"}),Object(i.jsx)("h1",{className:"bannerTitle",children:"WELCOME"}),Object(i.jsx)("p",{className:"bannerTitle",children:"My name is Aaron. I'm a Freelance Web Developer"})]})})};var W=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=(t[0],t[1],l()),s=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)();c.width,Object(n.useEffect)((function(){document.body.style.height="".concat(a.current.clientHeight,"px")}),[c.height]);var j=M();return Object(n.useEffect)((function(){var e=r.current.clientHeight;r.current.style.transform="translate3d(0, -".concat(j,"px, 0)"),j>e/2&&(r.current.style.transform="translate3d(0, -".concat(e/2,"px, 0)")),console.log(j>e/2)}),[j]),Object(i.jsx)("div",{ref:s,className:"App",children:Object(i.jsxs)(u,{children:[Object(i.jsxs)("div",{ref:a,className:"scroll",children:[Object(i.jsxs)("div",{id:"scrollable",ref:r,children:[Object(i.jsx)(w,{size:c,scroll:j}),Object(i.jsx)(z,{})]}),Object(i.jsx)("div",{className:"nothing"}),Object(i.jsx)("div",{id:"fixed",ref:o,children:Object(i.jsx)(h,{size:c,scroll:j})})]}),Object(i.jsx)(L,{size:c})]})})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1fc336ae.chunk.js.map