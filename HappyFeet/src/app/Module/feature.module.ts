import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { MainComponent } from '../home/main/main.component';
import { ProductSliderComponent } from '../home/home-products/product-slider.component';
import { HomeProductsComponent } from '../home/home-products/home-products.component';

@NgModule({
    declarations: [
        FeatureComponent,
        HomeComponent,
        MainComponent,
        ProductSliderComponent,
        HomeProductsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FeatureComponent,
        HomeComponent
    ]

})
export class FeatureModule{}