(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1056:function(e,t,n){e.exports={checkbox:"Checkbox-module__checkbox___HI9Vi",label:"Checkbox-module__label___3E8fg","is-mobile":"Checkbox-module__is-mobile___frQvN","native-input":"Checkbox-module__native-input___GvkXw","label-text":"Checkbox-module__label-text___fY5lt","is-hidden":"Checkbox-module__is-hidden___26Rqh","is-disabled":"Checkbox-module__is-disabled___WSQKG","is-inline":"Checkbox-module__is-inline___1jo0Z"}},1057:function(e,t,n){"use strict";var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=l},1097:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(0)),a=r(n(2)),o=r(n(4)),u=r(n(1056)),i=r(n(1057));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=o.default.bind(u.default),m={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.node.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},p={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,n=e.defaultChecked,a=e.inputAttrs,o=e.id,u=e.disabled,r=e.isInline,m=e.isLabelHidden,p=e.labelText,v=e.labelTextAttrs,h=e.name,_=e.onBlur,y=e.onChange,x=e.onFocus,O=e.value,k=f(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a);void 0!==t?w.checked=t:w.defaultChecked=n;var g=b(["checkbox",{"is-inline":r},k.className]),j=b(["label",{"is-disabled":u},{"is-mobile":i.default.isConsideredMobileDevice()},v.className]),C=b(["native-input",a.className]),P=b(["label-text",{"is-hidden":m},{"is-mobile":i.default.isConsideredMobileDevice()}]),B=null;return m?(w["aria-label"]=p,B=l.default.createElement("span",d({},v,{className:P}))):B=l.default.createElement("span",d({},v,{className:P}),p),l.default.createElement("div",d({},k,{className:g}),l.default.createElement("label",{htmlFor:o,className:j},l.default.createElement("input",d({},w,{type:"checkbox",id:o,disabled:u,name:h,value:O,onChange:y,onFocus:x,onBlur:_,className:C})),B))};v.propTypes=m,v.defaultProps=p,v.isCheckbox=!0;var h=v;t.default=h},1190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(0)),a=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var i=function(e){var t=u({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M47.2 24.9c1-.5 1-1.3 0-1.8L28 13.5 25 12c-.7-.3-2.9-1.5-3.9-2L1.9.4C.8-.1 0 .4 0 1.5V19c0 1.2.9 2.2 2.1 2.3L30.3 24c1.1.1 1.1.3 0 .4L2.1 27C.9 27.1 0 28 0 29.2v17.2c-.1.6.3 1.2.9 1.3.3 0 .6 0 .9-.2L21.1 38l3-1.5c.7-.3 2.9-1.5 3.9-2l19.2-9.6z"}))};i.displayName="IconSend",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var r=i;t.default=r},2399:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(1190)),u=l(n(1127)),i=function(){return a.default.createElement(u.default,null,a.default.createElement(u.default.Item,{text:"Button A",className:"ButtonA",key:"buttonA"}),a.default.createElement(u.default.Item,{text:"Button B",className:"ButtonB",key:"buttonB"}),a.default.createElement(u.default.Divider,{key:"Divider4"}),a.default.createElement(u.default.Item,{text:"Button 1",className:"Button1",key:"button1"}),a.default.createElement(u.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),a.default.createElement(u.default.Item,{icon:a.default.createElement(o.default,null),text:"Button3",className:"IconOnly",key:"button3",isIconOnly:!0}))};t.default=i}}]);
//# sourceMappingURL=188-e4f103ca63f3374c9891.js.map