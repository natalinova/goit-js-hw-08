!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(O,t),d?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=p();if(j(e))return x(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function x(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function h(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=E(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(E(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?u:x(p())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S={form:document.querySelector(".feedback-form"),mail:document.querySelector("input"),textarea:document.querySelector("textarea")};S.form.addEventListener("submit",(function(e){var t=JSON.parse(localStorage.getItem("FEEDBACK"));return console.log(t),e.target.reset(),console.log(e),localStorage.removeItem("FEEDBACK"),t})),S.form.addEventListener("input",e(t)((function(e){S.mail="",S.textarea="",j[e.target.name]=e.target.value,localStorage.setItem("FEEDBACK",JSON.stringify(j))}),500)),document.addEventListener("click",(function(e){var t=JSON.parse(localStorage.getItem("FEEDBACK"));t&&(S.mail.value=t.email,S.textarea.value=t.message)}));var j={}}();
//# sourceMappingURL=03-feedback.b57d27bb.js.map