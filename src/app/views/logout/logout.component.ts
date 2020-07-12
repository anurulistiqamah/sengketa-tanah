import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    console.log('keluar');  
    this.authService.SignOut();
  }

}
