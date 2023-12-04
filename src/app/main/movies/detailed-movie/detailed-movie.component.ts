import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/Movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html',
  styleUrls: ['./detailed-movie.component.scss']
})
export class DetailedMovieComponent implements OnInit {
  movieName: string
  movie: Movie;
  trailer: SafeResourceUrl;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService, public sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.movieName = this.route.snapshot.paramMap.get('title');
    this.moviesService.getAllMovies().subscribe(res => {
      this.movie = res.find(movie => movie.title === this.movieName);
      this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer_link);
    });
  }

  
}
