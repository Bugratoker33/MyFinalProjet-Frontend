import { Component, NgModule, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
// import{FromsModule} from'@angular/forms'

import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule ,ToastrService  } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule,CartSummaryComponent, RouterOutlet, 
    AppComponent,CategoryComponent,NaviComponent, HttpClientModule,
    ProductComponent,RouterLink,VatAddedPipe,FormsModule,FilterPipePipe,
    ToastrModule,ReactiveFormsModule,ProductAddComponent,LoginComponent,RegisterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
 
})
export class AppComponent {
  title = 'northwind';
  user: string = "Buğra Toker"


 
}

