import { Component } from '@angular/core'

import { Categorie } from './../../../../objects/categorie'

import { ServiceCaterogiesModules } from './../../../../services/attrs_data/categories.service'

@Component({
	moduleId : module.id,
	selector: 'my-attrs-data-admin-component',
	templateUrl: 'attrs_data.component.html'
})

export class AttrsDataAdminComponent {
	newCategory = 'test';

	categories: Categorie[] = [];

	constructor(
		private serviceCategories: ServiceCaterogiesModules
	) {}

	ngOnInit(): void {
		this.serviceCategories.getCategories()
		.then(categories => this.categories = categories);
	} 

	addCategory(newCat) {
		console.log(newCat);
	}
}