import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  results : any;
 
  constructor(private service : ApiserviceService, private router : Router) { }

  ngOnInit(): void {
    this.service.getData().subscribe(res => {
      this.results = res;      
    });
  } 
  
  loginClicked() {
     if(this.username === this.results.data.username && this.password === this.results.data.password ) {
       this.router.navigate(['/table']);       
     }    
     else {
       alert("Please Enter Valid user id and password");
     }
  }
}
