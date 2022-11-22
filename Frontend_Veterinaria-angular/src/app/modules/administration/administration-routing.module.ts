import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';


const routes: Routes = [
  {
    path : 'create-user',
    component : CreateUserComponent
  },
  {
    path: 'listUser',
    component : SearchUserComponent
  },  
  {
    path : 'edit-user/:id',
    component : EditUserComponent
  },
  {
    path : 'delete-user',
    component : DeleteUserComponent
  },
  {
    path : 'search-user',
    component	 : SearchUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
