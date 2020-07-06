import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildService } from 'src/app/services/child/child.service';
import { DistrictService } from 'src/app/services/district/district.service';
import { StateService } from 'src/app/services/state/state.service';
@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss'],
})
export class AddChildComponent implements OnInit {

  public addChildForm = this.fb.group({
    name: ['', Validators.required],
    dob: ['', Validators.required],
    sex: ['', Validators.required],
    fatherName: ['', Validators.required],
    motherName: ['', Validators.required],
    state: ['', Validators.required],
    districtId: ['', Validators.required],
  });
  public files: any;

  constructor(
    private fb: FormBuilder, private childService: ChildService, private router: Router,
    private stateService: StateService, private districtService: DistrictService,
  ) { }
  public selectedValue: string;
  public selectedCar: string;

  public genderList = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' },
    { value: '3', viewValue: 'Transgender' },
  ];
  public states = [];
  public districtList = [];

  public ngOnInit(): void {
    this.getStateList();
    // this.getDistrictByStateId();
  }
  public onSubmit() {
    this.childService.saveChild(this.addChildForm.value).subscribe((res) => {
      if (res.data) {
        this.router.navigate(['/dashboard/child']);
      }
    }, (err) => {
      console.log(err.message);
    });
    this.addChildForm.reset();
  }

  public getStateList() {
    this.stateService.getStateList().subscribe((res) => {
      for (const data of res.data) {
        this.states.push({ value: data.id, viewValue: data.stateName });
      }
    }, (err) => {
      console.log(err.message);
    });
  }
  public getDistrictByStateId(stateId = 1) {
    this.districtService.getDistrictByStateId(stateId).subscribe((res) => {
      for (const data of res.data) {
        this.districtList.push({ value: data.id, viewValue: data.districtName });
      }
    }, (err) => {
      console.log(err.message);
    });
  }

  public selectStates(event) {
    this.districtService.getDistrictByStateId(event.value).subscribe((res) => {
      this.districtList = [];
      for (const data of res.data) {
        this.districtList.push({ value: data.id, viewValue: data.districtName });
      }
    }, (err) => {
      console.log(err.message);
    });
  }
  public selectDistrict(event) {
    console.log(event);
  }
}
