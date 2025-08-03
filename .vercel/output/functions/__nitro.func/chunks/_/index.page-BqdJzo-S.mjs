import { ɵ as __defineComponent, i as injectContentFiles, a as __StandaloneFeature, R as RouterLink, N as NgForOf, b as __elementStart, c as __text, d as __elementEnd, h as __template, j as __advance, k as __property, f as __element, l as __pureFunction1, m as __textInterpolate, n as __sanitizeUrl, o as __textInterpolate1 } from './renderer.mjs';
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

const _c0 = (a0) => ["/blog", "posts", a0];
function BlogComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "div", 7)(1, "div", 8)(2, "a", 9)(3, "h2", 10);
    __text(4);
    __elementEnd()();
    __elementStart(5, "p");
    __text(6);
    __elementEnd();
    __elementStart(7, "div", 11)(8, "div", 12);
    __element(9, "img", 13);
    __elementStart(10, "div", 14)(11, "p", 15);
    __element(12, "span", 16);
    __text(13);
    __elementEnd();
    __elementStart(14, "p");
    __text(15);
    __elementEnd()()()()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    __advance(2);
    __property("routerLink", __pureFunction1(6, _c0, post_r1.slug));
    __advance(2);
    __textInterpolate(post_r1 == null ? null : post_r1.attributes == null ? null : post_r1.attributes.title);
    __advance(2);
    __textInterpolate(post_r1 == null ? null : post_r1.attributes == null ? null : post_r1.attributes.description);
    __advance(3);
    __property("src", post_r1 == null ? null : post_r1.attributes == null ? null : post_r1.attributes.coverImage, __sanitizeUrl);
    __advance(4);
    __textInterpolate1(" ", (post_r1 == null ? null : post_r1.attributes == null ? null : post_r1.attributes.author) || "Nelson Gutierrez", " ");
    __advance(2);
    __textInterpolate1(" ", (post_r1 == null ? null : post_r1.attributes == null ? null : post_r1.attributes.authorInfo) || "Angular Developer", " ");
  }
}
let BlogComponent = /* @__PURE__ */ (() => {
  var _BlogComponent;
  class BlogComponent2 {
    constructor() {
      this.posts = injectContentFiles((contentFile) => contentFile.filename.includes("/src/content/blog"));
    }
  }
  _BlogComponent = BlogComponent2;
  _BlogComponent.\u0275fac = function BlogComponent_Factory(t) {
    return new (t || _BlogComponent)();
  };
  _BlogComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _BlogComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 9,
    vars: 1,
    consts: [[1, "bg-base-100", "py-24", "sm:py-32"], [1, "mx-auto", "max-w-7xl", "px-6", "lg:px-8"], [1, "mx-auto", "max-w-2xl", "lg:mx-0"], [1, "font-bold", "md:text-5xl", "text-3xl", "tracking-tigh"], [1, "mt-2", "text-lg", "leading-8"], [1, "mt-10", "border-t", "border-gray-200", "flex", "gap-4", "pt-10", "flex-wrap", "gap-y-8"], ["class", "card w-96 bg-base-200 shadow-xl", 4, "ngFor", "ngForOf"], [1, "card", "w-96", "bg-base-200", "shadow-xl"], [1, "card-body"], [1, "hover:underline", 3, "routerLink"], [1, "card-title"], [1, "card-actions", "justify-end"], [1, "relative", "mt-8", "flex", "items-center", "gap-x-4"], ["alt", "", 1, "object-cover", "h-12", "w-12", "rounded-full", 3, "src"], [1, "text-sm", "leading-6"], [1, "font-semibold"], [1, "absolute", "inset-0"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        __text(4, " From the blog ");
        __elementEnd();
        __elementStart(5, "p", 4);
        __text(6, " Learn how to grow your business with our expert advice. ");
        __elementEnd()();
        __elementStart(7, "div", 5);
        __template(8, BlogComponent_div_8_Template, 16, 8, "div", 6);
        __elementEnd()()();
      }
      if (rf & 2) {
        __advance(8);
        __property("ngForOf", ctx.posts);
      }
    },
    dependencies: [RouterLink, NgForOf],
    styles: ["[_nghost-%COMP%] {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n      }"]
  });
  return BlogComponent2;
})();

export { BlogComponent as default };
//# sourceMappingURL=index.page-BqdJzo-S.mjs.map
