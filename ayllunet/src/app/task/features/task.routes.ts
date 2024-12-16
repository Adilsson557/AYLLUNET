import { Routes } from '@angular/router';

const newLocal = './task-list/task-list.component';
export default [
  {
    path: '',
    loadComponent: () => import('./task-list/task-list.component'),
  },
  {
    path: '',
    loadComponent: () => import('./post/post.component'),
  },
] as Routes;