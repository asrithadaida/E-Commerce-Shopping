import {NgModule} from '@angular/core';
import {CommonModule} from '@andular/common';
import { HomeComponent } from '../home/home.component';
import { ProductSliderComponent } from '../home/home-products/product-slider.component';

@NgModule({
    declarations:[],
<<<<<<< Updated upstream
=======
    imports:[
       
    ]
>>>>>>> Stashed changes
    exports:[
        FeatureModule,
    ]
    FeatureComponent,
        HomeComponent,
        MainCarouselComponent,
        ProductSliderComponent
    imports:[
           CommonModule
    ]    
    
})
export class FeatureModule{ }