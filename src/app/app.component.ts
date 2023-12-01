import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/services/movies.service';
import { Movie } from './shared/models/Movies';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
