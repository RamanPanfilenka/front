import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { HiveFormComponent } from './hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from './hive-management/forms/hive-section-form.component';
import { HiveListComponent } from './hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from './hive-management/lists/hive-section-list.component';
import { ProductCategoryFormComponent } from './product-management/forms/product-category-form.component';
import { ProductFormComponent } from './product-management/forms/product-form.component';
import { ProductCategoryListComponent } from './product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from './product-management/lists/product-category-product-list.component';
import { ProductListComponent } from './product-management/lists/product-list.component';
import { EmployeeListComponent } from './eployee-management/lists/employee-list.component';
import { EmployeeFormComponent } from './eployee-management/forms/employee-form.component';
import { CompanyListComponent } from './company-management/lists/company-list.component';
import { CompanyFormComponent } from './company-management/forms/company-form.component';
import { OrderFormComponent } from './company-management/forms/order-form.component';
import { OrderListComponent } from './company-management/lists/order-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'categories', component: ProductCategoryListComponent },
  { path: 'category', component: ProductCategoryFormComponent },
  { path: 'category/:id', component: ProductCategoryFormComponent },
  { path: 'category/:id/products', component: ProductCategoryProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductFormComponent },
  { path: 'category/:categoryId/product/:id', component: ProductFormComponent },
  { path: 'hives', component: HiveListComponent },
  { path: 'hive', component: HiveFormComponent },
  { path: 'hive/:id', component: HiveFormComponent },
  { path: 'hive/:id/sections', component: HiveSectionListComponent },
  { path: 'section/:id', component: HiveSectionFormComponent },
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeFormComponent},
  {path: 'employee', component: EmployeeFormComponent},
  {path: 'companys', component: CompanyListComponent},
  {path: 'company/:id', component: CompanyFormComponent},
  {path: 'company', component: CompanyFormComponent},
  {path: 'company/:id/orders', component: OrderListComponent},
  {path: 'order/:id', component: OrderFormComponent},
  {path: 'order', component: OrderFormComponent},
  {path: 'order/:id/product', component: ProductListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
