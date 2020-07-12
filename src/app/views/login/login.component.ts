import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  
  constructor(public authService: AuthService){}

  ngOnInit(): void {
    
  }
}
