import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClinet: HttpClient) {}

  getMovies() {
    return this.httpClinet.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=bcdb820e479a1cdae553066f5aae7dd0'
    );
  }
}
