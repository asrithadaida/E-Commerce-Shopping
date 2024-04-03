import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  @Input() title:any
  @Input() products:any
  @Input() filterData:any


  ngOnInit(){
    this.title=this.title;
  }

  ngOnInit(){
    this.products=products;
  }

  ngOnInit(){
    this.filterData=filters;
  }

}


