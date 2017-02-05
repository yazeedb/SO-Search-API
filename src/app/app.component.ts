import { Component } from '@angular/core';

import { ModalService } from './modal/modal.service';
import { SearchService } from './search/search.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	questions: any;

	constructor(private modalService: ModalService, private searchService: SearchService) {}

	search(query: string) {
		// this.questions = this.searchService.fakeData(query);

		this.searchService
		.search(query)
		.subscribe(res => this.questions = res.items);
	}
}
