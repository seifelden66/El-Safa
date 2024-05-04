import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {

  singin : FormGroup;


  constructor (private http : HttpClient , private route : Router ){
    this.singin = new FormGroup ({
      name : new FormControl("",[Validators.required]),
      location : new FormControl("",Validators.required),
      email: new FormControl("",[Validators.email,Validators.required]),
      phone : new FormControl("", Validators.required),
      password: new FormControl("",Validators.required),
      img : new FormControl(""),
      // rpassword: new FormControl("",Validators.required)
    })
  
  }
  // ngOnInit(): void {
  //   // this.insertuser()
  // }

  insertuser(){
    this.http.post('http://localhost:8000/v1/users/register', this.singin.value).subscribe(
      (res: any) => {  // Use 'any' as a type for res
        // Check if res.success exists and is a string
        if (res && typeof res.success === 'string') {
          const token = res.success;
  
          function setCookie(name: string, value: string, hours: number){
            const date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
          }
  
          setCookie('userToken', token, 7);  // Set the token as a cookie
          this.route.navigate(['home'])
          console.log(token); // Log the token
        } else {
          console.log('Token not found or is not a string');
        }
      },
      err => {
  
        console.log(err);
        
        
      }
    );
  }
  

  submithandel(){
    console.log(this.singin);
    
  }







}

// http://localhsot:8000/v1/users/register



