import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'library-management',
    loadChildren: () =>
      import('./library-management/library-management.module').then(
        (mod) => mod.LibraryManagementModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error-pages/error.module').then((mod) => mod.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
