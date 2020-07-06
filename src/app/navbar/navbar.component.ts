import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public profile: string;
  public log: string;
  public ngOnInit(): void {
  }

  public logout() {
    this.authService.logout();
  }
}
