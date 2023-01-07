import {Component} from '@angular/core';
import {Routes} from "@angular/router";
import {routes} from "../../app-routing.module";

interface NavItem {
    name: string;
    route: string;
}

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
    sidenav = () => {
        console.log("click");
    };
    menu: any;
    routesList:Routes =  routes ;
}
