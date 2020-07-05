import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  {
    name: 'Anurudh Ojha', sex: 'Male', dob: '1997/07/25',
    fatherName: 'Ashok Ojha', motherName: 'Asha Ojha', state: 'Uttar Pradesh', district: 'Amethi', action: '',
  },
  {
    name: 'Anurudh Ojha', sex: 'Male', dob: '1997/07/25',
    fatherName: 'Ashok Ojha', motherName: 'Asha Ojha', state: 'Uttar Pradesh', district: 'Amethi', action: '',
  },
  {
    name: 'Anurudh Ojha', sex: 'Male', dob: '1997/07/25',
    fatherName: 'Ashok Ojha', motherName: 'Asha Ojha', state: 'Uttar Pradesh', district: 'Amethi', action: '',
  },
  {
    name: 'Anurudh Ojha', sex: 'Male', dob: '1997/07/25',
    fatherName: 'Ashok Ojha', motherName: 'Asha Ojha', state: 'Uttar Pradesh', district: 'Amethi', action: '',
  },
  {
    name: 'Anurudh Ojha', sex: 'Male', dob: '1997/07/25',
    fatherName: 'Ashok Ojha', motherName: 'Asha Ojha', state: 'Uttar Pradesh', district: 'Amethi', action: '',
  },
  {
    name: 'Anurudh Ojha', sex: 'Male', dob: '1997/07/25',
    fatherName: 'Ashok Ojha', motherName: 'Asha Ojha', state: 'Uttar Pradesh', district: 'Amethi', action: '',
  },
];

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  constructor() { }

  public dataSource = new MatTableDataSource<IPeriodicElement>(ELEMENT_DATA);
  public displayedColumns: string[] = ['name', 'sex', 'dob', 'fatherName', 'motherName', 'state', 'district', 'action'];
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;

  public ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
