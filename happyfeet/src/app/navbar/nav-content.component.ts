import {component} from 'angular/core';

@component({
    selector:'app-nav-contentr',
    templateUrl:'./nav-content.component.html',
    styleUrls:['./nav-content.component.scss']
    })
export class NavContentComponent {
   category:any
   selectedSection:any;
}