import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-home',
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  registerMode = false;
  
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  toggleRegsisteMode(){
    this.registerMode = !this.registerMode;
  }
  
}
