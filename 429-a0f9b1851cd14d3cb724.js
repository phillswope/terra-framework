(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1456:function(t,e,n){t.exports={"test-popup-area":"PopupTypeCommon-test-module__test-popup-area___1YHnL","popup-button":"PopupTypeCommon-test-module__popup-button___x6amc"}},2580:function(t,e,n){"use strict";var o=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(21)),a=o(n(23)),l=o(n(24)),d=o(n(25)),s=o(n(28)),p=o(n(26)),i=o(n(0)),f=o(n(4)),c=o(n(130)),r=o(n(1456)),b=f.default.bind(r.default),h=function(t){function e(t){var n;return(0,u.default)(this,e),(n=(0,l.default)(this,(0,d.default)(e).call(this,t))).handleButtonClick=n.handleButtonClick.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.state={open:!0},n}return(0,p.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return i.default.createElement("div",{id:"test-popup-area",className:b("test-popup-area")},i.default.createElement(c.default,{classNameArrow:"test-arrow",classNameContent:"test-content",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},i.default.createElement("p",null,"this is popup content"),i.default.createElement("button",{id:"button1",type:"button"},"Test button 1"),i.default.createElement("button",{id:"button2",type:"button"},"Test button 2")),i.default.createElement("button",{type:"button",id:"default-button",className:b("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),e}(i.default.Component);e.default=h}}]);
//# sourceMappingURL=429-a0f9b1851cd14d3cb724.js.map