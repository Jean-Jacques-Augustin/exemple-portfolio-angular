import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {MainpageComponent} from './pages/mainpage/mainpage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopbarComponent} from "./components/topbar/topbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        MainpageComponent,
        TopbarComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
