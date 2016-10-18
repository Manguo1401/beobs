import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from "@angular/http"

import { AppComponent }  from './app.component'


import { PageNotFound } from './components/page_not_found.component'

//Importation des routes
import { AppRoutes } from "./app.routes" //A mettre en dernier pour les routes
import { HomeModule } from "./components/home.module" //A mettre en dernier pour les routes
import { OrgModule } from "./components/org/org.module" //A mettre en dernier pour les routes

import { ServiceCaterogiesModules } from "./services/attrs_data/categories.service"

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HomeModule,
        OrgModule,
        AppRoutes //A placer après les modules annexes
    ],
    providers: [
        ServiceCaterogiesModules
    ],
    declarations: [ 
        AppComponent,
        PageNotFound
    ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
