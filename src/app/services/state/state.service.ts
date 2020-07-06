import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class StateService {
  public path = environment.apiPath;
  constructor(private http: HttpClient) { }

  public saveState(state) {
    return this.http.post<any>(this.path + 'state', state);
  }

  public getStateList(): any {
    return this.http.get<any>(this.path + 'state-list');
  }
}
