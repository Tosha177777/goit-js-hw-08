function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(T,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function T(){var e=g();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?d(n,r-(e-c)):n}(e))}function h(e){return u=void 0,v&&o?b(e):(o=i=void 0,a)}function w(){var e=g(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(T,t),b(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input[name='email']"),message:document.querySelector(".feedback-form textarea[name='message']")};!function(){const e=localStorage.getItem("email");e&&(b.email.value=e)}(),function(){const e=localStorage.getItem("message");e&&(b.message.value=e)}(),b.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.clear()})),b.email.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("email",t),console.log(t)}),500)),b.message.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("message",t),console.log(t)}),500));
//# sourceMappingURL=03-feedback.80636faa.js.map
