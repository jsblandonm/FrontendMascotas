import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreateProductServicesComponent } from './products-services/create-product-services/create-product-services.component';
import { EditProductServicesComponent } from './products-services/edit-product-services/edit-product-services.component';
import { DeleteProductServicesComponent } from './products-services/delete-product-services/delete-product-services.component';
import { SearchProductServicesComponent } from './products-services/search-product-services/search-product-services.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';


@NgModule({
  declarations: [
    CreateProductServicesComponent,
    EditProductServicesComponent,
    DeleteProductServicesComponent,
    SearchProductServicesComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
