(window.webpackJsonp=window.webpackJsonp||[]).push([[68,16],{1016:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(2)),o=n(1017),l=i.default.shape({size:i.default.string,toggleMenu:i.default.func,menuIsOpen:i.default.bool,togglePin:i.default.bool,menuIsPinned:i.default.bool}),r=i.default.shape({accessory:i.default.element,title:i.default.string}),u=i.default.oneOf(["start","center","end"]),s=i.default.arrayOf(i.default.shape({path:i.default.string.isRequired,text:i.default.string.isRequired,hasSubMenu:i.default.bool,icon:i.default.node})),d={utilityConfigPropType:i.default.shape({title:i.default.string,accessory:i.default.element,onChange:i.default.func.isRequired,menuItems:i.default.arrayOf(o.UtilityUtils.itemShape).isRequired,initialSelectedKey:i.default.string.isRequired}),utilityMenuItemPropType:o.UtilityUtils.itemShape,layoutConfigPropType:l,nameConfigPropType:r,navigationAlignmentPropType:u,navigationItemsPropType:s};t.default=d},1028:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={isSizeCompact:function(e){return"tiny"===e||"small"===e}};t.default=a},1034:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var i=a(n(1042)),o=a(n(1044)),l={ApplicationHeaderName:i.default,ApplicationMenuName:o.default};t.default=l},1040:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),o=a(n(29)),l=a(n(0)),r=a(n(2)),u=a(n(4)),s=n(7),d=a(n(1041)),f=u.default.bind(d.default),c={extensions:r.default.element,logo:r.default.element,intl:s.intlShape.isRequired,navigation:r.default.element,toggle:r.default.element,utilities:r.default.element},p=function(e){var t,n,a,r,u,s=e.extensions,d=e.logo,c=e.navigation,p=e.intl,m=e.toggle,y=e.utilities,g=(0,o.default)(e,["extensions","logo","navigation","intl","toggle","utilities"]),h=f(["header","fill",g.className]);d&&(t=l.default.createElement("div",{className:f(["fit","start","logo"])},d)),c&&(n=l.default.createElement("nav",{role:"navigation",className:f("fill")},c)),s&&(a=l.default.createElement("div",{className:f(["fit","end","extensions"])},s)),y&&(r=l.default.createElement("div",{className:f(["fit","end","utilities"])},y)),m&&(u=l.default.createElement("div",{className:f("fit")},m));var v,_=l.default.createElement("div",{className:f(["fill","header-inner"])},n,a),b=l.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:f("skip-content")},p.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(_||t||r)&&(v=l.default.createElement("div",{className:f(["fill","header-body"])},b,t,_,r)),l.default.createElement("div",(0,i.default)({},g,{className:h}),u,v)};p.propTypes=c;var m=(0,s.injectIntl)(p);t.default=m},1041:function(e,t,n){e.exports={fit:"ApplicationHeaderLayout-module__fit___tJJW8",fill:"ApplicationHeaderLayout-module__fill___1szI2",start:"ApplicationHeaderLayout-module__start___brKW8",end:"ApplicationHeaderLayout-module__end___3OIpZ","header-inner":"ApplicationHeaderLayout-module__header-inner___36bkj",logo:"ApplicationHeaderLayout-module__logo___1KF-r",utilities:"ApplicationHeaderLayout-module__utilities___1jy0T",extensions:"ApplicationHeaderLayout-module__extensions___17F-D","header-body":"ApplicationHeaderLayout-module__header-body___3Yoz6","skip-content":"ApplicationHeaderLayout-module__skip-content___1vGmQ"}},1042:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),o=a(n(29)),l=a(n(0)),r=a(n(2)),u=a(n(4)),s=a(n(1043)),d=u.default.bind(s.default),f={accessory:r.default.element,title:r.default.node},c=function(e){var t=e.accessory,n=e.title,a=(0,o.default)(e,["accessory","title"]),r=d(["application-header-name",a.className]);return l.default.createElement("div",(0,i.default)({},a,{className:r}),t&&l.default.createElement("div",{className:d("accessory")},t),n&&l.default.createElement("div",{className:d("title")},n))};c.propTypes=f;var p=c;t.default=p},1043:function(e,t,n){e.exports={"application-header-name":"ApplicationHeaderName-module__application-header-name___FuO6v",accessory:"ApplicationHeaderName-module__accessory___3Z_MP",title:"ApplicationHeaderName-module__title___2CBlj"}},1044:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),o=a(n(29)),l=a(n(0)),r=a(n(2)),u=a(n(4)),s=a(n(1045)),d=u.default.bind(s.default),f={accessory:r.default.element,title:r.default.node},c=function(e){var t=e.accessory,n=e.title,a=(0,o.default)(e,["accessory","title"]),r=d(["application-menu-name",a.className]);return l.default.createElement("div",(0,i.default)({},a,{className:r}),t&&l.default.createElement("div",{className:d("accessory")},t),n&&l.default.createElement("div",{className:d("title")},n))};c.propTypes=f;var p=c;t.default=p},1045:function(e,t,n){e.exports={"application-menu-name":"ApplicationMenuName-module__application-menu-name___1xOas",accessory:"ApplicationMenuName-module__accessory___2yD9O",title:"ApplicationMenuName-module__title___2Umq0"}},1047:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),o=a(n(29)),l=a(n(0)),r=a(n(2)),u=a(n(4)),s=a(n(1048)),d=u.default.bind(s.default),f={content:r.default.element,extensions:r.default.element,footer:r.default.element,header:r.default.element},c=function(e){var t,n,a,r,u=e.content,s=e.extensions,f=e.footer,c=e.header,p=(0,o.default)(e,["content","extensions","footer","header"]),m=d(["menu","fill",p.className]);return c&&(t=l.default.createElement("div",{className:d(["fit","header"])},c)),u&&(n=l.default.createElement("div",{className:d(["fill","content"])},l.default.createElement("div",{className:d("normalizer")},u))),s&&(a=l.default.createElement("div",{className:d(["fit","widget"])},s)),f&&(r=l.default.createElement("div",{className:d(["fit","footer"])},f)),l.default.createElement("div",(0,i.default)({},p,{className:m}),t,l.default.createElement("div",{className:d(["fill","body"])},a,n),r)};c.propTypes=f;var p=c;t.default=p},1048:function(e,t,n){e.exports={fit:"ApplicationMenuLayout-module__fit___2_ZyC",fill:"ApplicationMenuLayout-module__fill___-mAIP",menu:"ApplicationMenuLayout-module__menu___2MW9V",header:"ApplicationMenuLayout-module__header___rjp8P",footer:"ApplicationMenuLayout-module__footer___3YHVr",body:"ApplicationMenuLayout-module__body___2a4kY",widgets:"ApplicationMenuLayout-module__widgets___33Lug",content:"ApplicationMenuLayout-module__content___dGOMr",normalizer:"ApplicationMenuLayout-module__normalizer___3ImZQ"}},1052:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return o.default}}),t.ApplicationLinksPropType=t.default=void 0;var i=a(n(2)),o=a(n(1068)),l=i.default.shape({alignment:i.default.oneOf(["start","center","end"]),links:i.default.arrayOf(i.default.shape({id:i.default.string,path:i.default.string.isRequired,text:i.default.string.isRequired,icon:i.default.node}))});t.ApplicationLinksPropType=l;var r={ApplicationTabs:o.default,ApplicationLinksPropType:l};t.default=r},1053:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),o=a(n(29)),l=a(n(21)),r=a(n(23)),u=a(n(24)),s=a(n(25)),d=a(n(28)),f=a(n(26)),c=a(n(0)),p=a(n(2)),m=a(n(4)),y=n(7),g=n(226),h=a(n(1040)),v=n(1017),_=n(1034),b=n(1052),C=a(n(1054)),P=a(n(130)),M=n(1036),O=a(n(1016)),E=a(n(1028)),N=a(n(1069)),T=m.default.bind(N.default),k={applicationLinks:b.ApplicationLinksPropType,extensions:p.default.element,layoutConfig:O.default.layoutConfigPropType,navigationLayoutRoutes:p.default.arrayOf(M.processedRoutesPropType),navigationLayoutSize:p.default.string,nameConfig:O.default.nameConfigPropType,utilityConfig:O.default.utilityConfigPropType,intl:y.intlShape,disclosureManager:g.disclosureManagerShape,hasIcons:p.default.bool},x=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,u.default)(this,(0,s.default)(t).call(this,e))).handleUtilityDiscloseRequest=n.handleUtilityDiscloseRequest.bind((0,d.default)(n)),n.handleUtilityPopupCloseRequest=n.handleUtilityPopupCloseRequest.bind((0,d.default)(n)),n.handleUtilityOnChange=n.handleUtilityOnChange.bind((0,d.default)(n)),n.getTargetRef=n.getTargetRef.bind((0,d.default)(n)),n.setContentNode=n.setContentNode.bind((0,d.default)(n)),n.renderToggle=n.renderToggle.bind((0,d.default)(n)),n.renderAppName=n.renderAppName.bind((0,d.default)(n)),n.renderExtensions=n.renderExtensions.bind((0,d.default)(n)),n.renderNavigation=n.renderNavigation.bind((0,d.default)(n)),n.renderUtilities=n.renderUtilities.bind((0,d.default)(n)),n.renderUtilitiesPopup=n.renderUtilitiesPopup.bind((0,d.default)(n)),n.state={utilityComponent:void 0},n}return(0,f.default)(t,e),(0,r.default)(t,[{key:"setContentNode",value:function(e){this.contentNode=e}},{key:"getTargetRef",value:function(){if(this.contentNode)return this.contentNode.querySelector("[data-application-header-utility]")}},{key:"handleUtilityDiscloseRequest",value:function(e){this.setState({utilityComponent:c.default.cloneElement(e,{onRequestClose:this.handleUtilityPopupCloseRequest})})}},{key:"handleUtilityPopupCloseRequest",value:function(){this.state.utilityComponent&&this.setState({utilityComponent:void 0})}},{key:"handleUtilityOnChange",value:function(e,t){var n=this.props,a=n.utilityConfig,i=n.disclosureManager;a.onChange(e,t,i&&i.disclose)}},{key:"renderToggle",value:function(){var e=this.props,t=e.layoutConfig,n=e.intl;return t.toggleMenu?c.default.createElement("div",{className:T("navbar-toggle")},c.default.createElement("button",{type:"button",className:T("toggle-button"),"aria-label":n.formatMessage({id:"Terra.applicationLayout.applicationHeader.menuToggleLabel"}),onClick:t.toggleMenu,"data-application-header-toggle":!0},c.default.createElement(C.default,null))):null}},{key:"renderAppName",value:function(){var e=this.props.nameConfig;return e&&(e.accessory||e.title)?c.default.createElement(_.ApplicationHeaderName,{accessory:e.accessory,title:e.title}):null}},{key:"renderNavigation",value:function(e){var t=this.props.applicationLinks;return e?this.renderAppName():t.links&&t.links.length?c.default.createElement(b.ApplicationTabs,t):null}},{key:"renderExtensions",value:function(e){var t=this.props,n=t.layoutConfig,a=t.extensions;return!e&&a?c.default.cloneElement(a,{layoutConfig:n}):null}},{key:"renderUtilities",value:function(e){var t=this.props.utilityConfig;return!e&&t?c.default.createElement(v.ApplicationHeaderUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-header-utility":!0}):null}},{key:"renderUtilitiesPopup",value:function(){var e=this.state.utilityComponent;return e?c.default.createElement(P.default,{attachmentBehavior:"push",contentAttachment:"top center",contentHeight:"auto",contentWidth:"240",isArrowDisplayed:!0,isHeaderDisabled:!0,isOpen:!0,onRequestClose:this.handleUtilityPopupCloseRequest,targetRef:this.getTargetRef},e):null}},{key:"render",value:function(){var e=this.props,t=(e.disclosureManager,e.applicationLinks,e.extensions,e.layoutConfig),n=(e.nameConfig,e.utilityConfig,e.navigationLayoutRoutes,e.navigationLayoutSize,e.intl,e.hasIcons),a=(0,o.default)(e,["disclosureManager","applicationLinks","extensions","layoutConfig","nameConfig","utilityConfig","navigationLayoutRoutes","navigationLayoutSize","intl","hasIcons"]),l=T(["application-navbar",{"application-navbar-with-icons":n},a.className]),r=E.default.isSizeCompact(t.size);return c.default.createElement("header",(0,i.default)({role:"banner"},a,{className:l,ref:this.setContentNode}),c.default.createElement(h.default,{toggle:this.renderToggle(),logo:r?null:this.renderAppName(),navigation:this.renderNavigation(r),extensions:this.renderExtensions(r),utilities:this.renderUtilities(r)}),this.renderUtilitiesPopup())}}]),t}(c.default.Component);x.propTypes=k,x.defaultProps={applicationLinks:{},hasIcons:!1};var A=(0,y.injectIntl)((0,g.withDisclosureManager)(x));t.default=A},1054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=function(e){var t=l({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M0 21h48v6H0zM0 4h48v6H0zm0 34h48v6H0z"}))};r.displayName="IconMenu",r.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=r;t.default=u},1059:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],a=n.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var n,o,r,u=[],f=[],c=e.querySelectorAll(a);for(t.includeContainer&&i.call(e,a)&&(c=Array.prototype.slice.apply(c)).unshift(e),n=0;n<c.length;n++)l(o=c[n])&&(0===(r=s(o))?u.push(o):f.push({documentOrder:n,tabIndex:r,node:o}));return f.sort(d).map((function(e){return e.node})).concat(u)}function l(e){return!(!r(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||s(e)<0)}function r(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,a)&&l(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,u)&&r(e)};var u=n.concat("iframe").join(",");function s(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=o},1061:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RoutingMenu",{enumerable:!0,get:function(){return g.default}}),t.Utils=t.default=void 0;var i=a(n(164)),o=a(n(21)),l=a(n(24)),r=a(n(25)),u=a(n(23)),s=a(n(26)),d=a(n(0)),f=a(n(2)),c=a(n(1095)),p=n(1036),m=n(83),y=a(n(357)),g=a(n(1072)),h=a(n(1077)),v=a(n(1053)),_=a(n(1016)),b=a(n(1028)),C=a(n(1078));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=["default","tiny","small","medium","large","huge"],E={extensions:f.default.element,indexPath:f.default.string.isRequired,nameConfig:_.default.nameConfigPropType,navigationAlignment:_.default.navigationAlignmentPropType,navigationItems:_.default.navigationItemsPropType,routingConfig:f.default.shape({menu:p.routeConfigPropType,content:p.routeConfigPropType}).isRequired,utilityConfig:_.default.utilityConfigPropType},N=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,l.default)(this,(0,r.default)(t).call(this,e))).state={applicationLayoutRoutingConfig:t.buildRoutingConfig(n.props),prevProps:{nameConfig:e.nameConfig,routingConfig:e.routingConfig,utilityConfig:e.utilityConfig,navigationItems:e.navigationItems,indexPath:e.indexPath}},n}return(0,s.default)(t,e),(0,u.default)(t,null,[{key:"buildMenuNavigationItems",value:function(e){var t=e.navigationItems,n=e.routingConfig;if(!n.menu)return t;var a=Object.keys(n.menu).map((function(e){return n.menu[e].path}));return t.map((function(e){return{externalLink:e.externalLink,path:e.path,text:e.text,hasSubMenu:a.filter((function(t){return(0,m.matchPath)(e.path,{path:t})})).length>0}}))}},{key:"buildNavigationMenuConfig",value:function(e){var n=t.buildMenuNavigationItems(e),a={componentClass:g.default,props:{menuItems:n},refuseRoutingStackNavigation:0===n.length};return{"/":{path:"/",component:{tiny:a,small:a}}}}},{key:"buildApplicationMenus",value:function(e,t){var n=e.nameConfig,a=e.utilityConfig,i=e.extensions;if(t){var o={};return Object.keys(t).forEach((function(e){var l=M({},t[e]),r=M({},l.component);O.forEach((function(e){if(r[e]){var t=M({},r[e]),o=M({},t.props);o.applicationMenuWrapperProps={contentComponentClass:t.componentClass,nameConfig:n,utilityConfig:a,extensions:i},t.props=o,t.componentClass=h.default,r[e]=t}})),l.component=r,o[e]=l})),o}}},{key:"buildRoutingConfig",value:function(e){var n=e.routingConfig;return M({},n,{menu:t.buildApplicationMenus(e,M({},n.menu,{},t.buildNavigationMenuConfig(e)))})}}]),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.nameConfig,n=e.utilityConfig,a=e.navigationAlignment,i=e.navigationItems,o=e.indexPath,l=e.extensions,r=this.state.applicationLayoutRoutingConfig,u=(i||[]).some((function(e){return e.icon})),s=i?(i||[]).map((function(e,t){return{id:"application-layout-tab-".concat(t),path:e.path,text:e.text,externalLink:e.externalLink,icon:e.icon}})):void 0,f=d.default.createElement(v.default,{nameConfig:t,utilityConfig:n,extensions:l,applicationLinks:{alignment:a,links:s},hasIcons:u});return d.default.createElement(y.default,null,d.default.createElement(c.default,{config:r,header:f,indexPath:o}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return n.prevProps.nameConfig!==e.nameConfig||n.prevProps.utilityConfig!==e.utilityConfig||n.prevProps.routingConfig!==e.routingConfig||n.prevProps.navigationItems!==e.navigationItems||n.prevProps.indexPath!==e.indexPath?{applicationLayoutRoutingConfig:t.buildRoutingConfig(e)}:null}}]),t}(d.default.Component);N.propTypes=E,N.defaultProps={navigationItems:[]};var T=N;t.default=T;var k={helpers:b.default,utilityHelpers:C.default,propTypes:_.default};t.Utils=k},1062:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=function(e){var t=l({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M28.2 24L42.9 9.1 40.8 7l-1.7-1.6-.4-.5L24 19.7 9.4 4.9 7.2 7 5.6 8.6l-.5.5L19.8 24 5.1 38.9 7.2 41l1.7 1.6.5.5L24 28.3l14.7 14.8.4-.5 1.7-1.6 2.1-2.1L28.2 24z"}))};r.displayName="IconClose",r.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=r;t.default=u},1063:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=function(e){var t=l({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M48 21H10.6L27.3 3.9 23.5.1 0 24l23.5 23.9 3.8-3.8L10.6 27H48z"}))};r.displayName="IconLeft",r.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=r;t.default=u},1064:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=function(e){var t=l({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z"}))};r.displayName="IconCheckmark",r.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=r;t.default=u},1065:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),o=a(n(29)),l=a(n(21)),r=a(n(23)),u=a(n(24)),s=a(n(25)),d=a(n(28)),f=a(n(26)),c=a(n(0)),p=a(n(2)),m=a(n(4)),y=a(n(1047)),g=n(1034),h=a(n(1031)),v=n(1017),_=n(357),b=n(226),C=a(n(1016)),P=a(n(1028)),M=a(n(1066)),O=a(n(1067)),E=m.default.bind(O.default),N={content:p.default.element,extensions:p.default.element,layoutConfig:C.default.layoutConfigPropType.isRequired,nameConfig:C.default.nameConfigPropType,routingStackDelegate:h.default.propType.isRequired,utilityConfig:C.default.utilityConfigPropType,disclosureManager:b.disclosureManagerShape},T=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,u.default)(this,(0,s.default)(t).call(this,e))).renderHeader=n.renderHeader.bind((0,d.default)(n)),n.renderExtensions=n.renderExtensions.bind((0,d.default)(n)),n.renderFooter=n.renderFooter.bind((0,d.default)(n)),n.handleUtilityDiscloseRequest=n.handleUtilityDiscloseRequest.bind((0,d.default)(n)),n.handleUtilityOnChange=n.handleUtilityOnChange.bind((0,d.default)(n)),n}return(0,f.default)(t,e),(0,r.default)(t,[{key:"handleUtilityDiscloseRequest",value:function(e){var t=this.props,n=t.disclosureManager,a=t.layoutConfig;a&&a.toggleMenu&&a.toggleMenu(),n&&e&&n.disclose({preferredType:_.disclosureType,dimensions:{height:"420",width:"320"},content:{component:c.default.createElement(M.default,null,e),key:"application-menu-utility-menu"}})}},{key:"handleUtilityOnChange",value:function(e,t){var n=this.props,a=n.utilityConfig,i=n.disclosureManager;a.onChange(e,t,i&&i.disclose)}},{key:"renderHeader",value:function(e){var t=this.props.nameConfig;return e&&t&&(t.accessory||t.title)?c.default.createElement("div",{className:E(["menu-header"])},c.default.createElement(g.ApplicationMenuName,{accessory:t.accessory,title:t.title})):null}},{key:"renderExtensions",value:function(e){var t=this.props,n=t.layoutConfig,a=t.extensions;return e&&a?c.default.cloneElement(a,{layoutConfig:n}):null}},{key:"renderFooter",value:function(e){var t=this.props.utilityConfig;return e&&t?c.default.createElement(v.ApplicationMenuUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-menu-utility":!0}):null}},{key:"render",value:function(){var e,t=this.props,n=(t.disclosureManager,t.content),a=(t.extensions,t.layoutConfig),l=(t.nameConfig,t.routingStackDelegate),r=(t.utilityConfig,(0,o.default)(t,["disclosureManager","content","extensions","layoutConfig","nameConfig","routingStackDelegate","utilityConfig"])),u=E(["application-menu",r.className]),s=P.default.isSizeCompact(a.size);return n&&(e=c.default.cloneElement(n,{layoutConfig:a,routingStackDelegate:l})),c.default.createElement("div",(0,i.default)({},r,{className:u}),c.default.createElement(y.default,{header:this.renderHeader(s),extensions:this.renderExtensions(s),content:e,footer:this.renderFooter(s)}))}}]),t}(c.default.Component);T.propTypes=N;var k=(0,b.withDisclosureManager)(T);t.default=k},1066:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(164)),o=a(n(29)),l=a(n(0)),r=a(n(2)),u=n(226);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var d={disclosureManager:u.disclosureManagerShape,children:r.default.node.isRequired},f=function(e){var t=e.disclosureManager,n=e.children,a=(0,o.default)(e,["disclosureManager","children"]);return l.default.cloneElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{onRequestClose:t.dismiss,isHeightBounded:!0}))};f.propTypes=d;var c=(0,u.withDisclosureManager)(f);t.default=c},1067:function(e,t,n){e.exports={"application-menu":"ApplicationMenu-module__application-menu___3TpDZ","menu-header":"ApplicationMenu-module__menu-header___nX2Wr"}},1069:function(e,t,n){e.exports={"application-navbar":"ApplicationHeader-module__application-navbar___2Bg0M","application-navbar-with-icons":"ApplicationHeader-module__application-navbar-with-icons___NWcXr","navbar-toggle":"ApplicationHeader-module__navbar-toggle___GEq16","toggle-button":"ApplicationHeader-module__toggle-button___2GANm"}},1072:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(21)),o=a(n(24)),l=a(n(25)),r=a(n(28)),u=a(n(23)),s=a(n(26)),d=a(n(0)),f=a(n(2)),c=n(83),p=a(n(1096)),m=a(n(1031)),y=a(n(1016)),g={title:f.default.string,menuItems:f.default.arrayOf(f.default.shape({text:f.default.string.isRequired,path:f.default.string.isRequired,hasSubMenu:f.default.bool})),layoutConfig:y.default.layoutConfigPropType.isRequired,routingStackDelegate:m.default.propType.isRequired,location:f.default.shape({pathname:f.default.string}).isRequired},h=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,o.default)(this,(0,l.default)(t).call(this,e))).handleMenuChange=n.handleMenuChange.bind((0,r.default)(n)),n.state={selectedChildKey:t.getSelectedChildKey(e.location.pathname,e.menuItems),prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems},n}return(0,s.default)(t,e),(0,u.default)(t,null,[{key:"buildSideMenuItems",value:function(e){return e.map((function(e){return{key:e.path,text:e.text,hasSubMenu:!!e.hasSubMenu,metaData:{path:e.path,externalLink:e.externalLink,hasSubMenu:!!e.hasSubMenu}}}))}}]),(0,u.default)(t,[{key:"handleMenuChange",value:function(e,t){var n,a=this.props,i=a.routingStackDelegate,o=a.layoutConfig;return t.metaData.externalLink?n=function(){return window.open(t.metaData.externalLink.path,t.metaData.externalLink.target||"_blank")}:(this.setState({selectedChildKey:t.selectedChildKey}),n=function(){return i.show({path:t.metaData.path})}),!t.metaData.hasSubMenu&&o.toggleMenu?o.toggleMenu().then((function(){n()})):Promise.resolve().then((function(){return n()}))}},{key:"render",value:function(){var e=this.props,n=e.title,a=e.routingStackDelegate,i=e.menuItems,o=this.state.selectedChildKey,l=t.buildSideMenuItems(i);return l.push({key:"routingMenuRootMenuKey",text:n||"",childKeys:l.map((function(e){return e.key})),isRootMenu:!a.showParent&&!n}),d.default.createElement(p.default,{menuItems:l,onChange:this.handleMenuChange,routingStackBack:a.showParent,selectedMenuKey:"routingMenuRootMenuKey",selectedChildKey:o,"data-routing-menu":!0})}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.location.pathname!==n.prevPropsLocationPathName||e.menuItems!==n.prevPropsMenuItems?{prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems,selectedChildKey:t.getSelectedChildKey(e.location.pathname,e.menuItems)}:null}},{key:"getSelectedChildKey",value:function(e,t){for(var n=0,a=t.length;n<a;n+=1){var i=t[n];if(i.path&&(0,c.matchPath)(e,{path:i.path}))return i.path}}}]),t}(d.default.Component);h.propTypes=g;var v=(0,c.withRouter)(h);t.default=v},1077:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(29)),o=a(n(0)),l=a(n(2)),r=a(n(1031)),u=a(n(1065)),s=a(n(1016)),d={navigationItems:s.default.navigationItemsPropType,layoutConfig:s.default.layoutConfigPropType.isRequired,routingStackDelegate:r.default.propType.isRequired,applicationMenuWrapperProps:l.default.shape({contentComponentClass:l.default.func.isRequired,nameConfig:s.default.nameConfigPropType,utilityConfig:s.default.utilityConfigPropType,extensions:l.default.node}).isRequired},f=function(e){var t=e.layoutConfig,n=e.routingStackDelegate,a=e.applicationMenuWrapperProps,l=(0,i.default)(e,["layoutConfig","routingStackDelegate","applicationMenuWrapperProps"]),r=a.contentComponentClass;return o.default.createElement(u.default,{layoutConfig:t,routingStackDelegate:n,nameConfig:a.nameConfig,utilityConfig:a.utilityConfig,extensions:a.extensions,content:o.default.createElement(r,l)})};f.propTypes=d;var c=f;t.default=c},1078:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=n(1017),l=a(n(1079)),r={MENU:"menu",USER_INFORMATION:"user-information",CHANGE_PHOTO:"change-photo",SETTINGS:"settings",APPEARANCE:"appearance",SECURITY:"security",HELP:"help",GETTING_STARTED:"getting-started",ABOUT:"about",TERMS_OF_USE:"terms-of-use",LOG_OUT:"log-out"},u=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.menu"})},s=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.userInformation"})},d=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.changePhoto"})},f=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.settings"})},c=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.appearance"})},p=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.security"})},m=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.help"})},y=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.gettingStarted"})},g=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.about"})},h=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.termsOfUse"})},v=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.logOut"})},_={getDefaultUtilityItems:function(e,t,n){var a=i.default.createElement(l.default,{userName:t.name,userDetail:t.detail,userPhoto:t.photo});return function(e,t){return t?(t.forEach((function(t){if(t.parentKey){var n=e.filter((function(e){return e.key===t.parentKey}));if(!n.length)return;var a=n[0];a.childKeys?a.childKeys.indexOf(t.key)<0&&a.childKeys.push(t.key):a.childKeys=[t.key]}})),e.concat(t)):e}([{key:r.MENU,title:u(e),childKeys:[r.USER_INFORMATION,r.SETTINGS,r.HELP,r.LOG_OUT]},{key:r.USER_INFORMATION,title:s(e),content:a,childKeys:[r.CHANGE_PHOTO]},{key:r.SETTINGS,title:f(e),childKeys:[r.APPEARANCE,r.SECURITY]},{key:r.LOG_OUT,contentLocation:o.UtilityUtils.LOCATIONS.FOOTER,title:v(e)},{key:r.HELP,title:m(e),childKeys:[r.GETTING_STARTED,r.ABOUT,r.TERMS_OF_USE]},{key:r.CHANGE_PHOTO,title:d(e)},{key:r.APPEARANCE,title:c(e)},{key:r.SECURITY,title:p(e)},{key:r.GETTING_STARTED,title:y(e)},{key:r.ABOUT,title:g(e)},{key:r.TERMS_OF_USE,title:h(e)}],n)},defaultKeys:r,locations:o.UtilityUtils.LOCATIONS};t.default=_},1079:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),o=a(n(29)),l=a(n(0)),r=a(n(2)),u=a(n(4)),s=a(n(1080)),d=u.default.bind(s.default),f={userDetail:r.default.string,userName:r.default.string,userPhoto:r.default.element},c=function(e){var t,n=e.userDetail,a=e.userName,r=e.userPhoto,u=(0,o.default)(e,["userDetail","userName","userPhoto"]),s=d(["user-data",u.className]);return(a||n)&&(t=l.default.createElement("div",{className:d("user-info")},!!a&&l.default.createElement("div",{className:d("name")},a),!!n&&l.default.createElement("div",{className:d("detail")},n))),l.default.createElement("div",(0,i.default)({},u,{className:s}),!!r&&l.default.cloneElement(r,{className:d("photo")}),t)};c.propTypes=f;var p=c;t.default=p},1080:function(e,t,n){e.exports={"user-data":"UserData-module__user-data___23_4-",photo:"UserData-module__photo___3KKfp","user-info":"UserData-module__user-info___2CSxn",name:"UserData-module__name___Be1kR",detail:"UserData-module__detail___2var2"}},1092:function(e,t,n){e.exports={"app-router":"ApplicationLayoutCommon-test-module__app-router___3hWCZ"}},2356:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=n(83),l=a(n(4)),r=a(n(1092)),u=n(1061),s=l.default.bind(r.default),d=function(){return i.default.createElement("div",{className:s("app-router"),id:"routing-menu-test"},i.default.createElement(o.MemoryRouter,null,i.default.createElement(u.RoutingMenu,{title:"Test Routing Menu",menuItems:[{text:"Item 1",path:"/item_1",hasSubMenu:!0},{text:"Item 2",path:"/item_2",hasSubMenu:!0},{text:"Item 3",path:"/item_3",hasSubMenu:!1}],layoutConfig:{},routingStackDelegate:{showParent:function(){}}})))};t.default=d}}]);
//# sourceMappingURL=68-3dd7f6aeaf99d8c30f16.js.map