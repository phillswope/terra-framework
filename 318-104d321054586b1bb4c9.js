(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1098:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(19)),u=r(n(29)),a=r(n(21)),d=r(n(23)),s=r(n(24)),i=r(n(25)),f=r(n(26)),c=r(n(0)),l=r(n(2)),p=n(229),h={src:l.default.string.isRequired,onMount:l.default.func,onLaunch:l.default.func,onAuthorize:l.default.func,options:l.default.object,eventHandlers:l.default.arrayOf(l.default.shape({key:l.default.string,handler:l.default.func}))},v=function(e){function t(){return(0,a.default)(this,t),(0,s.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.xfcFrame=p.Consumer.mount(this.embeddedContentWrapper,this.props.src,this.props.options),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,u.default)(t,["src","onMount","onLaunch","onAuthorize","options","eventHandlers"]));return c.default.createElement("div",(0,o.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),t}(c.default.Component);v.propTypes=h;var m=v;t.default=m},1155:function(e,t,n){e.exports={iframe:"Consumer-module__iframe___tp87R"}},2485:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),u=n(229),a=r(n(4)),d=r(n(1098)),s=r(n(1155)),i=a.default.bind(s.default);u.Consumer.init();var f=function(){return o.default.createElement(d.default,{className:i("iframe"),src:"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider"})};t.default=f}}]);
//# sourceMappingURL=318-104d321054586b1bb4c9.js.map