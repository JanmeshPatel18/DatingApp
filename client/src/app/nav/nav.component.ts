import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-nav',
  imports: [FormsModule,BsDropdownModule],
  standalone:true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any = {};

  
  logIn(){
    this.accountService.logIn(this.model).subscribe({
      next: response => {console.log(response);},
      error: error => console.log(error)
    }
    )
    console.log(this.model)
  }

  logOut(){
    this.accountService.logOut();
  }

}