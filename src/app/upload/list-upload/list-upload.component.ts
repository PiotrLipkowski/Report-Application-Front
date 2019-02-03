import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})

export class ListUploadComponent implements OnInit {
  fileUrl
	@Input() fileUpload: string;

  showFile = false;
  showFilesByUserNameBoolean = false;

  fileUploads: Observable<string[]>;
  fileUploadsByUserName: Observable<string[]>;

  constructor(private http: HttpClient, private uploadFileService: UploadFileService, private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadFileService.getFiles();
    }
  }

  showFilesByUserName(enable: boolean) {
    this.showFilesByUserNameBoolean = enable;

    if (enable) {
      this.fileUploadsByUserName = this.uploadFileService.getFilesByUserName('chris');
    }
  }

  getMyFile(fileUrl, fileName){
    this.uploadFileService.downloadFile(fileUrl, fileName);
  }
}
