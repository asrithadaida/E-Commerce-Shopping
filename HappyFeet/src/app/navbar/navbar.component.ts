import {component} from 'angular/core';

@component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.scss']
    })
export class NavbarComponent {
    currentSection:any
    isNavbarContentOpen:any
    openNavbarContent(menu:any){
        this.isNavbarContentOpen=true;
        this.currentSection=true;

    }
    closeNavbarContent(){
        this.isNavbarContentOpen=false;
    }
    navigateTo(path:any){

    }
}