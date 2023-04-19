"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[3870],{2889:function(e,s,c){c.d(s,{a:function(){return n}});var a=c(5319),t=c(969);function n(e){var s=e.defaultClasses;return{useGetClassName:function(e){var c=e.classes;return{getClassName:(0,t.O)((function(e){return(0,a.W)(e,s[e],null===c||void 0===c?void 0:c[e])}))}}}}},7747:function(e,s,c){c.d(s,{M:function(){return p}});var a=c(4165),t=c(2982),n=c(5861),l=c(885),r=c(2791),i=c(1630),o=c(6196),d=c(5319);function p(e){var s=e.doFetchDefaultThemeResources,c=e.stylesCommon,d=void 0===c?[]:c,p=e.styles,f=void 0===p?[]:p,m=e.url,k=e.scripts,h=void 0===k?[]:k,g=e.htmlClassName,C=e.bodyClassName,v=(0,r.useReducer)((function(){return!0}),!s),j=(0,l.Z)(v,2),b=j[0],x=j[1];return(0,r.useEffect)((function(){if(s){var e=!1,c=[];return(0,n.Z)((0,a.Z)().mark((function s(){var n;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=[],[].concat((0,t.Z)(d.map((function(e){return(0,o.pathJoin)(m.resourcesCommonPath,e)}))),(0,t.Z)(f.map((function(e){return(0,o.pathJoin)(m.resourcesPath,e)})))).reverse().forEach((function(e){var s=(0,i.t)({type:"css",position:"prepend",href:e}),a=s.prLoaded,t=s.remove;c.push(t),n.push(a)})),s.next=4,Promise.all(n);case 4:if(!e){s.next=6;break}return s.abrupt("return");case 6:x();case 7:case"end":return s.stop()}}),s)})))(),h.forEach((function(e){var s=(0,i.t)({type:"javascript",src:(0,o.pathJoin)(m.resourcesPath,e)}).remove;c.push(s)})),function(){e=!0,c.forEach((function(e){return e()}))}}}),[]),u({target:"html",className:g}),u({target:"body",className:C}),{isReady:b}}function u(e){var s=e.target,c=e.className;(0,r.useEffect)((function(){if(void 0!==c){var e=document.getElementsByTagName(s)[0].classList,a=(0,d.W)(c).split(" ");return e.add.apply(e,(0,t.Z)(a)),function(){e.remove.apply(e,(0,t.Z)(a))}}}),[c])}},3870:function(e,s,c){c.r(s),c.d(s,{default:function(){return i}});var a=c(184),t=c(8258),n=c(5319),l=c(7747),r=c(7107);function i(e){var s=e.displayInfo,c=void 0!==s&&s,i=e.displayMessage,o=void 0===i||i,d=e.displayRequiredFields,p=void 0!==d&&d,u=e.displayWide,f=void 0!==u&&u,m=e.showAnotherWayIfPresent,k=void 0===m||m,h=e.headerNode,g=e.showUsernameNode,C=void 0===g?null:g,v=e.infoNode,j=void 0===v?null:v,b=e.kcContext,x=e.i18n,y=e.doUseDefaultCss,w=e.classes,N=e.children,O=(0,r.v)({doUseDefaultCss:y,classes:w}).getClassName,F=x.msg,A=x.changeLocale,L=x.labelBySupportedLanguageTag,I=x.currentLanguageTag,W=b.realm,S=b.locale,T=b.auth,E=b.url,H=b.message,_=b.isAppInitiatedAction;return(0,l.M)({doFetchDefaultThemeResources:y,url:E,stylesCommon:["node_modules/patternfly/dist/css/patternfly.min.css","node_modules/patternfly/dist/css/patternfly-additions.min.css","lib/zocial/zocial.css"],styles:["css/login.css"],htmlClassName:O("kcHtmlClass"),bodyClassName:void 0}).isReady?(0,a.jsxs)("div",Object.assign({className:O("kcLoginClass")},{children:[(0,a.jsx)("div",Object.assign({id:"kc-header",className:O("kcHeaderClass")},{children:(0,a.jsx)("div",Object.assign({id:"kc-header-wrapper",className:O("kcHeaderWrapperClass")},{children:F("loginTitleHtml",W.displayNameHtml)}))})),(0,a.jsxs)("div",Object.assign({className:(0,n.W)(O("kcFormCardClass"),f&&O("kcFormCardAccountClass"))},{children:[(0,a.jsxs)("header",Object.assign({className:O("kcFormHeaderClass")},{children:[W.internationalizationEnabled&&((0,t.h)(void 0!==S),!0)&&S.supported.length>1&&(0,a.jsx)("div",Object.assign({id:"kc-locale"},{children:(0,a.jsx)("div",Object.assign({id:"kc-locale-wrapper",className:O("kcLocaleWrapperClass")},{children:(0,a.jsxs)("div",Object.assign({className:"kc-dropdown",id:"kc-locale-dropdown"},{children:[(0,a.jsx)("a",Object.assign({href:"#",id:"kc-current-locale-link"},{children:L[I]})),(0,a.jsx)("ul",{children:S.supported.map((function(e){var s=e.languageTag;return(0,a.jsx)("li",Object.assign({className:"kc-dropdown-item"},{children:(0,a.jsx)("a",Object.assign({href:"#",onClick:function(){return A(s)}},{children:L[s]}))}),s)}))})]}))}))})),void 0===T||!T.showUsername||T.showResetCredentials?p?(0,a.jsxs)("div",Object.assign({className:O("kcContentWrapperClass")},{children:[(0,a.jsx)("div",Object.assign({className:(0,n.W)(O("kcLabelWrapperClass"),"subtitle")},{children:(0,a.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,a.jsx)("span",Object.assign({className:"required"},{children:"*"})),F("requiredFields")]}))})),(0,a.jsx)("div",Object.assign({className:"col-md-10"},{children:(0,a.jsx)("h1",Object.assign({id:"kc-page-title"},{children:h}))}))]})):(0,a.jsx)("h1",Object.assign({id:"kc-page-title"},{children:h})):p?(0,a.jsxs)("div",Object.assign({className:O("kcContentWrapperClass")},{children:[(0,a.jsx)("div",Object.assign({className:(0,n.W)(O("kcLabelWrapperClass"),"subtitle")},{children:(0,a.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,a.jsx)("span",Object.assign({className:"required"},{children:"*"}))," ",F("requiredFields")]}))})),(0,a.jsxs)("div",Object.assign({className:"col-md-10"},{children:[C,(0,a.jsx)("div",Object.assign({className:O("kcFormGroupClass")},{children:(0,a.jsxs)("div",Object.assign({id:"kc-username"},{children:[(0,a.jsx)("label",Object.assign({id:"kc-attempted-username"},{children:null===T||void 0===T?void 0:T.attemptedUsername})),(0,a.jsx)("a",Object.assign({id:"reset-login",href:E.loginRestartFlowUrl},{children:(0,a.jsxs)("div",Object.assign({className:"kc-login-tooltip"},{children:[(0,a.jsx)("i",{className:O("kcResetFlowIcon")}),(0,a.jsx)("span",Object.assign({className:"kc-tooltip-text"},{children:F("restartLoginTooltip")}))]}))}))]}))}))]}))]})):(0,a.jsxs)(a.Fragment,{children:[C,(0,a.jsx)("div",Object.assign({className:O("kcFormGroupClass")},{children:(0,a.jsxs)("div",Object.assign({id:"kc-username"},{children:[(0,a.jsx)("label",Object.assign({id:"kc-attempted-username"},{children:null===T||void 0===T?void 0:T.attemptedUsername})),(0,a.jsx)("a",Object.assign({id:"reset-login",href:E.loginRestartFlowUrl},{children:(0,a.jsxs)("div",Object.assign({className:"kc-login-tooltip"},{children:[(0,a.jsx)("i",{className:O("kcResetFlowIcon")}),(0,a.jsx)("span",Object.assign({className:"kc-tooltip-text"},{children:F("restartLoginTooltip")}))]}))}))]}))}))]})]})),(0,a.jsx)("div",Object.assign({id:"kc-content"},{children:(0,a.jsxs)("div",Object.assign({id:"kc-content-wrapper"},{children:[o&&void 0!==H&&("warning"!==H.type||!_)&&(0,a.jsxs)("div",Object.assign({className:(0,n.W)("alert","alert-".concat(H.type))},{children:["success"===H.type&&(0,a.jsx)("span",{className:O("kcFeedbackSuccessIcon")}),"warning"===H.type&&(0,a.jsx)("span",{className:O("kcFeedbackWarningIcon")}),"error"===H.type&&(0,a.jsx)("span",{className:O("kcFeedbackErrorIcon")}),"info"===H.type&&(0,a.jsx)("span",{className:O("kcFeedbackInfoIcon")}),(0,a.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:H.summary}})]})),N,void 0!==T&&T.showTryAnotherWayLink&&k&&(0,a.jsx)("form",Object.assign({id:"kc-select-try-another-way-form",action:E.loginAction,method:"post",className:(0,n.W)(f&&O("kcContentWrapperClass"))},{children:(0,a.jsx)("div",Object.assign({className:(0,n.W)(f&&[O("kcFormSocialAccountContentClass"),O("kcFormSocialAccountClass")])},{children:(0,a.jsxs)("div",Object.assign({className:O("kcFormGroupClass")},{children:[(0,a.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,a.jsx)("a",Object.assign({href:"#",id:"try-another-way",onClick:function(){return document.forms["kc-select-try-another-way-form"].submit(),!1}},{children:F("doTryAnotherWay")}))]}))}))})),c&&(0,a.jsx)("div",Object.assign({id:"kc-info",className:O("kcSignUpClass")},{children:(0,a.jsx)("div",Object.assign({id:"kc-info-wrapper",className:O("kcInfoAreaWrapperClass")},{children:j}))}))]}))}))]}))]})):null}},7107:function(e,s,c){c.d(s,{v:function(){return a}});var a=(0,c(2889).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},4943:function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(e){if("string"===typeof e)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(e,this.firstChild)})},8258:function(e,s,c){c.d(s,{h:function(){return a.h}});var a=c(9883)},5319:function(e,s,c){c.d(s,{W:function(){return n}});var a=c(2982),t=c(9883);var n=function e(){for(var s=arguments.length,c=0,n="";c<s;c++){var l=c<0||arguments.length<=c?void 0:arguments[c];if(null!=l){var r=void 0;switch(typeof l){case"boolean":break;case"object":if(Array.isArray(l))r=e.apply(void 0,(0,a.Z)(l));else for(var i in(0,t.h)(!!1),r="",l)l[i]&&i&&(r&&(r+=" "),r+=i);break;default:r=l}r&&(n&&(n+=" "),n+=r)}}return n}},1630:function(e,s,c){c.d(s,{t:function(){return t}});c(4943);var a=c(3172);function t(e){var s=document.createElement(function(){switch(e.type){case"css":return"link";case"javascript":return"script"}}()),c=new a.Deferred;return s.addEventListener("load",(function(){return c.resolve()})),Object.assign(s,function(){switch(e.type){case"css":return{href:e.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:e.src,type:"text/javascript"}}}()),document.getElementsByTagName("head")[0][function(){switch(e.type){case"javascript":return"appendChild";case"css":return function(){switch(e.position){case"append":return"appendChild";case"prepend":return"prepend"}}()}}()](s),{prLoaded:c.pr,remove:function(){return s.remove()}}}}}]);
//# sourceMappingURL=3870.7c50e136.chunk.js.map