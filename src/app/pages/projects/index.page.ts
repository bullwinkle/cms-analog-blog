// src/app/pages/projects/index.page.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';

export interface ProjectAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <section class="flex flex-col items-center">
      <h1 class="font-bold text-5xl py-8">Projects</h1>
      <div class="mt-8 border-t border-gray-200 flex gap-4 flex-wrap pt-10 w-full">
        <article *ngFor="let project of projects" class="card shadow-xl p-4 md:w-1/3 w-full">
          <a [routerLink]="['/projects', project.slug]" class="block hover:underline">
            <h2 class="card-title">{{ project.attributes.title }}</h2>
          </a>
          <p class="mt-2">{{ project.attributes.description }}</p>
          <img class="object-cover mt-4 w-full rounded-lg" [src]="project.attributes.coverImage" [alt]="project.attributes.title">
        </article>
      </div>
    </section>
  `,
})
export default class ProjectsIndexPage {
  readonly projects = injectContentFiles<ProjectAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/projects/')
  );
}
