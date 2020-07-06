import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {

  public path = environment.apiPath;
  constructor(private http: HttpClient) { }

  public saveDistrict(districtDetail) {
    return this.http.post<any>(this.path + 'district', districtDetail);
  }

  public getDistrictList(): any {
    return this.http.get<any>(this.path + 'district-list');
  }

  public getDistrictByStateId(stateId) {
    return this.http.get<any>(this.path + 'district?state_id=' + stateId);
  }
}
