function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,i,o,u,a,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,a=setTimeout(h,t),c?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function h(){var e=v();if(S(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function w(e){return a=void 0,p&&r?b(e):(r=i=void 0,u)}function O(){var e=v(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(h,t),b(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=f=i=a=void 0},O.flush=function(){return void 0===a?u:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector("form"),j=document.querySelector("input"),S=document.querySelector("textarea");b.addEventListener("input",e(t)((function(){const e=b.elements.email.value,t=b.elements.message.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))}),500)),b.addEventListener("submit",(function(e){if(""===b.value||""===S.value)return alert(" feel up all form!");e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(e){const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);t&&(j.value=n.email||"",S.value=n.message||"")}();
//# sourceMappingURL=03-feedback.2d9b4d65.js.map
