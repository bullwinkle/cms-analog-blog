import { ɵ as __defineComponent, i as injectContentFiles, a as __StandaloneFeature, R as RouterLink, N as NgForOf, b as __elementStart, c as __text, d as __elementEnd, h as __template, j as __advance, k as __property, f as __element, l as __pureFunction1, m as __textInterpolate, n as __sanitizeUrl } from './renderer.mjs';
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

const _c0 = (a0) => ["/projects", a0];
function ProjectsIndexPage_article_4_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "article", 4)(1, "a", 5)(2, "h2", 6);
    __text(3);
    __elementEnd()();
    __elementStart(4, "p", 7);
    __text(5);
    __elementEnd();
    __element(6, "img", 8);
    __elementEnd();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    __advance();
    __property("routerLink", __pureFunction1(5, _c0, project_r1.slug));
    __advance(2);
    __textInterpolate(project_r1.attributes.title);
    __advance(2);
    __textInterpolate(project_r1.attributes.description);
    __advance();
    __property("src", project_r1.attributes.coverImage, __sanitizeUrl)("alt", project_r1.attributes.title);
  }
}
let ProjectsIndexPage = /* @__PURE__ */ (() => {
  var _ProjectsIndexPage;
  class ProjectsIndexPage2 {
    constructor() {
      this.projects = injectContentFiles((contentFile) => contentFile.filename.includes("/src/content/projects/"));
    }
  }
  _ProjectsIndexPage = ProjectsIndexPage2;
  _ProjectsIndexPage.\u0275fac = function ProjectsIndexPage_Factory(t) {
    return new (t || _ProjectsIndexPage)();
  };
  _ProjectsIndexPage.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _ProjectsIndexPage,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 5,
    vars: 1,
    consts: [[1, "flex", "flex-col", "items-center"], [1, "font-bold", "text-5xl", "py-8"], [1, "mt-8", "border-t", "border-gray-200", "flex", "gap-4", "flex-wrap", "pt-10", "w-full"], ["class", "card shadow-xl p-4 md:w-1/3 w-full", 4, "ngFor", "ngForOf"], [1, "card", "shadow-xl", "p-4", "md:w-1/3", "w-full"], [1, "block", "hover:underline", 3, "routerLink"], [1, "card-title"], [1, "mt-2"], [1, "object-cover", "mt-4", "w-full", "rounded-lg", 3, "src", "alt"]],
    template: function ProjectsIndexPage_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "section", 0)(1, "h1", 1);
        __text(2, "Projects");
        __elementEnd();
        __elementStart(3, "div", 2);
        __template(4, ProjectsIndexPage_article_4_Template, 7, 7, "article", 3);
        __elementEnd()();
      }
      if (rf & 2) {
        __advance(4);
        __property("ngForOf", ctx.projects);
      }
    },
    dependencies: [RouterLink, NgForOf],
    encapsulation: 2
  });
  return ProjectsIndexPage2;
})();

export { ProjectsIndexPage as default };
//# sourceMappingURL=index.page-sJLstH35.mjs.map
