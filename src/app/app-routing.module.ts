import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageComponent} from "./pages/mainpage/mainpage.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ContactComponent} from "./pages/contact/contact.component";

export const routes: Routes = [
    {
        path: '',
        component: MainpageComponent,
        title : 'Accueil',
    },
    {
        path: 'home',
        component: SkillsComponent,
        title : 'Compétences',
    },
    {
        path: 'about',
        component: ProjectsComponent,
        title : 'Projets'
    },
    {
        path: 'projects',
        component: ContactComponent,
        title : 'Contact'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
