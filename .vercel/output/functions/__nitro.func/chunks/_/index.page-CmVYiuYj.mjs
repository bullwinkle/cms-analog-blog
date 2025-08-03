import { ɵ as __defineComponent, a as __StandaloneFeature, R as RouterLink, b as __elementStart, c as __text, d as __elementEnd, f as __element } from './renderer.mjs';
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

let HomeComponent = /* @__PURE__ */ (() => {
  var _HomeComponent;
  class HomeComponent2 {
  }
  _HomeComponent = HomeComponent2;
  _HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)();
  };
  _HomeComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 14,
    vars: 0,
    consts: [[1, "hero"], [1, "hero-content", "text-center"], [1, "max-w-md", "flex", "flex-col", "items-center"], [1, "md:text-4xl", "text-2xl", "font-bold"], ["src", "/analog.svg", "alt", "AnalogJs logo"], [1, "py-6"], ["routerLink", "/blog", 1, "btn", "items-center", "bg-base-300"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        __text(4, " Welcome to the Analog Blog Starter Template ");
        __elementEnd();
        __elementStart(5, "figure");
        __element(6, "img", 4);
        __elementStart(7, "figcaption");
        __text(8, "AnalogJs: The Meta Framework");
        __elementEnd()();
        __elementStart(9, "p", 5);
        __text(10, " This is a starter template for a blog built with AnalogJs and DaisyUi. AnalogJs is a framework for building web applications with web components. ");
        __elementEnd();
        __elementStart(11, "button", 6)(12, "a");
        __text(13, "Go to Blog Posts");
        __elementEnd()()()()();
      }
    },
    dependencies: [RouterLink],
    styles: ["[_nghost-%COMP%] {\n        display: flex;\n        flex: 1;\n      }"]
  });
  return HomeComponent2;
})();

export { HomeComponent as default };
//# sourceMappingURL=index.page-CmVYiuYj.mjs.map
