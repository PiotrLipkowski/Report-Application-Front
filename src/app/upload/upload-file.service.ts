import { Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';



@Injectable({
  providedIn: 'root'
})
export class UploadFileService{
  
  board: string;
  errorMessage: string;
  info: any;


  constructor(private http: HttpClient, private userService: UserService, private token: TokenStorageService) { }


  
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', 'http://localhost:8080/api/file/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }

  ngOnInit() {
      this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }


 
  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/all');
  }
}