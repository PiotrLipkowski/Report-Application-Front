import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';


@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  showFileById = false;
  
  fileUploads: Observable<string[]>;
  fileUploadsById: Observable<string[]>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {

  }


  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();

    }
  }




  showFilesById(enable: boolean) {
    this.showFileById = enable;

    if (enable) {
      this.fileUploadsById = this.uploadService.getFilesById(1);
    }
  }
}
