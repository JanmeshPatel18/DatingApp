import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model :any = {}
  cancelRegister = output<boolean>();
  private accountService = inject(AccountService);

  register(){
    this.accountService.register(this.model).subscribe({
      next:response =>{
        console.log(response)
        this.cancel()
      },
      error:error=> console.log(error)

    })
  }
  
  cancel(){
    this.cancelRegister.emit(false);
  }
}
