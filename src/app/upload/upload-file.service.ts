import { Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
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


  constructor(private http: HttpClient, private userService: UserService, public token: TokenStorageService) { }


  //POST na serwer wybranego pliku
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8080/api/file/upload/'+this.token.getUsername(), formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  ngOnInit() {
      this.info = {

      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }


  //pobiera z rest wszystkie pliki
  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/all');
  }



  //tworzy plik blob z dorzuceniem tokena w naglowku
  downloadFile(route: string, filename: string = null): void{
    const baseUrl = '';
    const token = this.token.getToken();
    const headers = new HttpHeaders().set('authorization','Bearer '+token);
    this.http.get(baseUrl + route,{headers, responseType: 'blob' as 'json'}).subscribe(
        (response: any) =>{
            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
            if (filename)
                downloadLink.setAttribute('download', filename);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }
    )
}


getFilesByUserName(userName) : Observable<any>{
  	return this.http.get('http://localhost:8080/api/file/'+userName+'/all');
  }






}
