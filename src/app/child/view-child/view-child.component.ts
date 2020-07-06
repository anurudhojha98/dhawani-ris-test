import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from 'src/app/services/child/child.service';
import { CommonFunction } from 'src/app/services/common.service';
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private childService: ChildService, private commonFunction: CommonFunction) { }
  public id: number;
  private sub: any;
  public userDetail;
  public ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.childService.getChildById(this.id).subscribe((res) => {
      this.userDetail = res.data;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    console.log(this.commonFunction.getData());

  }
  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
