import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Routes,RouterModule, Router} from '@angular/router';
import {routing} from './../../app.routing';
import {LoginComponentInterface} from "./LoginComponentInterface";
import {LoginTO} from "../../to/LoginTO";
import {LoginConverter} from "../../adapter/interfaces/LoginConverter";


import {LoginConverterImpl} from "../../adapter/impl/LoginConverterImpl";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 providers: [{provide: 'LoginConverter', useClass: LoginConverterImpl}],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit , LoginComponentInterface{
  userForm: any;
  errorMessage:string;
  sucessMessage:string;
  active:string="0";//0 for no content, 1 for success, 2 for error


  constructor(@Inject('LoginConverter') private loginConverter: LoginConverter,private router: Router, private formBuilder: FormBuilder){
    this.userForm = formBuilder.group({
      username: [],
      password: []
    })
 }
    // constructor(private router: Router){
    // }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
   });
  }



  signUp({value, valid}: {value: LoginTO, valid: boolean}) {
    this.loginConverter.signUp(value,this)

  }

  login({value, valid}: {value: LoginTO, valid: boolean}) {
  this.loginConverter.login(value,this)

  }

  resetPassword({value, valid}: {value: LoginTO, valid: boolean}) {
    if(value.username == null)
      {
        this.setUserErrorMessageonUI("Please Enter Username");
      }
    else
      {
        this.loginConverter.resetPassword(value,this)
      }

  }

  successMessageCallBack(message1:string) {
    console.log(message1.length + 'sucess');
    this.sucessMessage = "Login Success!";
    setTimeout(()=>{
      this.router.navigate(['/Menu']);
    },2000);
  }

  errorMessageCallBack(message:string){
    console.log(message.length + 'Navigate to Error page');
  }





  setUserSuccessMessageonUI(message:string)
  {
    this.sucessMessage = message;
    this.active="1";
    setTimeout(()=>{
      this.sucessMessage = "";
      this.active="0";
    },2000);
  }
  setUserErrorMessageonUI(message:string)
  {
    this.errorMessage = message;
    this.active="2";
    setTimeout(()=>{
      this.errorMessage = "";
      this.active="0";
    },2000);
  }



  }




