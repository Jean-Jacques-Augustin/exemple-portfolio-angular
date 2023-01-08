import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  title = 'myportfolio';

  @Input()
  onclick() {
    console.log("click");
  }

  constructor() { }

}
