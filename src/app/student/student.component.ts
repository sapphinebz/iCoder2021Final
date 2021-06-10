import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];

  nameFormControl = new FormControl();
  emailFormControl = new FormControl();
  telFormControl = new FormControl();

  queryStudentFormGroup = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl
  })

  
  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private router: Router
    ) {

   }

  ngOnInit(): void {
  }

  queryStudent(){
    // {name:'xxxx', email:'xxxx', tel: 'xxxx'}
    const condition = this.queryStudentFormGroup.value;

    this.studentService.getStudentAll(condition).subscribe(response=>{
      this.students = response.result
    })
  }

  resetStudent(){
    this.queryStudentFormGroup.reset();
    this.students = [];
  }

  editStudent(student: Student){
    this.studentService.student = student;
    this.router.navigate(['/edit']);
  }

  deleteStudent(student:Student){
    this.studentService.deleteStudent(student.id)
    .subscribe(response=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'ลบสำเร็จแว้ววว'});

      const index = this.students.findIndex(st=>st.id===student.id);
      if(index>-1){
        this.students.splice(index,1);
      }
    })
  }

}
