import { Component } from '@angular/core'

import { Categorie } from './../../../../objects/categorie'

import { ServiceCaterogiesModules } from './../../../../services/modules/categories.service'

@Component({
	moduleId : module.id,
	selector: 'my-attrs-data-choice-org',
	templateUrl: 'attrs_data_choice.component.html'
})

export class AttrsDataChoiceOrgComponent {
		categories: Categorie[] = [];

		constructor(
			private serviceCategories: ServiceCaterogiesModules
		) {}

		ngOnInit(): void {
			this.serviceCategories.getCategories()
			.then(categories => /*{*/this.categories = categories/*; console.log(categories)}*/);
		} 
}