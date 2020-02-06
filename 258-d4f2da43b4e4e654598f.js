(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1020:function(e,t,n){"use strict";var r=n(16),i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(164)),l=i(n(19)),d=i(n(29)),u=r(n(0)),o=i(n(2)),c=n(7),s=i(n(4)),f=i(n(167)),p=i(n(360)),m=i(n(166)),b=i(n(1030)),h=i(n(1026));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=s.default.bind(h.default),v={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},I={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},w=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,i=e.error,a=e.help,o=e.hideRequired,s=e.isIncomplete,h=e.isInline,g=e.isInvalid,v=e.isLegendHidden,I=e.legend,w=e.legendAttributes,E=e.monthAttributes,F=(e.maxWidth,e.name),O=e.onBlur,T=e.onChange,A=e.onFocus,q=e.required,D=e.showOptional,j=e.value,x=e.yearAttributes,N=(0,d.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),P=(0,u.useRef)((0,f.default)()),L=y(["date-input-field",{"is-inline":h},N.className]),C=y(["legend",w.className]),R=a?"terra-date-input-field-description-help-".concat(P.current):"",k=g&&i?"terra-date-input-field-description-error-".concat(P.current):"",B="".concat(k," ").concat(R),H=E["aria-describedby"]?E["aria-describedby"]:"",M="".concat(B," ").concat(H),W=t["aria-describedby"]?t["aria-describedby"]:"",S="".concat(B," ").concat(W),J=x["aria-describedby"]?x["aria-describedby"]:"",Z="".concat(B," ").concat(J),G=u.default.createElement("legend",{className:y(["legend-group",{"legend-group-hidden":v}])},u.default.createElement("div",(0,l.default)({},w,{className:C}),g&&u.default.createElement("span",{className:y("error-icon")},u.default.createElement(p.default,null)),q&&(g||!o)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:y("required")},"*"),u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return u.default.createElement(m.default,{text:e})}))),I,q&&!g&&o&&u.default.createElement("span",{className:y("required-hidden")},"*"),D&&!q&&u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return u.default.createElement("span",{className:y("optional")},e)})),!g&&u.default.createElement("span",{className:y("error-icon-hidden")})));return u.default.createElement("fieldset",(0,l.default)({},N,{className:L}),G,u.default.createElement(b.default,{name:F,onChange:T,onBlur:O,onFocus:A,value:j,displayFormat:r,disabled:n,isInvalid:g,isIncomplete:s,required:q,monthAttributes:_({},E,{},{"aria-describedby":M}),dayAttributes:_({},t,{},{"aria-describedby":S}),yearAttributes:_({},x,{},{"aria-describedby":Z})}),g&&i&&u.default.createElement("div",{id:k,className:y("error-text")},i),a&&u.default.createElement("div",{id:R,className:y("help-text")},a))};w.propTypes=v,w.defaultProps=I;var E=w;t.default=E},1026:function(e,t,n){e.exports={"date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}},2428:function(e,t,n){"use strict";var r=n(16),i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(94)),l=r(n(0)),d=i(n(1020)),u=function(){var e=(0,l.useState)("1999-03-10"),t=(0,a.default)(e,2),n=t[0],r=t[1],i=(0,l.useState)(!1),u=(0,a.default)(i,2),o=u[0],c=u[1];return l.default.createElement("div",null,l.default.createElement(d.default,{legend:"Legend text",name:"date-input",value:n,onChange:function(e,t){return r(t)},required:!0,error:"Error message",help:"Help message",isInvalid:o}),l.default.createElement("p",null,"DateInputField Value: ".concat(n)),l.default.createElement("button",{type:"button",onClick:function(){return c((function(e){return!e}))}},"Toggle isInvalid"))};t.default=u},355:function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function d(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var u,o=[],c=!1,s=-1;function f(){c&&u&&(c=!1,u.length?o=u.concat(o):s=-1,o.length&&p())}function p(){if(!c){var e=d(f);c=!0;for(var t=o.length;t;){for(u=o,o=[];++s<t;)u&&u[s].run();s=-1,t=o.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new m(e,t)),1!==o.length||c||d(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);
//# sourceMappingURL=258-d4f2da43b4e4e654598f.js.map