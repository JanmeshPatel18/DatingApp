import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  
  if(component.editForm?.dirty){
    return confirm("Any unsaved chnages will be gone. Are you sure ??")
  }
  return true;
};
