(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1044:function(t,e,n){"use strict";n.r(e);n(535),n(573),n(710),n(719),n(918);var r=n(0),a=n(66),i=n.n(a);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(t){var e=t.active,n=o(r.useState(localStorage.getItem("FUSION_STORYBOOK_AUTH_TOKEN")||""),2),a=n[0],i=n[1];return e?r.createElement("div",{style:{margin:24}},r.createElement("button",{onClick:function(){window.authContainer.login("5a842df8-3238-415d-b168-9f16a6a6031b")}},"Sign in"),r.createElement("p",null,"Or paste auth token (without bearer)"),r.createElement("textarea",{onChange:function(t){i(t.target.value),window.authContainer.setAuthToken(t.target.value)},placeholder:"JWT Token",style:{width:"calc(100% - 48px)",height:"calc(100% - 80px)",borderRadius:4,padding:8,boxSizing:"border-box"}},a)):null};i.a.register("FUSION",function(t){i.a.addPanel("FUSION/authtoken",{title:"Auth",render:function(t){var e=t.active,n=t.key;return r.createElement(u,{key:n,active:e})}})})},431:function(t,e,n){n(432),n(1044),t.exports=n(922)}},[[431,1,2]]]);