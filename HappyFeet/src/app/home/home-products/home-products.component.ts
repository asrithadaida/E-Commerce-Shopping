import { Component } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.scss'
})
export class HomeProductsComponent {
    productsData:any

    currentSlide=0;
    interval:any;
    ngOnInit(){
      this.productsData=homeProductsData;
    }

    autoPlay(){
      setInterval(()=>{
        this.nextSlide();
      },2000)
    }

    nextSlide(){
      this.currentSlide=(this.currentSlide+1) % this.productsData.length;
    }
}


