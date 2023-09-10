import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/shared';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {
  
  films = new BehaviorSubject<any[]>([]);

  constructor(private _http: ApiService) {
    
  }

  ngOnInit() {
    this.getFilms()
  }

  getFilms(){
    this._http
    .getFilms()
    .subscribe((response: any) => {
      const filmsTmp = response.items && response.items.length > 0 ? response.items : [];
      console.log(filmsTmp)
      this.films.next(filmsTmp)
    });
  }

  getPosterPath(path: any){
    if(path)
      return path;

    return '1.jpg'// default poster path
  }
}
