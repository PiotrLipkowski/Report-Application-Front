import { Injectable, Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { UploadFileService } from '../upload/upload-file.service';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  comment: string;
  grade: string;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() fileUpload: string;

  @Input() student: Student;

  showFilesByUserNameBoolean = false;

  fileUploads: Observable<string[]>;
  fileUploadsByUserName: Observable<string[]>;

  constructor(private http: HttpClient, private uploadFileService: UploadFileService,
    private sanitizer: DomSanitizer, private studentService: StudentService,
    public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog(fileId: number): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '400px',
      height: '370px',
      data: {fileId : fileId},
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.grade !== undefined && result.comment === undefined) {
          this.updateFileGrade(fileId, result.grade);
        } else if (result.comment !== undefined && result.grade === undefined) {
          this.updateFileComment(fileId, result.comment);
        } else if (result.comment !== undefined && result.grade !== undefined) {
          this.updateFileComment(fileId, result.comment);
          this.updateFileGrade(fileId, result.grade);
        }
      }
    });
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

  updateFileGrade(fileId: number, grade: string) {
    this.uploadFileService.updateFileGrade(fileId, grade);
  }

  getFileGrade(fileId: number) {
    return this.uploadFileService.getFileGrade(fileId);
  }

  getFileComment(fileId: number) {
    return this.uploadFileService.getFileComment(fileId);
  }

}

@Component({
  selector: 'app-comment-dialog',
  templateUrl: 'comment-dialog.html',
})
export class CommentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

