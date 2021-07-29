import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiURL = "https://localhost:44392/api/Student"

  constructor(private myHttp: HttpClient) { }

  getStudents(){
    return this.myHttp.get<Student[]>(this.apiURL);
  }
}
