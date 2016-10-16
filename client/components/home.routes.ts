import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomeMainPage } from './home_main_page.component'


import { PageNotFound } from './page_not_found.component'

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'home',
			component: HomeMainPage
		},{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full'
		}])
	],
	exports: [
		RouterModule
	]
})

export class HomeRoutes {}