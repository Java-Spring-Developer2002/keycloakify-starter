"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[6771],{"./node_modules/keycloakify/lib/pages/LoginVerifyEmail.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return LoginVerifyEmail}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function LoginVerifyEmail(props){const{kcContext:kcContext,i18n:i18n,doFetchDefaultThemeResources:doFetchDefaultThemeResources=!0,Template:Template}=props,kcProps=__rest(props,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),{msg:msg}=i18n,{url:url,user:user}=kcContext;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,Object.assign({},Object.assign({kcContext:kcContext,i18n:i18n,doFetchDefaultThemeResources:doFetchDefaultThemeResources},kcProps),{displayMessage:!1,headerNode:msg("emailVerifyTitle"),formNode:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"instruction"},msg("emailVerifyInstruction1",null==user?void 0:user.email)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"instruction"},msg("emailVerifyInstruction2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:url.loginAction},msg("doClickHere"))," ",msg("emailVerifyInstruction3")))}))}}}]);