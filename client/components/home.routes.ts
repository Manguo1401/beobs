import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomeMainPage } from './home_main_page.component'


import { PageNotFound } from './page_not_found.component'

@NgModule({
	imports: [
		RouterModule.forRoot([{
			path: 'accueil',
			component: HomeMainPage
		},{
			path: '',
			redirectTo: 'accueil',
			pathMatch: 'full'
		},{
			path: '**',
			component: PageNotFound
		}])
	],
	exports: [
		RouterModule
	]
})

export class HomeRoutes {}

