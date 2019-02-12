import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../student';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Observable<Student[]>;

  constructor(private studentService: StudentService, private token: TokenStorageService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentList();
  }

}
