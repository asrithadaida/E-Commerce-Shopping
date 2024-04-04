import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component.spec';
import {BrowserAnimationsModule} from '@angular/platform-BrowserAnimationsModule';
import {StoreModule} from '@ngrx/Store';
import {authReducer} from './state/Auth/authReducer';
import {HttpClientModule} from '@angular/common/http';
import {userReducer} from './state/user/userReducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {productReducer} from './state/Product/product.reducer';
import {cartReducer} from './state/Cart/cart.reducer';
import {orderReducder} from './state/Order/order.reducer';
import {AdminModule} from './Module/admin/admin.module';
import {AuthModule} from './Module/auth/auth.module';
import { FeatureModule } from './Module/feature.module';
import {SharedModule} from './Module/shared/shared.module';
import {reviewReducer} from './state/Review/review.reducer';
import { HomeComponent } from './home/home.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { ProductSliderComponent } from './home/home-products/product-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavContentComponent } from './navbar/nav-content.component';


@NgModule({
  declarations: [AppComponent,
  HomeComponent,
  MainCarouselComponent,
  HomeProductsComponent,
  ProductSliderComponent,
  NavbarComponent,
  NavContentComponent,
  FooterComponent,
],

  imports[
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    AuthModule,
    AdminModule,
    BrowserAnimationsModule,

})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'happyfeet';
}
