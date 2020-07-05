import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {

  public statesList = [];

  constructor(private fb: FormBuilder) { }
  public addStateForm = this.fb.group({
    stateName: ['', Validators.required],
  });
  public ngOnInit(): void {
  }

  public addState() {
    this.statesList.push(this.addStateForm.value);
  }

}
