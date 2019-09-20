import { student } from './../model/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  student = new student();
  studentArray=[];

  constructor() { }

  ngOnInit() {
    this.studentArray.push(this.student);
  }

  addStudent(){
    this.student = new student();
    this.studentArray.push(this.student);
  }

  removeStudent(index){
    this.studentArray.splice(index);
  }

  submit(){
    console.log(this.studentArray);
  }

}
