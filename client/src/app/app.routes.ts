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

export const routes: Routes = [
    {path:"test-error", component:TestErrorsComponent},
    {path:"", component:HomeComponent},
    {path:"server-error", component:ServerErrorComponent},
    {path:"not-found", component:NotFoundComponent},
    {path:"members", component:MemberListComponent, canActivate:[authGuard] },
    {path:"member/:username", component:MemberDetailComponent,canActivate:[authGuard]},
    {path:"list", component:ListsComponent,canActivate:[authGuard]},
    {path:"messages", component:MessagesComponent,canActivate:[authGuard]},
    {path:"**", component:HomeComponent ,pathMatch:'full'},
];
