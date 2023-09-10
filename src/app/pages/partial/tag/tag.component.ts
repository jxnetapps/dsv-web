import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() isMovie:boolean = false;
  @Input() tags:any[] | null =[];

  constructor(private _routes: Router) { }

  ngOnInit() {
  }

  gotoFilmDetails = (id: string) =>{

    if(this.isMovie)
      this._routes.navigateByUrl(`/films/${id}`)
    else
    this._routes.navigateByUrl(`/people/${id}`)
  }

}
