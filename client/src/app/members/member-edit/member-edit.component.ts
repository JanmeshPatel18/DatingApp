import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule} from 'ngx-spinner';
@Component({
  selector: 'app-member-edit',
  imports: [TabsModule,FormsModule,NgxSpinnerModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit{
  
  @ViewChild('editForm') editForm ?: NgForm
 
   
  private memberService = inject(MembersService);
  private toastr = inject(ToastrService)
  private accountService = inject(AccountService);
  member ?: Member
      
   ngOnInit(): void {
      this.loadMember()
    }
  
    loadMember(){
      const user = this.accountService.currentUser()
      if(!user) return

      this.memberService.getMember(user.username).subscribe({
        next: member => this.member=member
      })
    }

    updateMember(){
      this.memberService.updateMember(this.editForm?.value).subscribe({
        next:_ => {
          this.toastr.success("Updated Profile")
          this.editForm?.reset(this.member)
        }
      })
    }

}
