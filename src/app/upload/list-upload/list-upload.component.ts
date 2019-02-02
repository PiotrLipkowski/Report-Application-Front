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
  showFilesByUserNameBoolean = false;

  fileUploads: Observable<string[]>;
  fileUploadsByUserName: Observable<string[]>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {

  }


  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();

    }
  }

  showFilesByUserName(enable: boolean) {
    this.showFilesByUserNameBoolean = enable;

    if (enable) {
      this.fileUploadsByUserName = this.uploadService.getFilesByUserName('chris');
    }
  }


}
