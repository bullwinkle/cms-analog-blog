import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { AsyncPipe, NgFor } from '@angular/common';

interface PageAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
}

@Component({
    selector: 'app-pages-index',
    imports: [RouterLink, NgFor, AsyncPipe],
    template: `
    <h1>Pages</h1>
    <div *ngIf="pages$ | async as pages">
      <article *ngFor="let page of pages">
        <a [routerLink]="['/pages', page.attributes.slug]" class="no-underline">
          <img *ngIf="page.attributes.coverImage" [src]="page.attributes.coverImage" [alt]="page.attributes.title + ' cover image'" />
          <h2>{{ page.attributes.title }}</h2>
          <p>{{ page.attributes.description }}</p>
        </a>
      </article>
    </div>
  `
})
export default class PagesIndexPageComponent {
  protected pages$ = injectContentFiles<PageAttributes>()
    .filter((page) => page.slug.startsWith('/src/content/pages/'));
}
