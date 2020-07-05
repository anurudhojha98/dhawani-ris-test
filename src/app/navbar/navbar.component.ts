import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor() { }
  public profile: string;
  public log: string;
  public ngOnInit(): void {
  }

  public logout() { }
}
