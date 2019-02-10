import {Injectable, Component, OnInit, Input, Inject} from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { StudentService } from '../../student.service';
import { Student } from '../../student';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  comment: string;
  grade: number;
  currentComment: string;
  currentGrade: number;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})

export class ListUploadComponent implements OnInit {
  @Input() fileUpload: string;

  @Input() student: Student;

  showFile = false;
  showFilesByUserNameBoolean = false;

  fileUploads: Observable<string[]>;
  fileUploadsByUserName: Observable<string[]>;

  constructor(private http: HttpClient, private uploadFileService: UploadFileService,
              private sanitizer: DomSanitizer, private studentService: StudentService,
              public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog(fileId: number): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '250px',
      height: '300px',
      data: {fileId : fileId, currentGrade: this.getFileGrade(fileId), currentComment: this.getFileComment(fileId)},
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.comment !== undefined) {
        this.updateFileComment(fileId, result.comment);
      }
      if (result.grade !== undefined) {
        this.updateFileGrade(fileId, result.grade);
      }
    });
  }

  showFiles(enable: boolean) {
    this.showFile = enable;
    if (enable) {
      this.fileUploads = this.uploadFileService.getFiles();
    }
  }

  showFilesByUserName(enable: boolean, username: string) {
    this.showFilesByUserNameBoolean = enable;
    if (enable) {
      this.fileUploadsByUserName = this.uploadFileService.getFilesByUserName(username);
    }
  }

  getMyFile(fileUrl, fileName) {
    this.uploadFileService.downloadFile(fileUrl, fileName);
  }

  updateFileComment(fileId: number, comment: string) {
    this.uploadFileService.updateFileComment(fileId, comment);
  }

  updateFileGrade(fileId: number, grade: number) {
    this.uploadFileService.updateFileGrade(fileId, grade);
  }

  getFileGrade(fileId: number) {
    this.uploadFileService.getFileGrade(fileId);
  }

  getFileComment(fileId: number) {
    this.uploadFileService.getFileComment(fileId);
  }
}

@Component({
  selector: 'app-comment-dialog',
  templateUrl: 'comment-dialog.html',
})
export class CommentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
