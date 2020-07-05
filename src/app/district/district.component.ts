import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss'],
})
export class DistrictComponent implements OnInit {

  public statesList = [];

  constructor(private fb: FormBuilder) { }
  public addDistrictForm = this.fb.group({
    state: ['', Validators.required],
    district: ['', Validators.required],
  });
  public states = [
    { value: '1', viewValue: 'Uttar Pradesh' },
    { value: '2', viewValue: 'New Delhi' },
    { value: '3', viewValue: 'Maharashtra' },
  ];
  public stateDistrictList = [];
  public ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.addDistrictForm.value);
    this.stateDistrictList.push(this.addDistrictForm.value);
  }
}
