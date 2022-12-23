import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((mod) => mod.MoviesModule),
  },
  {
    path: 'genres',
    loadChildren: () =>
      import('./genres/genres.module').then((mod) => mod.GenresModule),
  },
  {
    path: 'tv-shows',
    loadChildren: () =>
      import('./tv-shows/tv-shows.module').then((mod) => mod.TvShowsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
