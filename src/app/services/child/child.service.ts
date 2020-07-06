import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  public path = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  public saveChild(childData) {
    return this.http.post<any>(this.path + 'child', childData);
  }

  public getChildList(page = 0, pageSize = 5): any {
    return this.http.get(this.path + `child-list?page=${page}&pageSize=${pageSize}`);
  }

  public getChildById(id) {
    return this.http.get<any>(this.path + 'child/' + id);
  }
}
