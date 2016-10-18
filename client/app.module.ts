import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from "@angular/http"

import { AppComponent }  from './app.component'


import { PageNotFound } from './components/page_not_found.component'

//Importation des routes
import { AppRoutes } from "./app.routes"
import { HomeModule } from "./components/home.module"
import { OrgModule } from "./components/org/org.module"
import { AdminModule } from "./components/admin/admin.module"

import { ServiceCaterogiesModules } from "./services/attrs_data/categories.service"

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HomeModule,
        OrgModule,
        AdminModule,
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
