import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
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
    city: ['', Validators.required],
    state: ['', Validators.required],
  });
  public files: any;

  constructor(private fb: FormBuilder) { }
  public selectedValue: string;
  public selectedCar: string;

  public genderList = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' },
    { value: '3', viewValue: 'Transgender' },
  ];
  public states = [
    { value: '1', viewValue: 'Uttar Pradesh' },
    { value: '2', viewValue: 'New Delhi' },
    { value: '3', viewValue: 'Maharashtra' },
  ];
  public cities = [
    { value: '1', viewValue: 'Noida' },
    { value: '2', viewValue: 'New Delhi' },
    { value: '3', viewValue: 'Banglore' },
  ];

  public ngOnInit(): void {
  }
  public onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.addChildForm.value);
  }
}
