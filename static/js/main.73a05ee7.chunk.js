(this.webpackJsonpolemdb=this.webpackJsonpolemdb||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(70),n=c.n(a),r=c(27),i=c(4),l=c(33),o=c.n(l),j=c(46),h=c(21),b=(c(78),c(1));var d=function(e){return Object(b.jsx)("div",{className:"zoom",children:Object(b.jsx)(r.b,{to:"/"+e.id,style:{textDecoration:"none",color:"black"},children:Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card shadow-sm",style:{width:"15rem"},children:[Object(b.jsx)("img",{width:"150",height:"300",src:e.img,className:"card-img-top",alt:e.title}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("h5",{className:"card-title",children:e.title})})]})})})})};c(85);var m=function(e){return Object(b.jsx)("div",{className:"album py-5 ",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:e.children})})})};var u=function(e){return Object(b.jsx)(m,{children:e.moviez&&e.moviez.map((function(e){return Object(b.jsx)(d,{id:e.imdbID,title:e.Title,img:"N/A"===e.Poster?"https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg":e.Poster},e.imdbID)}))})};c(86);var v=function(e){var t="";return Object(b.jsx)("form",{children:Object(b.jsx)("div",{className:"input-group",children:Object(b.jsx)("input",{type:"text",onChange:function(c){t=c.target.value,e.searchData(t)},className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"})})})};var x=function(){var e=Object(s.useState)("Iron Man"),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(h.a)(n,2),i=r[0],l=r[1],d=function(){var e=Object(j.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?apikey=56bb3b76&s="+c);case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.t0=l,e.next=9,s.Search;case 9:e.t1=e.sent,(0,e.t0)(e.t1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){d()}),[c]),Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{searchData:function(e){a(e)}}),Object(b.jsx)(u,{moviez:i})]})},O=(c(87),c(88),function(e){var t=e.movie,c=t.Poster,s=!1;return t.Ratings&&(s=t.Ratings[0].Value),Object(b.jsx)("div",{id:"root",className:"container",children:Object(b.jsxs)("div",{className:"row mt-5",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("img",{width:"N/A"===c?"300":"",height:"N/A"===c?"400":"",src:"N/A"===c?"https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg":c,alt:t.Title}),Object(b.jsxs)("h1",{className:"mt-4",children:[" ",Object(b.jsx)("i",{className:"bi bi-star-fill",children:" "}),s&&s]})]}),Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)("h2",{children:t.Title}),Object(b.jsxs)("h3",{children:["Directed by : ",t.Director]}),Object(b.jsxs)("h4",{className:"mt-4",children:[t.Year," ",Object(b.jsx)("span",{className:"space"})," ",t.Runtime]}),Object(b.jsx)("h4",{children:t.Genre}),Object(b.jsx)("div",{className:"containter",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("p",{className:"mt-4 col-8",children:t.Plot})})})]})]})})}),p=function(e){var t=Object(i.f)().id,c=Object(s.useState)({}),a=Object(h.a)(c,2),n=a[0],r=a[1];Object(s.useEffect)((function(){l(t)}),[]);var l=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?apikey=56bb3b76&i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,r(s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(O,{movie:n})},f=(c(89),c(102),c(105),c(103),function(e){return Object(b.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(b.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("span",{className:"navbar-brand mb-0 h1",children:Object(b.jsxs)("strong",{children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-film me-2",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"})}),"OLEMDB"]})})})})})});c(104);n.a.render(Object(b.jsxs)(r.a,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",exact:!0,children:Object(b.jsx)(x,{})}),Object(b.jsx)(i.a,{path:"/:id",exact:!0,children:Object(b.jsx)(p,{})})]})]}),document.getElementById("root"))},78:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.73a05ee7.chunk.js.map