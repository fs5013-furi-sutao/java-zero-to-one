(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),i=n("lSNA"),c=n("8OQS");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),p=n("7ljp").mdx,f=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=c(t,["scope","children"]),a=f(e),s=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:p},a),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,e]);return l.createElement(s,u({},i))}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},jBaD:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return j}));var r=n("q1tI"),o=n.n(r),i=n("A2+M"),c=n("tnhK"),a=n("dcqB"),u=n("Wbzz"),l=n("NIcq"),p=n("wTIg");var f=Object(p.a)("section",{target:"e1jikabl0"})({name:"1rfih1g",styles:"display:flex;justify-content:space-between;align-items:center;padding:48px 0;width:100%;@media (max-width:780px){flex-direction:column;}"}),s=Object(p.a)("div",{target:"e1jikabl1"})("transition:all 200ms;",(function(t){return!t.isLeft&&"margin-left: auto;"})," a{display:flex;text-decoration:none;justify-content:center;align-items:center;width:100%;height:100%;svg{width:25px;height:25px;color:",(function(t){return t.theme.colors.text}),";",(function(t){return t.isLeft?"margin-right: 16px":"margin-left: 16px"}),";}p{letter-spacing:0.142em;text-transform:uppercase;font-size:12px;margin:0;color:",(function(t){return t.theme.colors.text}),";}h3{color:",(function(t){return t.theme.colors.text}),";border:none;margin:0;padding:0;font-size:16px;}}&:hover{opacity:0.8;a svg{opacity:0.8;}}@media (max-width:780px){width:100%;",(function(t){return t.isLeft&&"margin-bottom: 16px"}),";a{justify-content:",(function(t){return t.isLeft?"flex-start":"flex-end"}),";}}"),d=n("qKvR");function b(t){var e=t.prev,n=t.next;return Object(d.d)(f,null,e&&Object(d.d)(s,{isLeft:!0},Object(d.d)(u.Link,{to:e.link},Object(d.d)(l.b,null),Object(d.d)("div",null,Object(d.d)("p",null,"Prev"),Object(d.d)("h3",null,e.label)))),n&&Object(d.d)(s,null,Object(d.d)(u.Link,{to:n.link},Object(d.d)("div",null,Object(d.d)("p",null,"Next"),Object(d.d)("h3",null,n.label)),Object(d.d)(l.c,null))))}b.defaultProps={prev:null,next:null};var x=n("wLTh");function O(t){var e=t.githubEditUrl,n=Object(x.b)();return e?Object(d.d)("a",{href:e,target:"_blank",rel:"noopener noreferrer",css:Object(d.c)("display:flex;align-items:center;text-decoration:none;margin-top:48px;color:",n.colors.text,";opacity:0.8;font-size:14px;font-weight:normal;")},Object(d.d)(l.a,{style:{marginRight:"5px"}}),"Edit this page on GitHub"):null}function g(t){var e=t.mdx,n=t.pageContext,r=n.prev,u=n.next,l=n.githubEditUrl,p=e.frontmatter,f=p.title,s=p.description,x=p.image,g=p.disableTableOfContents,j=e.headings,m=e.body,h=e.fields.slug;return Object(d.d)(o.a.Fragment,null,Object(d.d)(a.a,{title:f,description:s,slug:h,image:x}),Object(d.d)(c.a,{disableTableOfContents:g,title:f,headings:j},Object(d.d)(i.MDXRenderer,null,m),Object(d.d)(O,{githubEditUrl:l}),Object(d.d)(b,{prev:r,next:u})))}O.defaultProps={githubEditUrl:null};e.default=function(t){var e=t.data.mdx,n=t.pageContext;return Object(d.d)(g,{mdx:e,pageContext:n})};var j="1993335579"},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function i(e,n,c){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i}}]);
//# sourceMappingURL=component---node-modules-rocketseat-gatsby-theme-docs-core-src-templates-docs-query-js-e76ada3d98806d2e753d.js.map