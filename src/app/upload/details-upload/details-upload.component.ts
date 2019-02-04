import {Injectable, Component, OnInit, Input} from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})


export class DetailsUploadComponent implements OnInit {
    fileUrl
	@Input() fileUpload: string;

  constructor(private http: HttpClient, private uploadFileService: UploadFileService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

  }


  getMyFile(){
    this.uploadFileService.downloadFile();
  }






}
