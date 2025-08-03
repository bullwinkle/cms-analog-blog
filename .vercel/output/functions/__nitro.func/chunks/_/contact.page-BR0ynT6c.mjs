import { ɵ as __defineComponent, a as __StandaloneFeature, b as __elementStart, c as __text, d as __elementEnd, e as __namespaceSVG, f as __element, g as __namespaceHTML } from './renderer.mjs';
import 'zone.js/node';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'rxjs';
import 'rxjs/operators';
import 'front-matter';
import 'marked-gfm-heading-id';
import 'marked';
import 'marked-mangle';
import 'marked-highlight';
import '../raw/index.mjs';

let ContactComponent = /* @__PURE__ */ (() => {
  var _ContactComponent;
  class ContactComponent2 {
  }
  _ContactComponent = ContactComponent2;
  _ContactComponent.\u0275fac = function ContactComponent_Factory(t) {
    return new (t || _ContactComponent)();
  };
  _ContactComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _ContactComponent,
    selectors: [["app-contact"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 42,
    vars: 0,
    consts: [[1, "flex", "items-center", "flex-col"], [1, "font-bold", "md:text-5xl", "text-3xl", "py-8"], [1, "footer", "bg-base-200", "text-base-content", "p-10", "md:max-w-4xl", "py-16", "w-full", "px-4"], ["width", "50", "height", "50", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", "fill-rule", "evenodd", "clip-rule", "evenodd", 1, "fill-current"], ["d", "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"], [1, "footer-title"], [1, "link", "link-hover"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "section", 0)(1, "h1", 1);
        __text(2, "Contact");
        __elementEnd();
        __elementStart(3, "div", 2)(4, "aside");
        __namespaceSVG();
        __elementStart(5, "svg", 3);
        __element(6, "path", 4);
        __elementEnd();
        __namespaceHTML();
        __elementStart(7, "p");
        __text(8, " ACME Industries Ltd. ");
        __element(9, "br");
        __text(10, " Providing reliable tech since 1992 ");
        __elementEnd()();
        __elementStart(11, "nav")(12, "h6", 5);
        __text(13, "Services");
        __elementEnd();
        __elementStart(14, "a", 6);
        __text(15, "Branding");
        __elementEnd();
        __elementStart(16, "a", 6);
        __text(17, "Design");
        __elementEnd();
        __elementStart(18, "a", 6);
        __text(19, "Marketing");
        __elementEnd();
        __elementStart(20, "a", 6);
        __text(21, "Advertisement");
        __elementEnd()();
        __elementStart(22, "nav")(23, "h6", 5);
        __text(24, "Company");
        __elementEnd();
        __elementStart(25, "a", 6);
        __text(26, "About us");
        __elementEnd();
        __elementStart(27, "a", 6);
        __text(28, "Contact");
        __elementEnd();
        __elementStart(29, "a", 6);
        __text(30, "Jobs");
        __elementEnd();
        __elementStart(31, "a", 6);
        __text(32, "Press kit");
        __elementEnd()();
        __elementStart(33, "nav")(34, "h6", 5);
        __text(35, "Legal");
        __elementEnd();
        __elementStart(36, "a", 6);
        __text(37, "Terms of use");
        __elementEnd();
        __elementStart(38, "a", 6);
        __text(39, "Privacy policy");
        __elementEnd();
        __elementStart(40, "a", 6);
        __text(41, "Cookie policy");
        __elementEnd()()()();
      }
    },
    styles: ["[_nghost-%COMP%] {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n      }"]
  });
  return ContactComponent2;
})();

export { ContactComponent as default };
//# sourceMappingURL=contact.page-BR0ynT6c.mjs.map
