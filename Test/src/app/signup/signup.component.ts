import { additional } from './../model/additional';
import { personal } from './../model/personal';
import { student } from './../model/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  student = new student();
  personal = new personal();
  additional = new additional();


  studentArray=[];
  viewed:boolean=false;

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

  updateStudent(index){
    this.studentArray.splice(index);
  }

  view(i){
      this.viewed=true;
      console.log(this.studentArray); 
    
  }

  hideDetails(){
    this.viewed=false;
  }

  viewPersonal(){
    console.log(this.personal)
  }

}