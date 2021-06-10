import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  nameFormControl = new FormControl(null,Validators.required);
  emailFormControl = new FormControl(null,[Validators.email,Validators.required]);
  telFormControl = new FormControl(null,Validators.required);

  editStudentFormGroup = new FormGroup({
    name: this.nameFormControl,
    email:  this.emailFormControl,
    tel: this.telFormControl,
    version: new FormControl(),
    id: new FormControl()
  });

  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const student = this.studentService.student;
    // {  
    //   name:'xxxx';
    //   email:'xxxx';
    //   tel:'xxxx';
    //   createBy?: null;
    //   createDate?: null;
    //   id: 0;
    //   updateBy?: null;
    //   updateDate?: null;
    //   version: 0;
    // }
    if(student){
      this.editStudentFormGroup.patchValue(student);
    }
  }

  resetStudent(){
    this.editStudentFormGroup.reset();
  }

  updateStudent(){
    const student = this.editStudentFormGroup.value;
    this.studentService.editStudent(student).subscribe(response=>{
      
      this.editStudentFormGroup.patchValue({version:response.result.version});
      this.messageService.add({severity:'success', summary: 'Success', detail: 'บันทึกสำเร็จแว้ววว'});
    })
  }
}
