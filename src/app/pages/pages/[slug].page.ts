<script lang="ts">
import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

interface PageAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
}

@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink],
  template: `
    <ng-container *ngIf="page$ | async as page">
      <a routerLink="/pages">\u2190 All pages</a>
      <h1>{{ page.attributes.title }}</h1>
      <p>{{ page.attributes.description }}</p>
      <img *ngIf="page.attributes.coverImage" [src]="page.attributes.coverImage" [alt]="page.attributes.title + ' cover image'" />
      <analog-markdown [content]="page.content"></analog-markdown>
    </ng-container>
  `,
})
export default class PageDetailComponent {
  protected page$ = injectContent<PageAttributes>({
    param: 'slug',
    subdirectory: 'pages',
  });
}
</script>
