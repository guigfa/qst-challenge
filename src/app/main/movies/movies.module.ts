import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesModule } from './list-movies/list-movies.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    DetailedMovieComponent,
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ListMoviesModule,
    MaterialModule
  ],
  exports: [ListMoviesModule],
})
export class MoviesModule { }