(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1013:function(e,t,o){e.exports={wrapper:"HookshotTestDocCommon-module__wrapper___3BMgv",content:"HookshotTestDocCommon-module__content___fflPT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___1aFCO","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___3RlRF","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___327XX","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___3H5Td","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___3gyZo","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___3RWca","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___2Esx9","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___229Cs","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___25o4P","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___2pzs9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___35g7S","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___2Esnl","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___3qD94","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___21Zu3","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1pxMJ","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___2f8RX","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___1-MFD","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___owTPo","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___2LMwV","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___1hmwI"}},1024:function(e,t,o){"use strict";var n=o(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(o(0)),s=n(o(4)),a=n(o(165)),r=n(o(1013)),u=s.default.bind(r.default),h=function(e){return l.default.createElement(a.default.Content,e,l.default.createElement("div",{className:u("hookshot-content-wrapper")},"Hookshot"))};t.default=h},1027:function(e,t,o){"use strict";var n=o(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(o(19)),s=n(o(29)),a=n(o(21)),r=n(o(23)),u=n(o(24)),h=n(o(25)),d=n(o(28)),c=n(o(26)),i=n(o(0)),m=n(o(4)),p=n(o(2)),f=n(o(165)),_=n(o(1024)),k=n(o(1013)),C=m.default.bind(k.default),v={hookshotContentProps:p.default.any,id:p.default.string,isOpen:p.default.bool,includeSvgs:p.default.bool,contentAttachment:p.default.string,targetAttachment:p.default.string,type:p.default.string,attachmentMargin:p.default.number},g=function(e){return"middle start"===e?{vertical:"middle",horizontal:"start"}:"middle end"===e?{vertical:"middle",horizontal:"end"}:"middle center"===e?{vertical:"middle",horizontal:"center"}:"top start"===e?{vertical:"top",horizontal:"start"}:"top end"===e?{vertical:"top",horizontal:"end"}:"top center"===e?{vertical:"top",horizontal:"center"}:"bottom start"===e?{vertical:"bottom",horizontal:"start"}:"bottom end"===e?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},E=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,u.default)(this,(0,h.default)(t).call(this,e))).triggerHookshot=o.triggerHookshot.bind((0,d.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,d.default)(o)),o.state={open:e.isOpen},o}return(0,c.default)(t,e),(0,r.default)(t,[{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,t=e.hookshotContentProps,o=e.id,n=(e.isOpen,e.contentAttachment),a=e.targetAttachment,r=e.attachmentMargin,u=e.includeSvgs,h=e.type,d=(0,s.default)(e,["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"]),c=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:C(["wrapper","hookshot-wrapper-".concat(h)])},i.default.createElement(f.default,(0,l.default)({id:o,contentAttachment:g(n),targetAttachment:g(a),attachmentMargin:r,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},d),i.default.createElement(_.default,{id:"".concat(o,"-content"),onEsc:t.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:t.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:t.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:C(["content","hookshot-".concat(h)]),onClick:this.triggerHookshot},"Trigger Hookshot"),u&&c)}}]),t}(i.default.Component);E.propTypes=v,E.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var w=E;t.default=w},2496:function(e,t,o){"use strict";var n=o(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(o(0)),s=n(o(1027)),a=function(){return l.default.createElement(s.default,{id:"NoCloseBehavior",type:"primary",hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!1,closeOnResize:!1}})},r=function(){return l.default.createElement(s.default,{id:"EscBehavior",type:"primary",hookshotContentProps:{closeOnEsc:!0,closeOnOutsideClick:!1,closeOnResize:!1}})},u=function(){return l.default.createElement(s.default,{id:"OutsideClickBehavior",type:"primary",hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!0,closeOnResize:!1}})},h=function(){return l.default.createElement(s.default,{id:"OutsideClickBehaviorWithSvgs",type:"primary",includeSvgs:!0,hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!0,closeOnResize:!1}})},d=function(){return l.default.createElement(s.default,{id:"ResizeBehavior",type:"primary",hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!1,closeOnResize:!0}})},c=function(){return l.default.createElement(s.default,{id:"AllBehavior",type:"primary",hookshotContentProps:{closeOnEsc:!0,closeOnOutsideClick:!0,closeOnResize:!0}})},i=function(){return l.default.createElement("div",null,l.default.createElement("p",null,"All Close Behavior"),l.default.createElement(c,null),l.default.createElement("p",null,"Close on ESC Behavior"),l.default.createElement(r,null),l.default.createElement("p",null,"Close on Outside Click Behavior"),l.default.createElement(u,null),l.default.createElement("p",null,"Close on Outside Click Behavior With SVGs"),l.default.createElement(h,null),l.default.createElement("p",null,"Close on Resize Behavior"),l.default.createElement(d,null),l.default.createElement("p",null,"No Close Behavior - Once opened, content stays on the screen when scrolling occurs."),l.default.createElement(a,null),l.default.createElement("button",{type:"button",id:"scroll-bounds"},"Scroll Button"))};t.default=i}}]);
//# sourceMappingURL=266-2caa1a4c0a7d61b129a6.js.map