import { ɵ as __defineComponent, p as injectContent, a as __StandaloneFeature, A as AnalogMarkdownComponent, q as AsyncPipe, r as NgIf, R as RouterLink, h as __template, s as __pipe, k as __property, t as __pipeBind1, u as __elementContainerStart, b as __elementStart, e as __namespaceSVG, f as __element, d as __elementEnd, g as __namespaceHTML, c as __text, v as __elementContainerEnd, j as __advance, m as __textInterpolate, n as __sanitizeUrl } from './renderer.mjs';
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

function ProjectPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    __elementContainerStart(0);
    __elementStart(1, "article", 1)(2, "a", 2);
    __namespaceSVG();
    __elementStart(3, "svg", 3);
    __element(4, "path", 4);
    __elementEnd();
    __namespaceHTML();
    __elementStart(5, "span");
    __text(6, "Back to Projects");
    __elementEnd()();
    __elementStart(7, "h1", 5);
    __text(8);
    __elementEnd();
    __elementStart(9, "p", 6);
    __text(10);
    __elementEnd();
    __element(11, "img", 7)(12, "analog-markdown", 8);
    __elementEnd();
    __elementContainerEnd();
  }
  if (rf & 2) {
    const project_r1 = ctx.ngIf;
    __advance(8);
    __textInterpolate(project_r1.attributes.title);
    __advance(2);
    __textInterpolate(project_r1.attributes.description);
    __advance();
    __property("src", project_r1.attributes.coverImage, __sanitizeUrl)("alt", project_r1.attributes.title);
    __advance();
    __property("content", project_r1.content);
  }
}
let ProjectPage = /* @__PURE__ */ (() => {
  var _ProjectPage;
  class ProjectPage2 {
    constructor() {
      this.project$ = injectContent({
        param: "slug",
        subdirectory: "projects"
      });
    }
  }
  _ProjectPage = ProjectPage2;
  _ProjectPage.\u0275fac = function ProjectPage_Factory(t) {
    return new (t || _ProjectPage)();
  };
  _ProjectPage.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _ProjectPage,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [1, "flex", "flex-col"], ["routerLink", "/projects", 1, "btn", "items-center", "mb-8", "w-64", "flex", "flex-row"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5L8.25 12l7.5-7.5"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-lg", "mb-4"], [1, "object-cover", "rounded-lg", "mb-6", 3, "src", "alt"], [3, "content"]],
    template: function ProjectPage_Template(rf, ctx) {
      if (rf & 1) {
        __template(0, ProjectPage_ng_container_0_Template, 13, 5, "ng-container", 0);
        __pipe(1, "async");
      }
      if (rf & 2) {
        __property("ngIf", __pipeBind1(1, 1, ctx.project$));
      }
    },
    dependencies: [AnalogMarkdownComponent, AsyncPipe, NgIf, RouterLink],
    encapsulation: 2
  });
  return ProjectPage2;
})();

export { ProjectPage as default };
//# sourceMappingURL=_slug_.page-pP8qkh45.mjs.map
