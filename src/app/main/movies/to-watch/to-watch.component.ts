import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from 'src/app/shared/models/Movies';

@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.scss']
})
export class ToWatchComponent  implements OnInit {
  movies: Movie[] = JSON.parse(localStorage.getItem('favorited_movies')) ?? [];
  favoritedsTitles: string[] =  JSON.parse(localStorage.getItem('favorited_titles')) ?? [];

  constructor(private snackbar: MatSnackBar) {
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
  unfavorited(title: string) {
    const movie = this.favoritedsTitles.find((movie) => movie === title);
    this.favoritedsTitles = this.favoritedsTitles.filter(movie => movie !== title);
    const control: Movie[] = [];
    this.movies.forEach(movie => {
      if(movie.title === title) return;
      control.push(movie);
    })
    this.movies = control;
    
    this.snackbar.open(`${movie} removed from Watch List!`, 'X', { duration: 1000 });
    this.setLocalStorage();
  }

  setLocalStorage(){
    localStorage.setItem('favorited_titles', JSON.stringify(this.favoritedsTitles));
    localStorage.setItem('favorited_movies', JSON.stringify(this.movies));
  }
  

}
