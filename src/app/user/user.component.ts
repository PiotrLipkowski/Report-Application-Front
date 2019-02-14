import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {TokenStorageService} from '../auth/token-storage.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private token: TokenStorageService) { }
 
  ngOnInit() { }
}
