(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{13:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(9),n=c(3),o=(c(13),"https://xmemeback.herokuapp.com"),s=c(10),i=c(2),d=c(11),l=c(0),m=function(e){var t=e.meme,c=t?t.name:"Inception Name",r=t?t.caption:"Inception Caption",n=t?t.url:"Inception URL";return Object(l.jsx)("div",{id:"bd",className:"card text-white  border border-info h-200 w-100",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("div",{className:"rounded border border-success p-2 bg-dark",children:Object(l.jsx)("img",{id:"pic",src:n,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"})}),Object(l.jsx)("p",{id:"cp",children:r}),Object(l.jsx)("div",{id:"title",children:c}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/memes/update/".concat(t._id),id:"edit",className:"btn btn-md btn-dark mb-3 ",children:"Edit"})]})})},j=function(e){var t=e.title,c=void 0===t?"X Meme":t,a=e.description,n=void 0===a?"New kind of Media":a,j=Object(r.useState)([]),b=Object(d.a)(j,2),u=b[0],h=b[1],O=Object(r.useState)({name:"",caption:"",url:"",loading:!1,error:"",createdMeme:"",getaRedirect:!1,formData:""}),f=Object(d.a)(O,2),p=f[0],x=f[1],g=Object(r.useState)(!1),v=Object(d.a)(g,2),N=(v[0],v[1]),y=p.name,w=p.caption,F=p.url,k=(p.loading,p.error,p.createdMeme,p.getaRedirect,p.formData),I=function(){fetch("".concat(o,"/memes"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?N(e.error):h(e)}))};Object(r.useEffect)((function(){x(Object(i.a)(Object(i.a)({},p),{},{formData:new FormData})),I()}),[]);var M=function(e){var t;e.preventDefault(),(t=k,fetch("".concat(o,"/memes"),{method:"POST",headers:{Accept:"application/json"},body:t}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?x(Object(i.a)(Object(i.a)({},p),{},{error:e.error})):x(Object(i.a)(Object(i.a)({},p),{},{name:"",caption:"",url:"",createdMeme:e.name}))}))},C=function(e){return function(t){var c=t.target.value;k.set(e,c),x(Object(i.a)(Object(i.a)({},p),{},Object(s.a)({},e,c)))}};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"container-fluid m-0 p-0",children:Object(l.jsxs)("div",{className:"jumbotron bg-dark text-white text-center",children:[Object(l.jsx)("h2",{className:"display-3",children:c}),Object(l.jsx)("p",{className:"lead",children:n})]})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"text-white text-center",children:" Post Your Own Meme"}),Object(l.jsx)("div",{className:"row d-flex ",children:Object(l.jsxs)("div",{className:"col-md-9 offset-md-2",children:[Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("h4",{className:" font-weight-bold",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:C("name"),value:y,autoFocus:!0,required:!0,placeholder:"For ex : Inception Meme"})]}),Object(l.jsxs)("div",{className:"form-group form-group-lg",children:[Object(l.jsx)("h4",{className:"font-weight-bold",children:"Caption"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:C("caption"),value:w,autoFocus:!0,required:!0,placeholder:"For ex : This is my first Meme"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("h4",{className:" font-weight-bold",children:"URL of Image"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:C("url"),value:F,autoFocus:!0,required:!0,placeholder:"For ex : Put your image here"})]}),Object(l.jsx)("button",{onClick:M,className:"my-3 btn btn-outline-info btn-dark font-weight-bold",children:"Push it"})]}),void 0]})})]}),Object(l.jsx)("p",{id:"Rm",className:"text-center",children:"Recent Memes"}),Object(l.jsx)("div",{id:"cards-row",className:"row text-center m-4 ",children:Object(l.jsx)("div",{className:"row ",children:u.map((function(e,t){return Object(l.jsx)("div",{id:"cards",className:"col-12 mb-4",children:Object(l.jsx)(m,{meme:e})},t)}))})})]})};function b(){return console.log("API IS",o),Object(l.jsx)(j,{children:" "})}var u=function(e){var t=e.match,c=Object(r.useState)({name:"",caption:"",url:"",loading:!1,error:"",createdMeme:"",getaRedirect:!1,formData:""}),a=Object(d.a)(c,2),n=a[0],m=a[1],j=n.name,b=n.caption,u=n.url,h=(n.loading,n.error,n.createdMeme,n.getaRedirect,n.formData),O=function(e){(function(e){return fetch("".concat(o,"/memes/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?m(Object(i.a)(Object(i.a)({},n),{},{error:e.error})):m(Object(i.a)(Object(i.a)({},n),{},{name:e.name,caption:e.caption,url:e.url,formData:new FormData}))}))};Object(r.useEffect)((function(){O(t.params.memeId)}),[]);var f=function(e){var c,r;e.preventDefault(),m(Object(i.a)(Object(i.a)({},n),{},{error:"",loading:!0})),(c=t.params.memeId,r=h,fetch("".concat(o,"/memes/").concat(c),{method:"PUT",headers:{Accept:"application/json"},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?m(Object(i.a)(Object(i.a)({},n),{},{error:e.error})):m(Object(i.a)(Object(i.a)({},n),{},{name:"",caption:"",url:""}))}))},p=function(e){return function(t){var c=t.target.value;h.set(e,c),m(Object(i.a)(Object(i.a)({},n),{},Object(s.a)({},e,c)))}};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"container-fluid m-0 p-0",children:Object(l.jsxs)("div",{className:"jumbotron bg-dark text-white text-center",children:[Object(l.jsx)("h2",{className:"display-3",children:"dsd"}),Object(l.jsx)("p",{className:"lead",children:"dasda"})]})}),Object(l.jsx)("div",{className:"row d-flex ",children:Object(l.jsxs)("div",{className:"col-md-9 offset-md-2",children:[Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("h4",{className:" font-weight-bold",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:p("name"),value:j,autoFocus:!0,required:!0,placeholder:"For ex : Inception Meme"})]}),Object(l.jsxs)("div",{className:"form-group form-group-lg",children:[Object(l.jsx)("h4",{className:"font-weight-bold",children:"Caption"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:p("caption"),value:b,autoFocus:!0,required:!0,placeholder:"For ex : This is my first Meme"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("h4",{className:" font-weight-bold",children:"URL of Image"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:p("url"),value:u,autoFocus:!0,required:!0,placeholder:"For ex : Put your image here"})]}),Object(l.jsx)("button",{onClick:f,className:"my-3 btn btn-outline-info btn-dark font-weight-bold",children:"Update"})]}),void 0]})})]})},h=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(n.c,{children:[Object(l.jsx)(n.a,{path:"/",exact:!0,component:b}),Object(l.jsx)(n.a,{path:"/memes/update/:memeId",exact:!0,component:u})]})})},O=c(20);c.n(O).a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2ad2be58.chunk.js.map