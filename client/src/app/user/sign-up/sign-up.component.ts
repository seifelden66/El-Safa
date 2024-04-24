import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {

  singin : FormGroup;


  constructor (private http : HttpClient ){
    this.singin = new FormGroup ({
      name : new FormControl("",[Validators.required]),
      location : new FormControl("",Validators.required),
      email: new FormControl("",[Validators.email,Validators.required]),
      // pnum : new FormControl("", Validators.required),
      password: new FormControl("",Validators.required),
      // rpassword: new FormControl("",Validators.required)
    })
  
  }
  // ngOnInit(): void {
  //   // this.insertuser()
  // }

  insertuser(){
    this.http.post('http://localhost:8000/v1/users/register',this.singin.value).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log(err.error);
      }
    )
  }

  submithandel(){
    console.log(this.singin);
    
  }





}

// http://localhsot:8000/v1/users/register



