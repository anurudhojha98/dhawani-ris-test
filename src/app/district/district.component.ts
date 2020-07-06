import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DistrictService } from '../services/district/district.service';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss'],
})
export class DistrictComponent implements OnInit {

  public statesList = [];

  constructor(private fb: FormBuilder, private stateService: StateService, private districtService: DistrictService) { }
  public addDistrictForm = this.fb.group({
    state: ['', Validators.required],
    district: ['', Validators.required],
  });
  public states = [];
  public stateDistrictList = [];
  public ngOnInit(): void {
    this.getStateList();
    this.getStateDistrictList();
  }

  public onSubmit() {
    this.districtService.saveDistrict(this.addDistrictForm.value).subscribe((res) => {
      this.stateDistrictList.push(res.data);
    }, (err) => {
      console.log(err.message);
    });
    this.addDistrictForm.reset();
  }
  public getStateList() {
    this.stateService.getStateList().subscribe((res) => {
      this.states = res.data;
    }, (err) => {
      console.log(err.message);
    });
  }
  public getStateDistrictList() {
    this.districtService.getDistrictList().subscribe((res) => {
      this.stateDistrictList = res.data;
    }, (err) => {
      console.log(err);
    });
  }
}
