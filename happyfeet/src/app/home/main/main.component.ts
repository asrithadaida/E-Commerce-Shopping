import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  c1data:any
  currentSlide=0;
  interval:any;

  ngOnInit(){
    this.c1data="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstocksnap.io%2Fsearch%2Fshoes&psig=AOvVaw1y6ilXsSvd1XvQg2vcpoWh&ust=1708665223086000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIii5I6YvoQDFQAAAAAdAAAAABAJ";
    this.autoPlay()
  }

  ngOnInit(){
    this.c1data=HomeComponent;
    this.autoPlay()
  }

  autoPlay(){
    setInterval(()=>{this.nextSlide},2000)
  }

  nextSlide(){
    this.currentSlide=(this.currentSlide+1) % this.c1data.length;
  }

}
