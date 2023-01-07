import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
    @Input() myName: string | "Jean-Jacques-Augustin" | undefined;
    @Input() projectName: string | "myportfolio" | undefined;
    @Input() projectDescription: string | "Voici une liste de mes projets" | undefined;

}
