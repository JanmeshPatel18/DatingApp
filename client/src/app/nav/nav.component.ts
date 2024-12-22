import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-nav',
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive,TitleCasePipe],
  standalone:true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  private toastr = inject(ToastrService);
  private router = inject(Router)
  accountService = inject(AccountService);
  model: any = {};

  
  logIn(){
    this.accountService.logIn(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: error => this.toastr.error(error.error)
    }
    )
    console.log(this.model)
  }

  logOut(){
    this.accountService.logOut();
    this.router.navigateByUrl('/');
  }

}
