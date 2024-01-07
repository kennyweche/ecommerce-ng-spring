import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@NgModule({
  declarations: [
    PaginationHeaderComponent,
    PaginationComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot()
  ],exports:[
    PaginationModule,
    PaginationHeaderComponent,
    PaginationComponent,
    CarouselModule,
    OrderSummaryComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
