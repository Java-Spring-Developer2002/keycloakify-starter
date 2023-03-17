"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[3845],{"./node_modules/keycloakify/lib/pages/LoginConfigTotp.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return LoginConfigTotp}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/lib/tools/clsx.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function LoginConfigTotp(props){var _a;const{kcContext:kcContext,i18n:i18n,doFetchDefaultThemeResources:doFetchDefaultThemeResources=!0,Template:Template}=props,kcProps=__rest(props,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),{url:url,isAppInitiatedAction:isAppInitiatedAction,totp:totp,mode:mode,messagesPerField:messagesPerField}=kcContext,{msg:msg,msgStr:msgStr}=i18n,algToKeyUriAlg={HmacSHA1:"SHA1",HmacSHA256:"SHA256",HmacSHA512:"SHA512"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template,Object.assign({},Object.assign({kcContext:kcContext,i18n:i18n,doFetchDefaultThemeResources:doFetchDefaultThemeResources},kcProps),{headerNode:msg("loginTotpTitle"),formNode:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol",{id:"kc-totp-settings"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,msg("loginTotpStep1")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{id:"kc-totp-supported-apps"},totp.policy.supportedApplications.map((app=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,app))))),mode&&"manual"==mode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,msg("loginTotpManualStep2")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"kc-totp-secret-key"},totp.totpSecretEncoded)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:totp.qrUrl,id:"mode-barcode"},msg("loginTotpScanBarcode")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,msg("loginTotpManualStep3")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{id:"kc-totp-type"},msg("loginTotpType"),": ",msg(`loginTotp.${totp.policy.type}`)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{id:"kc-totp-algorithm"},msg("loginTotpAlgorithm"),": ",null!==(_a=null==algToKeyUriAlg?void 0:algToKeyUriAlg[totp.policy.algorithm])&&void 0!==_a?_a:totp.policy.algorithm),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{id:"kc-totp-digits"},msg("loginTotpDigits"),": ",totp.policy.digits),"totp"===totp.policy.type?react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{id:"kc-totp-period"},msg("loginTotpInterval"),": ",totp.policy.period):react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{id:"kc-totp-counter"},msg("loginTotpCounter"),": ",totp.policy.initialCounter))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,msg("loginTotpStep2")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{id:"kc-totp-secret-qr-code",src:`data:image/png;base64, ${totp.totpSecretQrCode}`,alt:"Figure: Barcode"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:totp.manualUrl,id:"mode-manual"},msg("loginTotpUnableToScan")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,msg("loginTotpStep3")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,msg("loginTotpStep3DeviceName")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{action:url.loginAction,className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormClass),id:"kc-totp-settings-form",method:"post"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormGroupClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputWrapperClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"totp",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcLabelClass)},msg("authenticatorCode"))," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"required"},"*")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputWrapperClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"text",id:"totp",name:"totp",autoComplete:"off",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputClass),"aria-invalid":messagesPerField.existsError("totp")}),messagesPerField.existsError("totp")&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"input-error-otp-code",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputErrorMessageClass),"aria-live":"polite"},messagesPerField.get("totp"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"hidden",id:"totpSecret",name:"totpSecret",value:totp.totpSecret}),mode&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"hidden",id:"mode",value:mode})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormGroupClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputWrapperClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"userLabel",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcLabelClass)},msg("loginTotpDeviceName"))," ",totp.otpCredentials.length>=1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"required"},"*")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputWrapperClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"text",id:"userLabel",name:"userLabel",autoComplete:"off",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputClass),"aria-invalid":messagesPerField.existsError("userLabel")}),messagesPerField.existsError("userLabel")&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"input-error-otp-label",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputErrorMessageClass),"aria-live":"polite"},messagesPerField.get("userLabel")))),isAppInitiatedAction?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"submit",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcButtonClass,kcProps.kcButtonPrimaryClass,kcProps.kcButtonLargeClass),id:"saveTOTPBtn",value:msgStr("doSubmit")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcButtonClass,kcProps.kcButtonDefaultClass,kcProps.kcButtonLargeClass,kcProps.kcButtonLargeClass),id:"cancelTOTPBtn",name:"cancel-aia",value:"true"},"$",msg("doCancel"))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"submit",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcButtonClass,kcProps.kcButtonPrimaryClass,kcProps.kcButtonLargeClass),id:"saveTOTPBtn",value:msgStr("doSubmit")})))}))}}}]);