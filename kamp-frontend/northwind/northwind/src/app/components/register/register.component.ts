import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup;
  constructor (private frombuilder:FormBuilder , private AuthService:AuthService, private tosterService:ToastrService) {}
 
  ngOnInit(): void {
    this.createRegister();
  }

  createRegister(){
    this.registerForm = this.frombuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]

    })
  }
  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      let registerModd= Object.assign({}, this.registerForm.value);
      this.AuthService.register(registerModd).subscribe(response=>{
        this.tosterService.info("Kayıt başarılı ")
     
        
      })

    }else{
      this.tosterService.error("Lütfenn Tüm alanları Doldurunuz");
    }
    
    
  }
 
}
