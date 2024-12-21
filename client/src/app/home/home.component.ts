import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  registerMode = false;
  http = inject(HttpClient);
  users : any;
  
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  ngOnInit(): void {
    this.getUser();
  }
  
  toggleRegsisteMode(){
    this.registerMode = !this.registerMode;
  }
  
  getUser(){
    this.http.get('http://localhost:5000/api/Users').subscribe({
      next:response=>this.users=response,
      error:error=>console.log(error),
      complete:()=>console.log("Success")
    })
  }
}
