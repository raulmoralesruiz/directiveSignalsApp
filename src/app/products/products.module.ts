import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
