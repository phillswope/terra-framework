(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1016:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(2)),i=a(1017),u=l.default.shape({size:l.default.string,toggleMenu:l.default.func,menuIsOpen:l.default.bool,togglePin:l.default.bool,menuIsPinned:l.default.bool}),o=l.default.shape({accessory:l.default.element,title:l.default.string}),r=l.default.oneOf(["start","center","end"]),d=l.default.arrayOf(l.default.shape({path:l.default.string.isRequired,text:l.default.string.isRequired,hasSubMenu:l.default.bool,icon:l.default.node})),s={utilityConfigPropType:l.default.shape({title:l.default.string,accessory:l.default.element,onChange:l.default.func.isRequired,menuItems:l.default.arrayOf(i.UtilityUtils.itemShape).isRequired,initialSelectedKey:l.default.string.isRequired}),utilityMenuItemPropType:i.UtilityUtils.itemShape,layoutConfigPropType:u,nameConfigPropType:o,navigationAlignmentPropType:r,navigationItemsPropType:d};t.default=s},1028:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={isSizeCompact:function(e){return"tiny"===e||"small"===e}};t.default=n},1031:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(2)),i=["location","parentPaths","showParent","showRoot","show"],u={propType:l.default.shape({location:l.default.shape({pathname:l.default.string}),parentPaths:l.default.arrayOf(l.default.string),showParent:l.default.func,showRoot:l.default.func,show:l.default.func}),create:function(e){var t={};return i.forEach((function(a){e&&e[a]&&(t[a]=e[a])})),Object.freeze(t)},isEqual:function(e,t){return e===t||!(!e||!t)&&!i.some((function(a){return e[a]!==t[a]}))}};t.default=u},1034:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var l=n(a(1042)),i=n(a(1044)),u={ApplicationHeaderName:l.default,ApplicationMenuName:i.default};t.default=u},1042:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(19)),i=n(a(29)),u=n(a(0)),o=n(a(2)),r=n(a(4)),d=n(a(1043)),s=r.default.bind(d.default),c={accessory:o.default.element,title:o.default.node},f=function(e){var t=e.accessory,a=e.title,n=(0,i.default)(e,["accessory","title"]),o=s(["application-header-name",n.className]);return u.default.createElement("div",(0,l.default)({},n,{className:o}),t&&u.default.createElement("div",{className:s("accessory")},t),a&&u.default.createElement("div",{className:s("title")},a))};f.propTypes=c;var p=f;t.default=p},1043:function(e,t,a){e.exports={"application-header-name":"ApplicationHeaderName-module__application-header-name___FuO6v",accessory:"ApplicationHeaderName-module__accessory___3Z_MP",title:"ApplicationHeaderName-module__title___2CBlj"}},1044:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(19)),i=n(a(29)),u=n(a(0)),o=n(a(2)),r=n(a(4)),d=n(a(1045)),s=r.default.bind(d.default),c={accessory:o.default.element,title:o.default.node},f=function(e){var t=e.accessory,a=e.title,n=(0,i.default)(e,["accessory","title"]),o=s(["application-menu-name",n.className]);return u.default.createElement("div",(0,l.default)({},n,{className:o}),t&&u.default.createElement("div",{className:s("accessory")},t),a&&u.default.createElement("div",{className:s("title")},a))};f.propTypes=c;var p=f;t.default=p},1045:function(e,t,a){e.exports={"application-menu-name":"ApplicationMenuName-module__application-menu-name___1xOas",accessory:"ApplicationMenuName-module__accessory___2yD9O",title:"ApplicationMenuName-module__title___2Umq0"}},1047:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(19)),i=n(a(29)),u=n(a(0)),o=n(a(2)),r=n(a(4)),d=n(a(1048)),s=r.default.bind(d.default),c={content:o.default.element,extensions:o.default.element,footer:o.default.element,header:o.default.element},f=function(e){var t,a,n,o,r=e.content,d=e.extensions,c=e.footer,f=e.header,p=(0,i.default)(e,["content","extensions","footer","header"]),m=s(["menu","fill",p.className]);return f&&(t=u.default.createElement("div",{className:s(["fit","header"])},f)),r&&(a=u.default.createElement("div",{className:s(["fill","content"])},u.default.createElement("div",{className:s("normalizer")},r))),d&&(n=u.default.createElement("div",{className:s(["fit","widget"])},d)),c&&(o=u.default.createElement("div",{className:s(["fit","footer"])},c)),u.default.createElement("div",(0,l.default)({},p,{className:m}),t,u.default.createElement("div",{className:s(["fill","body"])},n,a),o)};f.propTypes=c;var p=f;t.default=p},1048:function(e,t,a){e.exports={fit:"ApplicationMenuLayout-module__fit___2_ZyC",fill:"ApplicationMenuLayout-module__fill___-mAIP",menu:"ApplicationMenuLayout-module__menu___2MW9V",header:"ApplicationMenuLayout-module__header___rjp8P",footer:"ApplicationMenuLayout-module__footer___3YHVr",body:"ApplicationMenuLayout-module__body___2a4kY",widgets:"ApplicationMenuLayout-module__widgets___33Lug",content:"ApplicationMenuLayout-module__content___dGOMr",normalizer:"ApplicationMenuLayout-module__normalizer___3ImZQ"}},1062:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=i(a(37));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M28.2 24L42.9 9.1 40.8 7l-1.7-1.6-.4-.5L24 19.7 9.4 4.9 7.2 7 5.6 8.6l-.5.5L19.8 24 5.1 38.9 7.2 41l1.7 1.6.5.5L24 28.3l14.7 14.8.4-.5 1.7-1.6 2.1-2.1L28.2 24z"}))};o.displayName="IconClose",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var r=o;t.default=r},1063:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=i(a(37));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 21H10.6L27.3 3.9 23.5.1 0 24l23.5 23.9 3.8-3.8L10.6 27H48z"}))};o.displayName="IconLeft",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var r=o;t.default=r},1064:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=i(a(37));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z"}))};o.displayName="IconCheckmark",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var r=o;t.default=r},1065:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(19)),i=n(a(29)),u=n(a(21)),o=n(a(23)),r=n(a(24)),d=n(a(25)),s=n(a(28)),c=n(a(26)),f=n(a(0)),p=n(a(2)),m=n(a(4)),y=n(a(1047)),_=a(1034),v=n(a(1031)),g=a(1017),h=a(357),b=a(226),M=n(a(1016)),O=n(a(1028)),P=n(a(1066)),E=n(a(1067)),C=m.default.bind(E.default),w={content:p.default.element,extensions:p.default.element,layoutConfig:M.default.layoutConfigPropType.isRequired,nameConfig:M.default.nameConfigPropType,routingStackDelegate:v.default.propType.isRequired,utilityConfig:M.default.utilityConfigPropType,disclosureManager:b.disclosureManagerShape},j=function(e){function t(e){var a;return(0,u.default)(this,t),(a=(0,r.default)(this,(0,d.default)(t).call(this,e))).renderHeader=a.renderHeader.bind((0,s.default)(a)),a.renderExtensions=a.renderExtensions.bind((0,s.default)(a)),a.renderFooter=a.renderFooter.bind((0,s.default)(a)),a.handleUtilityDiscloseRequest=a.handleUtilityDiscloseRequest.bind((0,s.default)(a)),a.handleUtilityOnChange=a.handleUtilityOnChange.bind((0,s.default)(a)),a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"handleUtilityDiscloseRequest",value:function(e){var t=this.props,a=t.disclosureManager,n=t.layoutConfig;n&&n.toggleMenu&&n.toggleMenu(),a&&e&&a.disclose({preferredType:h.disclosureType,dimensions:{height:"420",width:"320"},content:{component:f.default.createElement(P.default,null,e),key:"application-menu-utility-menu"}})}},{key:"handleUtilityOnChange",value:function(e,t){var a=this.props,n=a.utilityConfig,l=a.disclosureManager;n.onChange(e,t,l&&l.disclose)}},{key:"renderHeader",value:function(e){var t=this.props.nameConfig;return e&&t&&(t.accessory||t.title)?f.default.createElement("div",{className:C(["menu-header"])},f.default.createElement(_.ApplicationMenuName,{accessory:t.accessory,title:t.title})):null}},{key:"renderExtensions",value:function(e){var t=this.props,a=t.layoutConfig,n=t.extensions;return e&&n?f.default.cloneElement(n,{layoutConfig:a}):null}},{key:"renderFooter",value:function(e){var t=this.props.utilityConfig;return e&&t?f.default.createElement(g.ApplicationMenuUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-menu-utility":!0}):null}},{key:"render",value:function(){var e,t=this.props,a=(t.disclosureManager,t.content),n=(t.extensions,t.layoutConfig),u=(t.nameConfig,t.routingStackDelegate),o=(t.utilityConfig,(0,i.default)(t,["disclosureManager","content","extensions","layoutConfig","nameConfig","routingStackDelegate","utilityConfig"])),r=C(["application-menu",o.className]),d=O.default.isSizeCompact(n.size);return a&&(e=f.default.cloneElement(a,{layoutConfig:n,routingStackDelegate:u})),f.default.createElement("div",(0,l.default)({},o,{className:r}),f.default.createElement(y.default,{header:this.renderHeader(d),extensions:this.renderExtensions(d),content:e,footer:this.renderFooter(d)}))}}]),t}(f.default.Component);j.propTypes=w;var N=(0,b.withDisclosureManager)(j);t.default=N},1066:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(164)),i=n(a(29)),u=n(a(0)),o=n(a(2)),r=a(226);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var s={disclosureManager:r.disclosureManagerShape,children:o.default.node.isRequired},c=function(e){var t=e.disclosureManager,a=e.children,n=(0,i.default)(e,["disclosureManager","children"]);return u.default.cloneElement(a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n,{onRequestClose:t.dismiss,isHeightBounded:!0}))};c.propTypes=s;var f=(0,r.withDisclosureManager)(c);t.default=f},1067:function(e,t,a){e.exports={"application-menu":"ApplicationMenu-module__application-menu___3TpDZ","menu-header":"ApplicationMenu-module__menu-header___nX2Wr"}},1199:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(19)),i=n(a(0)),u=n(a(4)),o=n(a(1200)),r=u.default.bind(o.default),d=function(e){return"large"!==(0,l.default)({},e).layoutConfig.size?i.default.createElement("div",{className:r("demo-extensions-small")},"Test Extensions Small"):i.default.createElement("div",{className:r(["demo-extensions"])},"Test Extensions Large")};t.default=d},1200:function(e,t,a){e.exports={"demo-extensions":"demoStyles-module__demo-extensions___6JMdh","demo-extensions-small":"demoStyles-module__demo-extensions-small___2EjPt"}},2208:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),i=function(){return l.default.createElement("div",null,"Test Content")};t.default=i},2353:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),i=n(a(357)),u=a(83),o=n(a(1065)),r=n(a(1199)),d=n(a(2208)),s=function(){return l.default.createElement(u.MemoryRouter,null,l.default.createElement(i.default,null,l.default.createElement(o.default,{id:"test-menu",layoutConfig:{size:"small"},nameConfig:{title:"app-test-title"},routingStackDelegate:{},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},extensions:l.default.createElement(r.default,{layoutConfig:{size:"small"}}),content:l.default.createElement(d.default,null)})))};t.default=s}}]);
//# sourceMappingURL=76-2057c12f3247ea9dc620.js.map