import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomePageOrg } from './home_page_org.component'
import { DataChoicePage } from './data_choice/data_choice_page.component'
import { HomeOrgComponent } from './home/home.component'

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'org',
			component: HomePageOrg,
			children: [{
				path: 'accueil',
				component: HomeOrgComponent
			},{
				path: 'data_choice',
				component: DataChoicePage
			},{
				path: '',
				redirectTo: 'accueil',
				pathMatch: 'full'
			}]
		}])
	],
	exports: [
		RouterModule
	]
})


export class OrgRoutes { }