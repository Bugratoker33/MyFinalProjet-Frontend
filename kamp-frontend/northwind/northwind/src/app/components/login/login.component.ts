import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validator,FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 
 loginForm:FormGroup;
  constructor(private fromBuilder:FormBuilder ,private autService:AuthService ,private tosterService:ToastrService  ) {}
 
  ngOnInit(): void {
  this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm= this.fromBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })

  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      let loginModel= Object.assign({},this.loginForm.value)

      this.autService.login(loginModel).subscribe(response=>{
        this.tosterService.info(response.message)
        localStorage.setItem("token" ,response.data.token)
      },responseError=>{
        this.tosterService.error(responseError.error)
      })
    }
  }

}
