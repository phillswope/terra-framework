(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1135:function(e,t,s){"use strict";var n=s(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(s(164)),i=n(s(29)),l=n(s(21)),o=n(s(23)),r=n(s(24)),u=n(s(25)),c=n(s(28)),d=n(s(26)),f=n(s(0)),m=n(s(2));function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}var p={items:m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,component:m.default.element.isRequired})),render:m.default.func,disclose:m.default.func},v=function(e){function t(e){var s;return(0,l.default)(this,t),(s=(0,r.default)(this,(0,u.default)(t).call(this,e))).requestFocus=s.requestFocus.bind((0,c.default)(s)),s.releaseFocus=s.releaseFocus.bind((0,c.default)(s)),s.setFocusState=s.setFocusState.bind((0,c.default)(s)),s.resetFocusState=s.resetFocusState.bind((0,c.default)(s)),s.renderItems=s.renderItems.bind((0,c.default)(s)),s.state={focusedItemId:void 0,focusedItemState:void 0},s}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidUpdate",value:function(e){var t,s=this.props.items,n=this.state.focusedItemId;this.props.items!==e.items&&(s.forEach((function(e){e.key===n&&(t=!0)})),t||this.releaseFocus(void 0,!0))}},{key:"setFocusState",value:function(e,t){this.setState({focusedItemId:e,focusedItemState:t})}},{key:"resetFocusState",value:function(){this.setFocusState()}},{key:"requestFocus",value:function(e,t){var s=this,n=this.props.disclose,l=this.state.focusedItemId;return new Promise((function(o,r){s.releaseFocus(l).then((function(){s.setFocusState(e,Object.freeze(t||{}));var l={};n&&(l.disclose=function(t){return s.state.focusedItemId!==e?Promise.reject():n(t).then((function(e){var t=e.afterDismiss,n=e.dismissDisclosure,l=(0,i.default)(e,["afterDismiss","dismissDisclosure"]);return s.forceDismissInstance=n,t.then((function(){s.forceDismissInstance=void 0,s.state.focusedItemId&&s.resetFocusState()})),function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){(0,a.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({afterDismiss:t,dismissDisclosure:n},l)}))}),o(l)})).catch((function(){r()}))}))}},{key:"releaseFocus",value:function(e,t){var s=this;return this.state.focusedItemId?e===this.state.focusedItemId||t?new Promise((function(e,t){s.forceDismissInstance?s.forceDismissInstance().then((function(){s.resetFocusState(),e()})).catch((function(){t()})):(s.resetFocusState(),e())})):Promise.reject():Promise.resolve()}},{key:"renderItems",value:function(){var e=this,t=this.props.items,s=this.state,n=s.focusedItemId,a=s.focusedItemState;return t.map((function(t){var s=n===t.key;return f.default.cloneElement(t.component,{key:t.key,aggregatorDelegate:{hasFocus:s,requestFocus:function(s){return e.requestFocus(t.key,s)},releaseFocus:s?function(){return e.releaseFocus(t.key)}:void 0,itemState:s?a:void 0}})}))}},{key:"render",value:function(){var e=this.renderItems();return this.props.render?this.props.render({items:e}):f.default.createElement("div",null,e)}}]),t}(f.default.Component);v.propTypes=p,v.defaultProps={items:[]};var g=v;t.default=g},1173:function(e,t,s){},1356:function(e,t,s){"use strict";var n=s(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(s(0));s(1173);var i=function(e){var t=e.children,s=e.isPadded;return a.default.createElement("ul",{"aria-label":"Placeholder List",role:"listbox",className:s?"placeholder-list is-padded":"placeholder-list "},t)};t.default=i},1357:function(e,t,s){"use strict";var n=s(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(s(19)),i=n(s(29)),l=n(s(0));s(1173);var o=function(e){var t=e.children,s=e.isSelected,n=e.onSelect,o=(0,i.default)(e,["children","isSelected","onSelect"]),r=s?"placeholder-list-item is-selected":"placeholder-list-item ";return l.default.createElement("li",(0,a.default)({},o,{"aria-selected":s,tabIndex:"0",className:r,onClick:n,onKeyDown:function(e){13!==e.nativeEvent.keyCode&&32!==e.nativeEvent.keyCode||(e.preventDefault(),n(e))},role:"option"}),t)};t.default=o},1547:function(e,t,s){"use strict";var n=s(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(s(21)),i=n(s(23)),l=n(s(24)),o=n(s(25)),r=n(s(28)),u=n(s(26)),c=n(s(0)),d=n(s(2)),f=n(s(1356)),m=n(s(1357)),h=n(s(2204)),p=function(e){function t(e){var s;return(0,a.default)(this,t),(s=(0,l.default)(this,(0,o.default)(t).call(this,e))).handleSelection=s.handleSelection.bind((0,r.default)(s)),s}return(0,u.default)(t,e),(0,i.default)(t,[{key:"handleSelection",value:function(e,t){var s=this.props,n=s.aggregatorDelegate,a=s.name;n.hasFocus&&n.itemState.selectedKey===t?n.releaseFocus():n.requestFocus({selectedKey:t}).then((function(e){var t=e.disclose;t&&t({preferredType:"panel",size:"small",content:{key:"Disclosure for ".concat(a),component:c.default.createElement(h.default,{identifier:"Disclosure for ".concat(a)})}})}))}},{key:"render",value:function(){var e,t=this,s=this.props,n=s.name,a=s.aggregatorDelegate,i=s.targetId;return a.hasFocus&&a.itemState&&void 0!==a.itemState.selectedKey&&(e=a.itemState.selectedKey),c.default.createElement(f.default,null,c.default.createElement(m.default,{isSelected:"test-key"===e,onSelect:function(e){return t.handleSelection(e,"test-key")}},c.default.createElement("div",{id:i},n)))}}]),t}(c.default.Component);p.propTypes={name:d.default.string,aggregatorDelegate:d.default.shape({}),targetId:d.default.string};var v=p;t.default=v},2204:function(e,t,s){"use strict";var n=s(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(s(164)),i=n(s(21)),l=n(s(23)),o=n(s(24)),r=n(s(25)),u=n(s(28)),c=n(s(26)),d=n(s(0)),f=n(s(2)),m=n(s(56)),h=s(226),p=n(s(4)),v=n(s(2205)),g=p.default.bind(v.default),b=Object.keys(h.availableDisclosureHeights),y=Object.keys(h.availableDisclosureWidths),k=function(e){function t(e){var s;return(0,i.default)(this,t),(s=(0,o.default)(this,(0,r.default)(t).call(this,e))).disclose=s.disclose.bind((0,u.default)(s)),s.dismiss=s.dismiss.bind((0,u.default)(s)),s.closeDisclosure=s.closeDisclosure.bind((0,u.default)(s)),s.goBack=s.goBack.bind((0,u.default)(s)),s.maximize=s.maximize.bind((0,u.default)(s)),s.minimize=s.minimize.bind((0,u.default)(s)),s.requestFocus=s.requestFocus.bind((0,u.default)(s)),s.releaseFocus=s.releaseFocus.bind((0,u.default)(s)),s.generateOptions=s.generateOptions.bind((0,u.default)(s)),s.handleSelectChange=s.handleSelectChange.bind((0,u.default)(s)),s.renderFormButton=s.renderFormButton.bind((0,u.default)(s)),s.renderForm=s.renderForm.bind((0,u.default)(s)),s.getId=s.getId.bind((0,u.default)(s)),s.state={id:"disclosureDimensions",disclosureHeight:b[0],disclosureWidth:y[0]},s}return(0,c.default)(t,e),(0,l.default)(t,[{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var s=this;return e.map((function(e,n){var a=n;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(s.props.nestedIndex),key:a,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,a.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var s=this,n=this.props,a=n.disclosureType,i=n.nestedIndex+1;return function(){s.props.disclosureManager.disclose({preferredType:a,size:e,dimensions:t,content:{key:"DemoContainer-".concat(i),component:d.default.createElement(F,{identifier:"DemoContainer-".concat(i),nestedIndex:i})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"requestFocus",value:function(){this.props.disclosureManager.requestFocus()}},{key:"releaseFocus",value:function(){this.props.disclosureManager.releaseFocus()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(b,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(y,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,s=e.identifier;return d.default.createElement(m.default,{id:s,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:g("header")},"Content Component")},d.default.createElement("p",null,"id:"," ",s),t&&t.releaseFocus?d.default.createElement("p",null,"Modal has lost focus!"):null,t&&t.requestFocus?d.default.createElement("p",null,"Modal has gained focus!"):null,d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:g("content-form-wrapper")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,t&&t.requestFocus?d.default.createElement("button",{type:"button",className:"requestFocus",onClick:this.requestFocus},"Request Focus"):null,t&&t.releaseFocus?d.default.createElement("button",{type:"button",className:"releaseFocus",onClick:this.releaseFocus},"Release Focus"):null)}}]),t}(d.default.Component);k.propTypes={disclosureManager:h.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number},k.defaultProps={nestedIndex:0};var F=(0,h.withDisclosureManager)(k),D=F;t.default=D},2205:function(e,t,s){e.exports={header:"DisclosureComponent-module__header___3C9Jx","content-form-wrapper":"DisclosureComponent-module__content-form-wrapper___k5ep-"}}}]);
//# sourceMappingURL=19-b1d8e9c16e4638f2bc54.js.map