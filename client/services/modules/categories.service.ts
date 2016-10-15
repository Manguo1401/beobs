import { Injectable } from '@angular/core'

import { Http, Headers } from '@angular/http'

import { Categorie } from './../../objects/categorie'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class ServiceCaterogiesModules {

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getCategories(): Promise<Categorie[]> {
   		return this.http.get('/home/get_categories')
		.toPromise()
		.then(response => /*{*/response.json() as Categorie[]/*; console.log(response.json())}*/)
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}