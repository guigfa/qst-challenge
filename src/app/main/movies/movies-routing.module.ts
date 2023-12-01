import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';

const routes: Routes = [
  { path: '', component: ListMoviesComponent },
  { path: ':title', component: DetailedMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
