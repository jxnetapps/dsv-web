import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService, PeopleModel, FilmModel } from '../../shared';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  person!: PeopleModel;
  tags = new BehaviorSubject<any[]>([]);

  constructor(private _http: ApiService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.getPersonDetails(id);
    });
  }

  getPersonDetails(id: string) {
    this._http
    .getPeopleDetails(id)
    .subscribe((response: any) => {
      this.person = response;
      if (response.films && response.films.length > 0) {
        this.tags.next(response.films)
      }
    });
  }
}
