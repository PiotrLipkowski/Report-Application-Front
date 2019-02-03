import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student: Observable<Student[]>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.student = this.studentService.getStudentList();
  }

}
