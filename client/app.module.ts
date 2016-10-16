import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt"
import { HttpModule } from "@angular/http"
import { NgSemanticModule } from "ng-semantic"

import { AppComponent }  from './app.component'
import { HomeMainPage } from './components/home_main_page.component'


import { PageNotFound } from './components/page_not_found.component'


//Importation des routes
import { OrgRoutes } from "./components/org/org.routes"
import { HomeRoutes } from "./components/home.routes" //A mettre en dernier pour les routes


//Compnsants pour les organismes
import { HomePageOrg } from './components/org/home_page_org.component'
import { HomeOrgComponent } from './components/org/home/home.component'
import { DataChoicePage } from './components/org/data_choice/data_choice_page.component'

import { ServiceCaterogiesModules } from "./services/modules/categories.service"

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        OrgRoutes,
        HomeRoutes //A importer en dernier pour les routes
    ],
    providers: [
        provideAuth({
            globalHeaders: [{"Content-type": "application/json"}],
            newJwtError: true,
            noTokenScheme: true
        }),
        ServiceCaterogiesModules
    ],
    declarations: [ 
        AppComponent,
        HomeMainPage,
        PageNotFound,
        HomePageOrg,
        HomeOrgComponent,
        DataChoicePage
    ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
