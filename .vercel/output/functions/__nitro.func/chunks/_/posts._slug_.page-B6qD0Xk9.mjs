import { ɵ as __defineComponent, p as injectContent, a as __StandaloneFeature, A as AnalogMarkdownComponent, q as AsyncPipe, r as NgIf, R as RouterLink, h as __template, s as __pipe, k as __property, t as __pipeBind1, u as __elementContainerStart, b as __elementStart, e as __namespaceSVG, f as __element, d as __elementEnd, g as __namespaceHTML, c as __text, v as __elementContainerEnd, j as __advance } from './renderer.mjs';
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

function BlogPostComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    __elementContainerStart(0);
    __elementStart(1, "article", 1)(2, "a", 2);
    __namespaceSVG();
    __elementStart(3, "svg", 3);
    __element(4, "path", 4);
    __elementEnd();
    __namespaceHTML();
    __elementStart(5, "span");
    __text(6, "Back to Blog Posts");
    __elementEnd()();
    __element(7, "analog-markdown", 5);
    __elementStart(8, "a", 2);
    __namespaceSVG();
    __elementStart(9, "svg", 3);
    __element(10, "path", 4);
    __elementEnd();
    __namespaceHTML();
    __elementStart(11, "span");
    __text(12, "Back to Blog Posts");
    __elementEnd()()();
    __elementContainerEnd();
  }
  if (rf & 2) {
    const post_r1 = ctx.ngIf;
    __advance(7);
    __property("content", post_r1.content);
  }
}
let BlogPostComponent = /* @__PURE__ */ (() => {
  var _BlogPostComponent;
  class BlogPostComponent2 {
    constructor() {
      this.post$ = injectContent({
        param: "slug",
        subdirectory: "blog"
      });
    }
  }
  _BlogPostComponent = BlogPostComponent2;
  _BlogPostComponent.\u0275fac = function BlogPostComponent_Factory(t) {
    return new (t || _BlogPostComponent)();
  };
  _BlogPostComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _BlogPostComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [1, "flex", "flex-col", "prose", "prose-slate", "dark:prose-invert", "md:max-w-4xl", "py-16", "w-full", "px-4"], ["routerLink", "/blog", 1, "btn", "items-center", "mb-8", "w-64", "flex", "flex-row"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"], [1, "markdown", 3, "content"]],
    template: function BlogPostComponent_Template(rf, ctx) {
      if (rf & 1) {
        __template(0, BlogPostComponent_ng_container_0_Template, 13, 1, "ng-container", 0);
        __pipe(1, "async");
      }
      if (rf & 2) {
        __property("ngIf", __pipeBind1(1, 1, ctx.post$));
      }
    },
    dependencies: [AnalogMarkdownComponent, AsyncPipe, NgIf, RouterLink],
    styles: ["[_nghost-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }"]
  });
  return BlogPostComponent2;
})();

export { BlogPostComponent as default };
//# sourceMappingURL=posts._slug_.page-B6qD0Xk9.mjs.map
