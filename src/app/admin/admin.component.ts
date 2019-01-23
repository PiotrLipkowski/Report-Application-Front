import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: string;
  errorMessage: string;
  info: any;
  
 
  constructor(private userService: UserService, private token: TokenStorageService) { }
 
  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
  
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}