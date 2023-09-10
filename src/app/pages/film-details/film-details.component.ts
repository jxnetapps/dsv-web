import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/shared';
import { FilmModel } from 'src/app/shared/models/film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent {
  tags = new BehaviorSubject<any[]>([]);
  movie!:FilmModel;

  constructor(private _http: ApiService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.getFilmDetails(id);
    });
  }

  getFilmDetails(id: string) {
    this._http.getFilmDetails(id).subscribe((response: FilmModel) => {
      this.movie = response;
      if (response.peoples && response.peoples.length > 0) {
        this.tags.next(response.peoples)
      }
    });
  }

  getPosterPath(path: any){
    if(path)
      return path;

    return '1.jpg'// default poster path
  }
}
