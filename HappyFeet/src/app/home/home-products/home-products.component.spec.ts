import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsComponent } from './home-products.component';

describe('HomeProductsComponent', () => {
  let component: HomeProductsComponent;
  let fixture: ComponentFixture<HomeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function expect(component: HomeProductsComponent) {
  throw new Error('Function not implemented.');
}

