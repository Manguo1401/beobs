import { Routes, RouterModule } from '@angular/router'

import { HomeMainPage } from './components/home_main_page.component'
import { HomeOrgPage } from './components/org/home_org_page.component'

import { AttrsDataChoicePage } from './components/org/data_items/attrs_data_choice_page.component'
import { LocalisationChoicePage } from './components/org/data_items/localisation_choice_page.component'
import { SpeciesChoicePage } from './components/org/data_items/species_choice_page.component'

export const routes: Routes = [{
	path: 'accueil',
	component: HomeMainPage
},{
	path: '',
	redirectTo: 'accueil',
	pathMatch: 'full'
},{
	path: 'org',
	children: [{
		path: 'accueil',
		component: HomeOrgPage
	},{
		path: '',
		redirectTo: 'accueil',
		pathMatch: 'full'
	},{
		path: 'donnees_attributaires',
		children: [{
			path: '',
			redirectTo: 'attrs_data_choice',
			pathMatch: 'full'
		},{
			path: 'attrs_data_choice',
			component: AttrsDataChoicePage
		},{
			path: 'localisation_choice',
			component: LocalisationChoicePage
		},{
			path: 'species_choice',
			component: SpeciesChoicePage
		}]
	}]
}];

export const routing = RouterModule.forRoot(routes, { useHash: true });