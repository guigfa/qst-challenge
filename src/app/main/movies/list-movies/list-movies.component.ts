import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/Movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent  implements OnInit {
  title = 'qst-test';
  movies: Movie[] = [];
  favoritedsTitles: string[] =  JSON.parse(localStorage.getItem('favorited_titles')) ?? [];
  favoritedMovies: Movie[] = JSON.parse(localStorage.getItem('favorited_movies')) ?? [];

  constructor(private moviesService: MoviesService, private router: Router, private snackbar: MatSnackBar) {
    this.moviesService.getAllMovies().subscribe(movies => this.movies = movies);
  }

  ngOnInit(): void {
  }

  ascendingSortByTitle() {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
    console.log(this.movies);
  }
  
  descendingSortByTitle() {
    this.movies.sort((a, b) => b.title.localeCompare(a.title));
  
  }

  ascendingSortByDate() {
    this.movies.sort((a, b) => {
      const dateA = new Date(a.released_date);
      const dateB = new Date(b.released_date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  descendingSortByDate() {
    this.movies.sort((a, b) => {
      const dateA = new Date(a.released_date);
      const dateB = new Date(b.released_date);

      return dateB.getTime() - dateA.getTime();
    });
  }

  redirectToMovie(route: any) {
    this.router.navigate([`${route}`]);
  }

  favorited(title: string) {
    this.favoritedsTitles.push(title);
    const movie = this.movies.find((movie) => movie.title === title);
    this.favoritedMovies.push(movie);

    this.snackbar.open(`${movie.title} added to Watch List!`, 'X', {
      duration: 1000,
    });
    this.setLocalStorage();
  }

  unfavorited(title: string) {
    const movie = this.favoritedsTitles.find((movie) => movie === title);
    this.favoritedsTitles = this.favoritedsTitles.filter(movie => movie !== title);
    const control: Movie[] = [];
    this.favoritedMovies.forEach(movie => {
      if(movie.title === title) return;
      control.push(movie);
    })
    this.favoritedMovies = control;
    
    this.snackbar.open(`${movie} removed from Watch List!`, 'X', { duration: 1000 });
    this.setLocalStorage();
  }

  setLocalStorage(){
    localStorage.setItem('favorited_titles', JSON.stringify(this.favoritedsTitles));
    localStorage.setItem('favorited_movies', JSON.stringify(this.favoritedMovies));
  }
  
}
