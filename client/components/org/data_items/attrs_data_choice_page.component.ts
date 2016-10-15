import { Component, OnInit } from '@angular/core'


import { Categorie } from './../../../objects/categorie'

import { ServiceCaterogiesModules } from './../../../services/modules/categories.service'

@Component({
	selector: 'my-attrs-data-choice',
	templateUrl: 'client/components/org/data_items/attrs_data_choice_page.component.html'
})

export class AttrsDataChoicePage {

	categories: Categorie[] = [];

	constructor(
		private serviceCategories: ServiceCaterogiesModules
	) {}

	ngOnInit(): void {
		this.serviceCategories.getCategories()
		.then(categories => /*{*/this.categories = categories/*; console.log(categories)}*/);
	} 
}