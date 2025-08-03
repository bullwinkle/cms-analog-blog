// src/app/pages/projects/[slug].page.ts
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProjectAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
    imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink],
    template: `
    <ng-container *ngIf="project$ | async as project">
      <article class="flex flex-col">
        <a routerLink="/projects" class="btn items-center mb-8 w-64 flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span>Back to Projects</span>
        </a>
        <h1 class="text-4xl font-bold mb-4">{{ project.attributes.title }}</h1>
        <p class="text-lg mb-4">{{ project.attributes.description }}</p>
        <img class="object-cover rounded-lg mb-6" [src]="project.attributes.coverImage" [alt]="project.attributes.title" />
        <analog-markdown [content]="project.content"></analog-markdown>
      </article>
    </ng-container>
  `
})
export default class ProjectPage {
  readonly project$ = injectContent<ProjectAttributes>({
    param: 'slug',
    subdirectory: 'projects',
  });
}
