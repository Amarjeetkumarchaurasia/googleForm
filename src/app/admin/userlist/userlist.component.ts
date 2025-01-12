import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  displayedColumns: string[] = ['id','name','post','reg_no', 'email','mobile_no', 'photo', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  url: string = 'https://educatorbox.com/Development/assets/photo/'

  constructor(
    private _crud: CrudService,
    private _routing: Router
  ) { }

  ngOnInit() {
    this._crud.get_user().subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);

      }
    )
  }

  applyFilter(data: any) {

  }

  onEdit(data: any) {
    console.log(data);

  }

  onDelete(data: any) {

  }

  onPrint(data: any) {

    this._crud.print_data.next(data)

    this._routing.navigate(['printPage'])

  }

  
}
