import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_gaurd/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { preventUnsavedChangesGuard } from './_gaurd/prevent-unsaved-changes.guard';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:"test-error", component:TestErrorsComponent},
    {path:"", component:HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate:[authGuard],
        children:[
            {path:"members", component:MemberListComponent},
            {path:"members/:username", component:MemberDetailComponent},
            {path:"list", component:ListsComponent},
            {path:"member/edit", component:MemberEditComponent, canDeactivate:[preventUnsavedChangesGuard] },
            {path:"messages", component:MessagesComponent},
        ]
    },
    
    {path:"server-error", component:ServerErrorComponent},
    {path:"not-found", component:NotFoundComponent},
    {path:"**", component:HomeComponent ,pathMatch:'full'},
];
