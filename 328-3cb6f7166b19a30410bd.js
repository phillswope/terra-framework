(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1455:function(e,t,n){e.exports={"test-popup-area":"BoundedPopupCommon-test-module__test-popup-area___HeHv-","popup-text":"BoundedPopupCommon-test-module__popup-text___3V8U8"}},2233:function(e,t,n){"use strict";var o=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(21)),d=o(n(23)),a=o(n(24)),l=o(n(25)),s=o(n(26)),i=o(n(0)),r=o(n(2)),p=function(e){function t(){return(0,u.default)(this,t),(0,a.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return this.props.closeButtonRequired?i.default.createElement("p",null,"There is no Header and popup is Bounded"):i.default.createElement("p",null,"This is the content of the popup")}}]),t}(i.default.Component);p.propTypes={closeButtonRequired:r.default.bool},p.defaultProps={closeButtonRequired:!1};var f=p;t.default=f},2575:function(e,t,n){"use strict";var o=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(21)),d=o(n(23)),a=o(n(24)),l=o(n(25)),s=o(n(28)),i=o(n(26)),r=o(n(0)),p=o(n(4)),f=o(n(130)),c=o(n(2233)),h=o(n(1455)),N=p.default.bind(h.default),v=function(e){function t(e){var n;return(0,u.default)(this,t),(n=(0,a.default)(this,(0,l.default)(t).call(this,e))).handleButtonClick=n.handleButtonClick.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.setParentNode=n.setParentNode.bind((0,s.default)(n)),n.getParentNode=n.getParentNode.bind((0,s.default)(n)),n.state={open:!0},n}return(0,i.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return r.default.createElement("div",{id:"test-popup-area",className:N("test-popup-area"),ref:this.setParentNode},r.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"240",contentWidth:"320",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode,isHeaderDisabled:!0},r.default.createElement(c.default,null)),r.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Bounded Popup"))}}]),t}(r.default.Component);t.default=v}}]);
//# sourceMappingURL=328-3cb6f7166b19a30410bd.js.map