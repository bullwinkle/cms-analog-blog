import { ɵ as __defineComponent, i as injectContentFiles, a as __StandaloneFeature, R as RouterLink, N as NgForOf, q as AsyncPipe, b as __elementStart, c as __text, d as __elementEnd, h as __template, s as __pipe, j as __advance, k as __property, t as __pipeBind1, l as __pureFunction1, m as __textInterpolate, f as __element, w as __nextContext, n as __sanitizeUrl } from './renderer.mjs';
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

const _c0 = (a0) => ["/pages", a0];
function PagesIndexPageComponent_div_2_article_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    __element(0, "img", 4);
  }
  if (rf & 2) {
    const page_r1 = __nextContext().$implicit;
    __property("src", page_r1.attributes.coverImage, __sanitizeUrl)("alt", page_r1.attributes.title + " cover image");
  }
}
function PagesIndexPageComponent_div_2_article_1_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "article")(1, "a", 2);
    __template(2, PagesIndexPageComponent_div_2_article_1_img_2_Template, 1, 2, "img", 3);
    __elementStart(3, "h2");
    __text(4);
    __elementEnd();
    __elementStart(5, "p");
    __text(6);
    __elementEnd()()();
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    __advance();
    __property("routerLink", __pureFunction1(4, _c0, page_r1.attributes.slug));
    __advance();
    __property("ngIf", page_r1.attributes.coverImage);
    __advance(2);
    __textInterpolate(page_r1.attributes.title);
    __advance(2);
    __textInterpolate(page_r1.attributes.description);
  }
}
function PagesIndexPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "div");
    __template(1, PagesIndexPageComponent_div_2_article_1_Template, 7, 6, "article", 1);
    __elementEnd();
  }
  if (rf & 2) {
    const pages_r2 = ctx.ngIf;
    __advance();
    __property("ngForOf", pages_r2);
  }
}
let PagesIndexPageComponent = /* @__PURE__ */ (() => {
  var _PagesIndexPageComponent;
  class PagesIndexPageComponent2 {
    constructor() {
      this.pages$ = injectContentFiles().filter((page) => page.slug.startsWith("/src/content/pages/"));
    }
  }
  _PagesIndexPageComponent = PagesIndexPageComponent2;
  _PagesIndexPageComponent.\u0275fac = function PagesIndexPageComponent_Factory(t) {
    return new (t || _PagesIndexPageComponent)();
  };
  _PagesIndexPageComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _PagesIndexPageComponent,
    selectors: [["app-pages-index"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 4,
    vars: 3,
    consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "no-underline", 3, "routerLink"], [3, "src", "alt", 4, "ngIf"], [3, "src", "alt"]],
    template: function PagesIndexPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "h1");
        __text(1, "Pages");
        __elementEnd();
        __template(2, PagesIndexPageComponent_div_2_Template, 2, 1, "div", 0);
        __pipe(3, "async");
      }
      if (rf & 2) {
        __advance(2);
        __property("ngIf", __pipeBind1(3, 1, ctx.pages$));
      }
    },
    dependencies: [RouterLink, NgForOf, AsyncPipe],
    encapsulation: 2
  });
  return PagesIndexPageComponent2;
})();

export { PagesIndexPageComponent as default };
//# sourceMappingURL=index.page-kueRofXu.mjs.map
