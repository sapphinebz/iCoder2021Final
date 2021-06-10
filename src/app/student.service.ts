import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OptionalStudent, PrototypeStudent, ResponseAddStudent, ResponseEditStudent, ResponseStudentAll, Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student: Student|null = null;
  
  constructor(private http: HttpClient) { }

  getStudentAll(condition: OptionalStudent){
    const noNullCondition: OptionalStudent = {};
    if(condition.name){
      noNullCondition.name = condition.name;
    }
    if(condition.email){
      noNullCondition.email = condition.email;
    }
    if(condition.tel){
      noNullCondition.tel = condition.tel;
    }
    
    const httpParams = new HttpParams({fromObject:noNullCondition})
    return this.http.get<ResponseStudentAll>('/training-demo/student/all',{params: httpParams})
  }

  addStudent(student: PrototypeStudent){
    return this.http.post<ResponseAddStudent>('/training-demo/student',student)
  }

  editStudent(student: Student){
    return this.http.put<ResponseEditStudent>('/training-demo/student',student)
  }

  deleteStudent(id: number){
    return this.http.delete(`/training-demo/student/${id}`);
  
  }
}




