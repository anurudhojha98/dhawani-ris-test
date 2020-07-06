import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChildService } from '../services/child/child.service';
import { CommonFunction } from '../services/common.service';

export interface IPeriodicElement {
  name: string;
  sex: string;
  dob: string;
  fatherName: string;
  motherName: string;
  state: string;
  district: string;
  action: string;
}

const ELEMENT_DATA: IPeriodicElement[] = [
];

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  constructor(
    private childService: ChildService, private commonFunc: CommonFunction,
    private router: Router,
  ) { }
  public pageLength = 0;
  public dataSource = new MatTableDataSource<IPeriodicElement>(ELEMENT_DATA);
  public displayedColumns: string[] = ['name', 'sex', 'dob', 'fatherName', 'motherName', 'state', 'district', 'action'];
  @ViewChild(MatPaginator, { static: false }) public paginator: MatPaginator;

  public ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getChildList();
  }
  public getChildList() {
    this.childService.getChildList().subscribe((res) => {
      this.dataSource = res.data;
      this.pageLength = res.data?.length;
    },
      (err) => {
        console.log(err.message);
      },
    );
  }
  public getServerData(event) {
    this.childService.getChildList(event.pageIndex, event.pageSize).subscribe((res) => {
      this.dataSource = res.data;
      this.pageLength = res.data?.length;
    },
      (err) => {
        console.log(err.message);
      },
    );
  }
  public onView(id) {
    this.commonFunc.setData(id);
    this.router.navigate(['/dashboard/child/view-child', id]);
  }
}
