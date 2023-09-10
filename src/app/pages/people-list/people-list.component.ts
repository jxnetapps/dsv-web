import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService, PeopleModel, FilmModel } from '../../shared';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  peopleResultItems: any = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = [
    'name',
    'gender',
    'action',
  ];

  constructor(private _http: ApiService) {
    
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this._http
    .getAllPeople()
    .subscribe((response: any) => {
      this.peopleResultItems = response.items;
      this.dataSource = new MatTableDataSource<PeopleModel>(this.peopleResultItems);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  deleteStudent(index: number, e: any) {
    //delete 
  }
}