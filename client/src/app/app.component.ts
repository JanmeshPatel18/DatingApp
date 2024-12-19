import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'DatingApp';
  http = inject(HttpClient);
  users:any
  
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/Users').subscribe({
      next:response=>this.users=response,
      error:error=>console.log(error),
      complete:()=>console.log("Success")
    })
  }
}
