(this.webpackJsonpresume_starter_pack=this.webpackJsonpresume_starter_pack||[]).push([[0],{167:function(e,s,c){},168:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c(4),n=c(87),i=c.n(n),l=(c(95),c(17)),r=c(88),j=c.n(r),o=function(e){var s=e.data;if(s)var c=s.name,a=s.occupation,n=s.description,i=s.address.city,l=s.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)}));return Object(t.jsxs)("header",{id:"home",children:[Object(t.jsxs)("nav",{id:"nav-wrap",children:[Object(t.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(t.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(t.jsxs)("ul",{id:"nav",className:"nav",children:[Object(t.jsx)("li",{className:"current",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(t.jsx)("div",{className:"row banner",children:Object(t.jsxs)("div",{className:"banner-text",children:[Object(t.jsx)("h1",{className:"responsive-headline",children:Object(t.jsx)(j.a,{typing:.5,children:c?"I'm ".concat(c,"."):null})}),Object(t.jsxs)("h3",{children:["I'm a ",Object(t.jsx)("span",{children:i})," based ",Object(t.jsx)("span",{children:a}),". ",n,"."]}),Object(t.jsx)("hr",{}),Object(t.jsx)("ul",{className:"social",children:l})]})}),Object(t.jsx)("p",{className:"scrolldown",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(t.jsx)("i",{className:"icon-down-circle"})})})]})},d=function(e){var s=e.data;if(s)var c=s.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)}));return Object(t.jsx)("footer",{children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"twelve columns",children:[Object(t.jsx)("ul",{className:"social-links",children:c}),Object(t.jsx)("ul",{className:"copyright",children:Object(t.jsxs)("li",{children:["Made by"," ",Object(t.jsx)("a",{title:"Tim Baker",href:"https://github.com/tbakerx/Tim-Baker-Personal-Website",children:"TIM BAKER"})]})})]}),Object(t.jsx)("div",{id:"go-top",children:Object(t.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(t.jsx)("i",{className:"icon-up-open"})})})]})})},h=function(e){var s=e.data;if(s)var c=s.name,a="images/"+s.image,n=s.bio,i=s.address.street,l=s.address.city,r=s.address.state,j=s.address.zip,o=s.phone,d=s.email,h=s.resumedownload;return Object(t.jsx)("section",{id:"about",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"three columns",children:Object(t.jsx)("img",{className:"profile-pic",src:a,alt:"Charles' Profile Pic"})}),Object(t.jsxs)("div",{className:"nine columns main-col",children:[Object(t.jsx)("h2",{children:"About Me"}),Object(t.jsx)("p",{children:n}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"columns contact-details",children:[Object(t.jsx)("h2",{children:"Contact Details"}),Object(t.jsxs)("p",{className:"address",children:[Object(t.jsx)("span",{children:c}),Object(t.jsx)("br",{}),Object(t.jsxs)("span",{children:[i,Object(t.jsx)("br",{}),l," ",r,", ",j]}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:o}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:d})]})]}),Object(t.jsx)("div",{className:"columns download",children:Object(t.jsx)("p",{children:Object(t.jsxs)("a",{href:h,className:"button",children:[Object(t.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})},b=function(e){var s=e.data;if(s)var c=s.skillmessage,a=s.education.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.school}),Object(t.jsxs)("p",{className:"info",children:[e.degree," ",Object(t.jsx)("span",{children:"\u2022"}),Object(t.jsx)("em",{className:"date",children:e.graduated})]}),Object(t.jsx)("p",{children:e.description})]},e.school)})),n=s.work.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.company}),Object(t.jsxs)("p",{className:"info",children:[e.title,Object(t.jsx)("span",{children:"\u2022"})," ",Object(t.jsx)("em",{className:"date",children:e.years})]}),Object(t.jsx)("p",{children:e.description})]},e.company)})),i=s.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{style:{width:e.level},className:s}),Object(t.jsx)("em",{children:e.name})]},e.name)}));return Object(t.jsxs)("section",{id:"resume",children:[Object(t.jsxs)("div",{className:"row education",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Education"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:Object(t.jsx)("div",{className:"row item",children:Object(t.jsx)("div",{className:"twelve columns",children:a})})})]}),Object(t.jsxs)("div",{className:"row work",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Work"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:n})]}),Object(t.jsxs)("div",{className:"row skill",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Skills"})})}),Object(t.jsxs)("div",{className:"nine columns main-col",children:[Object(t.jsx)("p",{children:c}),Object(t.jsx)("div",{className:"bars",children:Object(t.jsx)("ul",{className:"skills",children:i})})]})]})]})},m=c(89),x=c.n(m),O=function(e){var s=e.data,c=Object(a.useState)(""),n=Object(l.a)(c,2),i=n[0],r=n[1],j=Object(a.useState)(""),o=Object(l.a)(j,2),d=o[0],h=o[1],b=Object(a.useState)(""),m=Object(l.a)(b,2),O=m[0],u=m[1],v=Object(a.useState)(""),f=Object(l.a)(v,2),p=f[0],N=f[1];if(s)var w=s.name,g=s.address.street,k=s.address.city,y=s.address.state,S=s.address.zip,C=s.phone,E=s.email,W=s.contactmessage;return Object(t.jsxs)("section",{id:"contact",children:[Object(t.jsxs)("div",{className:"row section-head",children:[Object(t.jsx)("div",{className:"two columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Get In Touch."})})}),Object(t.jsx)("div",{className:"ten columns",children:Object(t.jsx)("p",{className:"lead",children:W})})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"eight columns",children:[Object(t.jsx)("form",{onSubmit:function(e){e.preventDefault(),x.a.sendForm("service_hdwfdne","template_o1azqpf",e.target,"user_mwMvWxsbCwH7eDldtVkhc").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),window.alert("Email sent successfully"),window.location.reload()},children:Object(t.jsxs)("fieldset",{children:[Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:i,size:"35",id:"contactName",name:"name",onChange:function(e){return r(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:d,size:"35",id:"contactEmail",name:"email",onChange:function(e){return h(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:O,size:"35",id:"contactSubject",name:"subject",onChange:function(e){return u(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("textarea",{cols:"50",rows:"15",value:p,onChange:function(e){return N(e.target.value)},id:"contactMessage",name:"message"})]}),Object(t.jsx)("div",{children:Object(t.jsx)("button",{type:"submit",className:"submit",children:"Submit"})})]})}),Object(t.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(t.jsxs)("div",{id:"message-success",children:[Object(t.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(t.jsx)("br",{})]})]}),Object(t.jsx)("aside",{className:"four columns footer-widgets",children:Object(t.jsxs)("div",{className:"widget widget_contact",children:[Object(t.jsx)("h4",{children:"Address and Phone"}),Object(t.jsxs)("p",{className:"address",children:[w,Object(t.jsx)("br",{}),E,Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),g," ",Object(t.jsx)("br",{}),k,", ",y," ",S,Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:C})]})]})})]})]})},u=function(e){var s=e.data;if(s)var c=s.testimonials.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsxs)("blockquote",{children:[Object(t.jsx)("p",{children:e.text}),Object(t.jsx)("cite",{children:e.user})]})},e.user)}));return Object(t.jsx)("section",{id:"testimonials",children:Object(t.jsx)("div",{className:"text-container",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"two columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Client Testimonials"})})}),Object(t.jsx)("div",{className:"ten columns flex-container",children:Object(t.jsx)("ul",{className:"slides",children:c})})]})})})},v=function(e){var s=e.data;if(s)var c=s.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(t.jsx)("div",{className:"columns portfolio-item",children:Object(t.jsx)("div",{className:"item-wrap",children:Object(t.jsxs)("a",{href:e.url,title:e.title,children:[Object(t.jsx)("img",{alt:e.title,src:s}),Object(t.jsx)("div",{className:"overlay",children:Object(t.jsxs)("div",{className:"portfolio-item-meta",children:[Object(t.jsx)("h5",{children:e.title}),Object(t.jsx)("p",{children:e.category})]})}),Object(t.jsx)("div",{className:"link-icon",children:Object(t.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(t.jsx)("section",{id:"portfolio",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"twelve columns collapsed",children:[Object(t.jsx)("h1",{children:"Check Out Some of My Works."}),Object(t.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:c})]})})})},f=(c(167),function(){var e=Object(a.useState)({}),s=Object(l.a)(e,2),c=s[0],n=s[1];return Object(a.useEffect)((function(){fetch("./resumeData.json").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(o,{data:c.main}),Object(t.jsx)(h,{data:c.main}),Object(t.jsx)(b,{data:c.resume}),Object(t.jsx)(v,{data:c.portfolio}),Object(t.jsx)(u,{data:c.testimonials}),Object(t.jsx)(O,{data:c.main}),Object(t.jsx)(d,{data:c.main})]})}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(t.jsx)(f,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");p?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()},95:function(e,s,c){}},[[168,1,2]]]);
//# sourceMappingURL=main.d8175a5f.chunk.js.map