import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  nameFormControl = new FormControl(null,Validators.required);
  emailFormControl = new FormControl(null,[Validators.required,Validators.email]);
  telFormControl = new FormControl(null,Validators.required);

  addStudentFormGroup = new FormGroup({
    name: this.nameFormControl,
    email:  this.emailFormControl,
    tel: this.telFormControl
  });

  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  resetStudent(){
    this.addStudentFormGroup.reset();
  }


  addStudent(){
      const student = this.addStudentFormGroup.value;
      this.studentService.addStudent(student).subscribe(
        response=>{
          // [routerLink]="['/student']"
          this.router.navigate(['/student']);
          this.messageService.add({severity:'success', summary: 'Success', detail: 'บันทึกสำเร็จแว้ววว'});
        }
      )
    // {name: '2333',email:'23423423',tel:'4545'}
    // const student: Student  =
    // this.studentService.addStudent()
  }
}
