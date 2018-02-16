import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private date;
  private user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.date = new Date();
    this.user = this.authService.username();

      }

  
}


