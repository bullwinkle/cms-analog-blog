import { ɵ as __defineComponent, p as injectContent, a as __StandaloneFeature, A as AnalogMarkdownComponent, q as AsyncPipe, r as NgIf, R as RouterLink, h as __template, s as __pipe, k as __property, t as __pipeBind1, u as __elementContainerStart, b as __elementStart, c as __text, d as __elementEnd, f as __element, v as __elementContainerEnd, j as __advance, m as __textInterpolate, w as __nextContext, n as __sanitizeUrl } from './renderer.mjs';
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

function PageDetailComponent_ng_container_0_img_7_Template(rf, ctx) {
  if (rf & 1) {
    __element(0, "img", 4);
  }
  if (rf & 2) {
    const page_r1 = __nextContext().ngIf;
    __property("src", page_r1.attributes.coverImage, __sanitizeUrl)("alt", page_r1.attributes.title + " cover image");
  }
}
function PageDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    __elementContainerStart(0);
    __elementStart(1, "a", 1);
    __text(2, "\u2190 All pages");
    __elementEnd();
    __elementStart(3, "h1");
    __text(4);
    __elementEnd();
    __elementStart(5, "p");
    __text(6);
    __elementEnd();
    __template(7, PageDetailComponent_ng_container_0_img_7_Template, 1, 2, "img", 2);
    __element(8, "analog-markdown", 3);
    __elementContainerEnd();
  }
  if (rf & 2) {
    const page_r1 = ctx.ngIf;
    __advance(4);
    __textInterpolate(page_r1.attributes.title);
    __advance(2);
    __textInterpolate(page_r1.attributes.description);
    __advance();
    __property("ngIf", page_r1.attributes.coverImage);
    __advance();
    __property("content", page_r1.content);
  }
}
let PageDetailComponent = /* @__PURE__ */ (() => {
  var _PageDetailComponent;
  class PageDetailComponent2 {
    constructor() {
      this.page$ = injectContent({
        param: "slug",
        subdirectory: "pages"
      });
    }
  }
  _PageDetailComponent = PageDetailComponent2;
  _PageDetailComponent.\u0275fac = function PageDetailComponent_Factory(t) {
    return new (t || _PageDetailComponent)();
  };
  _PageDetailComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _PageDetailComponent,
    selectors: [["app-page-detail"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], ["routerLink", "/pages"], [3, "src", "alt", 4, "ngIf"], [3, "content"], [3, "src", "alt"]],
    template: function PageDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        __template(0, PageDetailComponent_ng_container_0_Template, 9, 4, "ng-container", 0);
        __pipe(1, "async");
      }
      if (rf & 2) {
        __property("ngIf", __pipeBind1(1, 1, ctx.page$));
      }
    },
    dependencies: [AnalogMarkdownComponent, AsyncPipe, NgIf, RouterLink],
    encapsulation: 2
  });
  return PageDetailComponent2;
})();

export { PageDetailComponent as default };
//# sourceMappingURL=_slug_.page-MTA0YmuL.mjs.map
