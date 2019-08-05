import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { HiveFormComponent } from 'app/hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from 'app/hive-management/forms/hive-section-form.component';
import { HiveListComponent } from 'app/hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from 'app/hive-management/lists/hive-section-list.component';
import { HiveSectionService } from 'app/hive-management/services/hive-section.service';
import { HiveService } from 'app/hive-management/services/hive.service';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { ProductCategoryFormComponent } from 'app/product-management/forms/product-category-form.component';
import { ProductFormComponent } from 'app/product-management/forms/product-form.component';
import { ProductCategoryListComponent } from 'app/product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from 'app/product-management/lists/product-category-product-list.component';
import { ProductListComponent } from 'app/product-management/lists/product-list.component';
import { ProductCategoryService } from 'app/product-management/services/product-category.service';
import { ProductService } from 'app/product-management/services/product.service';
import { EmployeeFormComponent } from './eployee-management/forms/employee-form.component';
import { EmployeeListComponent } from './eployee-management/lists/employee-list.component';
import { CompanyListComponent } from './company-management/lists/company-list.component';
import { CompanyService } from './company-management/services/company.service';
import { OrderService } from './company-management/services/order.service';
import { CompanyFormComponent } from './company-management/forms/company-form.component';
import { OrderFormComponent } from './company-management/forms/order-form.component';
import { OrderListComponent } from './company-management/lists/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductCategoryListComponent,
    ProductCategoryFormComponent,
    ProductCategoryProductListComponent,
    ProductListComponent,
    ProductFormComponent,
    HiveListComponent,
    HiveFormComponent,
    HiveSectionFormComponent,
    HiveSectionListComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    CompanyListComponent,
    CompanyFormComponent,
    OrderFormComponent,
    OrderListComponent
  ],
  imports: [
    // Angular imports
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // Application imports
    AppRoutingModule,
  ],
  providers: [
    // Angular providers
    HttpClient,
    // Application providers
    ProductService,
    ProductCategoryService,
    HiveService,
    HiveSectionService,
    CompanyService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
