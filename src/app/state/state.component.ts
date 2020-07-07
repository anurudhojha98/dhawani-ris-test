import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {

  public statesList = [];

  constructor(private fb: FormBuilder, private stateService: StateService) { }
  public addStateForm = this.fb.group({
    stateName: ['', Validators.required],
  });
  public ngOnInit(): void {
    this.getState();
  }

  public addState() {
    this.stateService.saveState(this.addStateForm.value).subscribe((res) => {
      if (res.data) {
        this.getState();
      }
      console.log(res);
    }, (err) => {
      console.log(err.message);
    });
    this.addStateForm.reset();
  }
  public getState() {
    this.stateService.getStateList().subscribe((res) => {
      this.statesList = res.data;
    }, (err) => {
      console.log(err.message);
    });
  }

}
