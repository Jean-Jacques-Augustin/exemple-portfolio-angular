import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  welcome = "Bienvenue dans mon portfolio";
  description =  "Ce site contient mes travail en tant que developer web"
}
